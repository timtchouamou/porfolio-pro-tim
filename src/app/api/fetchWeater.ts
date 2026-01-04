const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/* ---------- Types ---------- */

export interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export interface FetchWeatherParams {
  city?: string;
  lat?: number;
  lon?: number;
}

/* ---------- Function ---------- */

async function fetchWeather(params: FetchWeatherParams): Promise<WeatherData> {
  const { city, lat, lon } = params;
  let url: string;

  if (lat != null && lon != null) {
    url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  } else if (city) {
    url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  } else {
    throw new Error("No location provided");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  // Type assertion ensures returned JSON matches WeatherData
  return (await response.json()) as WeatherData;
}

export default fetchWeather;
