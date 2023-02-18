import { useState,useEffect } from 'react';
import './App.css';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';

 
 
 

function App() {
  const [query, setQuery] = useState({q:"berlin"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)


  

  useEffect(() => {
    
    const fetchWeather = async()=>{
      const data = await getFormattedWeatherData({...query,units}).then(data=>{setWeather(data)})
      console.log(data)
    }

    fetchWeather()
  
     
  }, [query,units])
  



 
  return (
    <div className=" h-full mx-auto max-w-screen py-5 px-32 bg-indigo-500">
     <TopButtons setQuery={setQuery}/>
     <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
         <> 
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          <Forcast title="hourly forecast" items={weather.hourly}/>
          <Forcast title="daily forecast" items={weather.daily}/>
         </>
      )}
     
    </div>
  );
}

export default App;
