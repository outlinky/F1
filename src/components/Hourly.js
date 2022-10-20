import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Hourly.css';
import '@styles/weather-icons.css';
import '@styles/weather-icons-wind.css';
import CloseIcon from '@mui/icons-material/Close';

Hourly.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    timeDateHandler: PropTypes.func,
    weatherIconHandler: PropTypes.func,
    reloadPage: PropTypes.func
};

function Hourly({ resultData, resultCityInfo, timeDateHandler, weatherIconHandler, reloadPage}) {
    return (
        <div className='total-wrap-flex'>
            <div className='total-wrap-flex-item'>
                <div className='hourly-close'><CloseIcon id='closeBtnHourly' onClick={reloadPage}/></div>
                <div className='hourly-weather-wrap'>
                    <div className='hourly-grid-item city-country-name'>{resultCityInfo.city}, {resultCityInfo.country}</div>
                    <div className='hourly-weather-wrap-day-one'>
                        <div className='hourly-grid-item day-grid'>{timeDateHandler(resultData.daily[0].dt, resultData.timezone, 'Hourly').date}</div>
                        <div className='hourly-grid-item hourly-meteo-info'>
                            <div className='time-of-day-section sunrise'><i className='wi wi-sunrise hourly'/> {timeDateHandler(resultData.daily[0].sunrise, resultData.timezone, 'Hourly').time}</div>
                            {weatherIconHandler(resultData.daily[0].weather[0].id, resultData.daily[0].weather[0].icon, 'hourly')}
                            <div className='time-of-day-section sunset'>{timeDateHandler(resultData.daily[0].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset hourly'/></div>
                            <div className='time-of-day-section wind-time-of-day'><i className='wi wi-strong-wind hourly'/> {resultData.daily[0].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[0].wind_deg + '-deg current'}/></div>
                            <div className='time-of-day-section pressure-time-of-day'><i className='wi wi-barometer hourly'/> {resultData.daily[0].pressure} hPa</div>
                            <div className='time-of-day-section humidity-time-of-day'>{resultData.daily[0].humidity} <i className='wi wi-humidity hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Night</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[0].temp.night)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[0].feels_like.night)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Morning</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[0].temp.morn)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[0].feels_like.morn)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Day</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[0].temp.day)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[0].feels_like.day)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Evening</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[0].temp.eve)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[0].feels_like.eve)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                    </div>
                    <div className='hourly-weather-wrap-day-two'>
                        <div className='hourly-grid-item day-grid'>{timeDateHandler(resultData.daily[1].dt, resultData.timezone, 'Hourly').date}</div>
                        <div className='hourly-grid-item hourly-meteo-info'>
                            <div className='time-of-day-section sunrise'><i className='wi wi-sunrise hourly'/> {timeDateHandler(resultData.daily[1].sunrise, resultData.timezone, 'Hourly').time}</div>
                            {weatherIconHandler(resultData.daily[1].weather[0].id, resultData.daily[1].weather[0].icon, 'hourly')}
                            <div className='time-of-day-section sunset'>{timeDateHandler(resultData.daily[1].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset hourly'/></div>
                            <div className='time-of-day-section wind-time-of-day'><i className='wi wi-strong-wind hourly'/> {resultData.daily[1].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[1].wind_deg + '-deg current'}/></div>
                            <div className='time-of-day-section pressure-time-of-day'><i className='wi wi-barometer hourly'/> {resultData.daily[1].pressure} hPa</div>
                            <div className='time-of-day-section humidity-time-of-day'>{resultData.daily[1].humidity} <i className='wi wi-humidity hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Night</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[1].temp.night)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[1].feels_like.night)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Morning</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[1].temp.morn)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[1].feels_like.morn)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Day</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[1].temp.day)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[1].feels_like.day)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                        <div className='hourly-grid-item'>
                            <div className='time-of-day-section time-of-day'>Evening</div>
                            <div className='time-of-day-section temperature-time-of-day'>{Math.round(resultData.daily[1].temp.eve)}<i className='wi wi-degrees hourly'/></div>
                            <div className='time-of-day-section feels-like-time-of-day'>Feels like {Math.round(resultData.daily[1].feels_like.eve)}<i className='wi wi-degrees hourly'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hourly;