import { useEffect, useState } from "react";
import "../gallery/Weater.css";
import fetchWeather from "../api/fetchWeater";

/* ---------- Types ---------- */

interface WeatherData {
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

interface FetchWeatherParams {
  city?: string;
  lat?: number;
  lon?: number;
}

/* ---------- Component ---------- */

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchByCoords = async (lat: number, lon: number): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather({ lat, lon } as FetchWeatherParams);
      setWeather(data);
      setCity(data.name);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (): Promise<void> => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather({ city } as FetchWeatherParams);
      setWeather(data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to fetch weather data");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // 🌍 Auto-detect location on first load
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchByCoords(latitude, longitude);
      },
      () => {
        // fallback if user denies permission
        setCity("Washington");
      }
    );
  }, []);

  return (
    <div className="weather-container">
      <h2 className="weather-title">Instant Weather App</h2>

      <div className="weather-search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="weather-input"
        />
        <button onClick={handleSearch} className="weather-button">
          Search
        </button>
      </div>

      {loading && (
        <div className="weather-loading">
          <span className="spinner"></span>
          <span style={{ marginLeft: "0.5rem" }}>Loading...</span>
        </div>
      )}

      {error && <p className="weather-error">Error: {error}</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h3 className="weather-city">
            {weather.name}, {weather.sys.country}
          </h3>

          <div className="temp-circle">
            <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
          </div>

          <p className="weather-desc">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
