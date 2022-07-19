import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useRootStore } from "../../RootStateContext";

const CurrentWeather: FC = () => {
  const { weather } = useRootStore();

  return (
    <>
      {Object.keys(weather.currentWeather).length === 0 ? (
        <div>Enter your city</div>
      ) : (
        <div key={weather.currentWeather.id} className="weather">
          <div className="menu">
            <div>
              <p className="text-left font-semibold text-[18px] leading-none">
                {weather.city}
              </p>
              <p className="text-left leading-none">
                {weather.currentWeather.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="w-[100px]"
              src={`icons/${weather.currentWeather.weather[0].icon}.png`}
            />
          </div>
          <div className="menu">
            <p className="temperature">
              {Math.round(weather.currentWeather.main.temp)}°C
            </p>
            <div className="w-full pl-5">
              <div className="parameter-row">
                <span className="parameter-label">Details</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">
                  {Math.round(weather.currentWeather.main.feels_like)}°C
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">
                  {weather.currentWeather.wind.speed} m/s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-left text-xs">Humidity</span>
                <span className="text-right font-semibold text-xs">
                  {weather.currentWeather.main.humidity}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-left text-xs">Pressure</span>
                <span className="text-right font-semibold text-xs">
                  {weather.currentWeather.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(CurrentWeather);
