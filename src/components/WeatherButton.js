import React from 'react'

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <div className='WeatherButton'>
      <button 
        onClick={() => handleCityChange('current')} 
        className={`nowplace ${selectedCity === 'current' ? 'active' : ''}`}
      >
        현재 위치
      </button>

      <div className="btn-wrap">
        {cities.map((city) => (
          <button 
            key={city} 
            onClick={() => handleCityChange(city)} 
            className={selectedCity === city ? 'active' : ''}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherButton;
