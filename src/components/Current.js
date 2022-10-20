import React from 'react';
import '@styles/Current.css';
import '@styles/weather-icons.css';
import '@styles/weather-icons-wind.css';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

Current.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    timeDateHandler: PropTypes.func,
    weatherIconHandler: PropTypes.func,
    reloadPage: PropTypes.func
};

function Current({resultData, resultCityInfo, timeDateHandler, weatherIconHandler, reloadPage}) {
    return (
        <div className='total-wrap-flex'>
            <div className='total-wrap-flex-item'>
                <div className='current-close'><CloseIcon id='closeBtnCurrent' onClick={reloadPage}/></div>
                <div className='current-weather-wrap'>
                    <div className='grid-item main'>
                        <div className='city-info'>{resultCityInfo.city}, {resultCityInfo.country}</div>
                        <div className='time'>{timeDateHandler(resultData.current.dt, resultData.timezone, 'Current').time}</div>
                        {weatherIconHandler(resultData.current.weather[0].id, resultData.current.weather[0].icon, 'current')}
                        <div className='temperature'>{Math.round(resultData.current.temp)}<i className='wi wi-degrees current'/></div>
                        <div className='temperature-feeling'>Feels like {Math.round(resultData.current.feels_like)}<i className='wi wi-degrees current'/></div>
                    </div>
                    <div className='grid-item right-side sunrise'><i className='wi wi-sunrise current'/> {timeDateHandler(resultData.current.sunrise, resultData.timezone, 'Current').time}</div>
                    <div className='grid-item right-side sunset'><i className='wi wi-sunset current'/> {timeDateHandler(resultData.current.sunset, resultData.timezone, 'Current').time}</div>
                    <div className='grid-item right-side humidity'>{resultData.current.humidity} <i className='wi wi-humidity current'/></div>
                    <div className='grid-item right-side wind'><i className='wi wi-strong-wind current'/> {resultData.current.wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.current.wind_deg + '-deg current'}/></div>
                    <div className='grid-item right-side pressure'><i className='wi wi-barometer current'/> {resultData.current.pressure} hPa</div>
                </div>
            </div>
        </div>
    );
}

export default Current;