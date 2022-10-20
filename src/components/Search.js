import React, { useState } from 'react';
import Animation from '@components/Animation';
import Result from '@components/Result';
import '@styles/Search.css';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { yellow, common } from '@mui/material/colors';
import axios from 'axios';

Search.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    APIkey: PropTypes.string
};

const radioProp = {
    color: common['white'],
    '&.Mui-checked': {
        color: yellow[600],
    },
};
const noSpaceOnStartFilter = (input) => {
    if (/^\s/.test(input)) {
        return '';
    }
    return input;
};

function Search({ data, APIkey }) {
    const [filteredData, setFilteredData] = useState([]);
    const [searchStateFlag, setSearchStateFlag] = useState(false);
    const [wordEntered, setWordEntered] = useState('');
    const [inputErrorState, setInputErrorState] = useState(false);
    const [radioErrorState, setRadioErrorState] = useState('noChecked');
    const [resultDataTime, setResultDataTime] = useState(null);
    const [resultData, setResultData] = useState(null);
    const [resultCityInfo, setResultCityInfo] = useState(null);

    const handleFilter = (event) => {
        if (radioErrorState !== 'checked') {
            setRadioErrorState('noChecked');
        }
        setInputErrorState(false);
        const searchWord = noSpaceOnStartFilter(event.target.value);
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        newFilter.sort((a, b) => {
            return a.length - b.length;
        });
        if (searchWord === '') {
            setSearchStateFlag(false);
            setFilteredData([]);
        } else {
            setSearchStateFlag(true);
            const match = newFilter.filter((value) => {
                return value.toLowerCase().replaceAll(' ', '') === searchWord.toLowerCase().replaceAll(' ', '');
            });
            if (match.length !== 0) {
                setFilteredData([]);
            } else {
                setFilteredData(newFilter);
            }
        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
        setSearchStateFlag(false);
    };

    const handleDataResultChoice = (event) => {
        event.preventDefault();
        setWordEntered(event.target.textContent);
        setFilteredData([]);
    };

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const searchWord = event.target.value;
            const filter = data.filter((value) => {
                return value.toLowerCase().replaceAll(' ', '') === searchWord.toLowerCase().replaceAll(' ', '');
            });
            if (filter.length !== 0) {
                if (radioErrorState === 'noChecked') {
                    setRadioErrorState('yes');
                    return;
                }
                setWordEntered('');
                axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${filter[0]}&limit=1&appid=${APIkey}`)
                    .then(response => {
                        setResultCityInfo({city: response.data[0].name, country: response.data[0].country});
                        if (resultDataTime === 'Now'){
                            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&exclude=minutely,hourly,daily&units=metric&appid=${APIkey}`)
                                .then(response => setResultData(response.data)).catch(error => alert(error));
                        }else if(resultDataTime === 'For 2 days'){
                            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&exclude=minutely,hourly,current&units=metric&appid=${APIkey}`)
                                .then(response => {
                                    response.data.hourly = 'Yes';
                                    setResultData(response.data);
                                }).catch(error => alert(error));
                        }else {
                            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&exclude=minutely,hourly,current&units=metric&appid=${APIkey}`)
                                .then(response => setResultData(response.data)).catch(error => alert(error));
                        }}
                    ).catch(error => alert(error));
            } else {
                setInputErrorState(true);
                setWordEntered('');
                if (radioErrorState === 'noChecked') {
                    setRadioErrorState('yes');
                }
            }
        }
    };
    const handleRadio = (event) => {
        setRadioErrorState('checked');
        setResultDataTime(event.target.value);
    };

    let searchBlock =(
        <>
            <Animation />
            <div className='search'>
                <FormControl id='radioSet' component='fieldset'>
                    <RadioGroup row aria-label='weather' name='row-radio-buttons-group'>
                        <FormControlLabel id={radioErrorState === 'yes' ? 'nowRadioButtonError' : 'nowRadioButton'} value='Now' control={<Radio sx={radioProp} onChange={handleRadio} />} label='Now' />
                        <FormControlLabel id={radioErrorState === 'yes' ? 'twoDaysRadioButtonError' : 'twoDaysRadioButton'} value='For 2 days' control={<Radio sx={radioProp} onChange={handleRadio} />} label='For 2 days' />
                        <FormControlLabel id={radioErrorState === 'yes' ? 'weekRadioButtonError' : 'weekRadioButton'} value='This week' control={<Radio sx={radioProp} onChange={handleRadio} />} label='This week' />
                    </RadioGroup>
                </FormControl>
                <div className='searchInputSet'>
                    <input className={inputErrorState ? 'searchInputError' : 'searchInput'} type='text' placeholder='City...' value={wordEntered} onChange={handleFilter} onKeyUp={handleSubmit} />
                    <div className='searchIcon'>{searchStateFlag ? <CloseIcon id='clearBtn' onClick={clearInput} /> : <SearchIcon id='searchBtn' />}</div>
                </div>
                {filteredData.length !== 0 && (
                    <div className='dataResult'>
                        {filteredData.slice(0, 5).map((value, key) => {
                            return (
                                <a className='dataItem' href={value} key={key} onClick={handleDataResultChoice} target='_blank' rel='noreferrer'>
                                    {value}
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </>);

    return resultData ? <Result resultData={resultData} resultCityInfo={resultCityInfo}/> : searchBlock;
}

export default Search;
