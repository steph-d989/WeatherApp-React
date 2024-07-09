import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import WeatherList from './WeatherList';
import axios from 'axios'
const Main = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Madrid");
  const [value, setValue] = useState({ keyword: '' });
  const key = 'e7d6af76a9b7c6c1c9a3f03fe3b8b376';
  const handleChange = (e) => {
    setValue({
      keyword: e.target.value
    });
  };
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.keyword.value;
    form.current.reset();
    setCity(newCity);
  };
  useEffect(() => {
    async function getWeather() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=${key}&units=metric`);
        const resp = res.data;
        setWeather(resp.list);
      } catch (e) {
        console.log("no funciona la llamada a la api"); // No pintes nada
      }
    }
    getWeather();
  }, [city]);
  return (
    <section>
      <form ref={form} onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="keyword">Ciudad: </label>
          <input type="text" name="keyword" onChange={handleChange} />
        </div>
        {value.keyword ?
          <button type="submit">Buscar Clima</button> :
          <i>Rellena todos los campos</i>
        }
      </form>
      <WeatherList props={weather} place={city}/>
    </section>
  )
}
export default Main;