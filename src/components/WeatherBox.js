import React from 'react';

const WeatherBox = ({ weather, country, onShowMore }) => {
  const cityName = weather?.name ?? '도시정보 못가져옴';
  const temp = weather?.main?.temp != null ? Math.round(weather.main.temp) : '정보없음';
  const wind = weather?.wind?.speed ?? '정보없음';
  const isRaining = weather?.rain?.['1h'] > 0 || weather?.rain?.['3h'] > 0;
  const rainStatus = isRaining
    ? { text: '비 오는 중', icon: '🌧️' }
    : { text: '비 안 옴', icon: '☀️' };
  const humidity = weather?.main?.humidity;
  const feelsLike =
    weather?.main?.feels_like != null
      ? Math.round(weather.main.feels_like)
      : '정보없음';

  const getHumidityFeeling = (h) => {
    if (h < 30) return { text: '매우 건조', icon: '🤨' };
    if (h < 60) return { text: '딱 좋음', icon: '🙂' };
    if (h < 80) return { text: '끈적임', icon: '🥴' };
    return { text: '불쾌지수 최고', icon: '😖' };
  };

  const humidityInfo =
    humidity != null ? getHumidityFeeling(humidity) : { text: '정보없음', icon: '❔' };

  // 아이콘
  const iconMap = {
    "01d": "/icons/01d.png", 
    "01n": "/icons/01n.png", 
    "02d": "/icons/02d.png", 
    "02n": "/icons/02n.png",
    "03d": "/icons/03d.png", 
    "03n": "/icons/03n.png",
    "04d": "/icons/04d.png", 
    "04n": "/icons/04n.png",
    "09d": "/icons/09d.png", 
    "09n": "/icons/09n.png",
    "10d": "/icons/10d.png", 
    "10n": "/icons/10n.png",
    "11d": "/icons/11d.png", 
    "11n": "/icons/11n.png",
    "13d": "/icons/13d.png", 
    "13n": "/icons/13n.png",
    "50d": "/icons/50d.png", 
    "50n": "/icons/50n.png",
  };

  // 아이콘 URL 결정
  const iconCode = weather?.weather?.[0]?.icon;
  const iconUrl = iconCode ? iconMap[iconCode] : null;

  return (
    <div className='WeatherBox'>
      <h3>{cityName}</h3>
      <h2>{temp}℃</h2>
      {iconUrl && <img src={iconUrl} alt="weather icon" />}
      <ul>
        <li>습도 : {humidity}%</li>
        <li>체감 습도 : {humidityInfo.icon} ({humidityInfo.text})</li>
        <li>체감 온도 : {feelsLike}℃</li>
        <li>날씨 상태 : {weather?.weather?.[0]?.description ?? '정보없음'}</li>
        <li>바람 속도 : {wind} m/s</li>
        <li>강수 : {rainStatus.icon} ({rainStatus.text})</li>
      </ul>
      <button className='more-btn' onClick={onShowMore}>더 자세히 보기</button>
    </div>
  );
};

export default WeatherBox;
