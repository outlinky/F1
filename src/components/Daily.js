import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Daily.css';
import CloseIcon from '@mui/icons-material/Close';

Daily.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    timeDateHandler: PropTypes.func,
    weatherIconHandler: PropTypes.func,
    reloadPage: PropTypes.func
};

function Daily({resultData, resultCityInfo, timeDateHandler, weatherIconHandler, reloadPage}) {
    return (
        <div className='total-wrap-flex'>
            <div className='total-wrap-flex-item'>
                <div className='daily-close'><CloseIcon id='closeBtnDaily' onClick={reloadPage}/></div>
                <div className='daily-wrap'>
                    <div className='daily-grid-item city-country-name'>{resultCityInfo.city}, {resultCityInfo.country}</div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[0].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[0].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[0].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[0].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[0].weather[0].id, resultData.daily[0].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[0].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[0].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[0].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[0].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[0].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[0].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[0].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[0].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[1].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[1].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[1].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[1].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[1].weather[0].id, resultData.daily[1].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[1].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[1].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[1].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[1].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[1].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[1].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[1].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[1].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[2].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[2].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[2].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[2].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[2].weather[0].id, resultData.daily[2].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[2].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[2].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[2].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[2].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[2].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[2].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[2].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[2].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[3].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[3].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[3].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[3].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[3].weather[0].id, resultData.daily[3].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[3].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[3].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[3].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[3].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[3].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[3].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[3].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[3].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[4].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[4].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[4].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[4].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[4].weather[0].id, resultData.daily[4].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[4].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[4].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[4].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[4].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[4].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[4].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[4].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[4].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[5].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[5].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[5].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[5].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[5].weather[0].id, resultData.daily[5].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[5].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[5].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[5].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[5].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[5].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[5].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[5].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[5].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                    <div className='daily-grid-item'>
                        <div className='daily-section day'>
                            <div className='week-day-name'>{timeDateHandler(resultData.daily[6].dt, resultData.timezone, 'Daily').date[0]}</div>
                            <div className='day-of-month'>{timeDateHandler(resultData.daily[6].dt, resultData.timezone, 'Daily').date.slice(1).join(' ')}</div>
                            <span className='sunrise-time-of-day'><i className='wi wi-sunrise daily'/> {timeDateHandler(resultData.daily[6].sunrise, resultData.timezone, 'Hourly').time}</span>
                            <span className='sunset-time-of-day'>{timeDateHandler(resultData.daily[6].sunset, resultData.timezone, 'Hourly').time} <i className='wi wi-sunset daily'/></span>
                        </div>
                        <div className='daily-section picture-daily'>{weatherIconHandler(resultData.daily[6].weather[0].id, resultData.daily[6].weather[0].icon, 'daily')}</div>
                        <div className='daily-section temperature-daily'>{Math.round(resultData.daily[6].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[6].temp.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section feels-like-daily'>Feels like {Math.round(resultData.daily[6].temp.day)}<i className='wi wi-degrees daily'/> / {Math.round(resultData.daily[6].feels_like.night)}<i className='wi wi-degrees daily'/></div>
                        <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> {resultData.daily[6].wind_speed} m/s <i className={'wi wi-wind towards-' + resultData.daily[6].wind_deg + '-deg current'}/></div>
                        <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> {resultData.daily[6].pressure} hPa</div>
                        <div className='daily-section daily-section-after-temperature humidity-time-of-day'>{resultData.daily[6].humidity} <i className='wi wi-humidity daily'/></div>
                    </div>
                </div>
            </div>
        Z</div>
    );
}

export default Daily;