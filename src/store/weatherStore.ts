import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { makeLocalStorage } from "../helpers/autoSave";
import { ICurrentWeather, IWeather } from "../types/types";

export class Weather {
  weather: IWeather[] = [];
  currentWeather: ICurrentWeather = {} as ICurrentWeather;
  city: string = "";

  constructor() {
    makeAutoObservable(this);
    makeLocalStorage(this, "weatherStore", [
      "weather",
      "currentWeather",
      "city",
    ]);
  }

  async coordinatesFunc(city: string | null) {
    const coordinatesApi = "http://api.openweathermap.org/geo/1.0/direct";
    const forecastApi = "http://api.openweathermap.org/data/2.5/forecast";
    const currentWeatherApi = "http://api.openweathermap.org/data/2.5/weather";
    try {
      const coordinates = await axios.get(coordinatesApi, {
        params: {
          q: city,
          limit: 1,
          appid: "3e889d69c5d056ea6b1230f4db90404d",
        },
      });

      const coordinatesData = await coordinates.data;
      const arr: any = [];

      coordinatesData.map((item: any) =>
        arr.push(item.lat.toFixed(0), item.lon.toFixed(0))
      );

      const [lat, lon] = arr;
      const weatherForecast = await axios
        .get(forecastApi, {
          params: {
            lat: lat,
            lon: lon,
            appid: "3e889d69c5d056ea6b1230f4db90404d",
            units: "metric",
          },
        })
        .then(response => response.data);
      const weatherForecastList = weatherForecast.list;

      const currentWeather = await axios.get(currentWeatherApi, {
        params: {
          lat: lat,
          lon: lon,
          appid: "3e889d69c5d056ea6b1230f4db90404d",
          units: "metric",
        },
      });
      const currentWeatherData = currentWeather.data;

      runInAction(() => {
        this.weather = weatherForecastList;
        this.currentWeather = currentWeatherData;
        coordinatesData.map((city: any) => (this.city = city.name));
      });
    } catch (e) {
      console.error(e);
    }
  }

  get spliced() {
    return [...this.weather].splice(0, 7);
  }
}
