import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherCard({
  dataItem: { dt_txt, main, weather }}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        /* title={dt_txt} */
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          Hora: {dt_txt.slice(10,)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Temperatura: {main.temp}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripcion: {weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
}