import React from "react";
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from 'uuid';
const WeatherList = ({props, place}) => {
  const renderItems = () =>
    props.map((item, i) => (
      <WeatherCard
        key={uuidv4()}
        dataItem={item}
      />
    ));
    const title = `El tiempo en ${place}`
    return <div>
    <h1>El tiempo en {place}</h1>
    <ul>
      {renderItems()}
    </ul>
    </div>
};
export default WeatherList;