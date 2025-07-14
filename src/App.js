import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

let cities = [
  "United States of America, US", 
  "Russian Federation, RU", 
  "People’s Republic of China, CN", 
  "Commonwealth of Australia, AU"
];

// 도시별 배경 이미지 URL (예시)
const cityBackgrounds = {
  "United States of America, US": "https://images.unsplash.com/photo-1717418938897-8bb6a239ea85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Russian Federation, RU": "https://plus.unsplash.com/premium_photo-1697729939290-40a6275148cd?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "People’s Republic of China, CN": "https://plus.unsplash.com/premium_photo-1694475588869-7bc300c9eb3b?q=80&w=1610&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Commonwealth of Australia, AU": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "current": "https://cdn.pixabay.com/photo/2015/12/16/03/45/korea-1095361_1280.jpg"
}

function App() {
  let [weather, setWeather] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [city, setCity] = useState("current");
  let apiKey = '74a22d3e781685424b81bab601491577';
  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, [])

  let getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setCity(city);
  }

  let handleCityChange = (city) => {
    if(city === 'current'){
      getCurrentLocation();
    }else{
      getWeatherByCity(city);
    }
  }

  let getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      setCity('current');
    })
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  // 현재 선택된 도시에 맞는 배경 이미지 가져오기
  const backgroundImage = cityBackgrounds[city] || cityBackgrounds["current"];

  return (
    <div 
    className="backgroud"
    style={{
      backgroundImage: `url(${backgroundImage})`
    }}
    >
      <div className='weatherWrap'>
        <div className="weatherInner">
          <WeatherBox weather={weather} country={city} onShowMore={() => setShowModal(true)} ></WeatherBox>
          <div className="weather-left">
            <h1>여행 가기 전 날씨를 알아보세요😄</h1>
            <WeatherButton 
              cities={cities} 
              handleCityChange={handleCityChange} 
              selectedCity={city}
            />
          </div>
        </div>
      </div>
      {/* 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className='modal-texts'>
              <h3>📍 추가 정보</h3>
              <p>기압 : {weather?.main?.pressure} hPa</p>
              <p>구름량 : {weather?.clouds?.all}%</p>
              <p>
                일출 : {weather?.sys?.sunrise 
                  ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString() 
                  : '정보없음'}
              </p>
              <p>
                일몰 : {weather?.sys?.sunrise 
                  ? new Date(weather.sys.sunset * 1000).toLocaleTimeString() 
                  : '정보없음'}
              </p>
              <p>좌표 : {weather?.coord?.lat}, {weather?.coord?.lon}</p>
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
