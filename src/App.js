import React from 'react'
import {useState,useEffect} from 'react'
import Timeandlocation from './components/Timeandlocation'
import Inputs from './components/Inputs'
import Tempanddetails from "./components/Tempanddetails"
import axios from "axios"
// import getformattedweatherdata from './services/weatherservice'
// import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query,setQuery]=useState({})
  const [weath,setWeath]=useState(null)

  useEffect(()=>{
    let url='';
    if(query){
      if(typeof query==='string'){
       url= `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=df109792ba4fdf650378a20eaac5d6cb`
      }
      else if (query.lat && query.lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=df109792ba4fdf650378a20eaac5d6cb`;
      }
    }
      if(url){
      axios.get(url)
      .then((res)=>{setWeath(res.data)})
      .catch((error)=>{
          console.log('city not found',error)
      })
    } else{setWeath(null)}
  }
  ,[query])

  const formatBackground=()=>{
    if(!weath) return 'from-cyan-700 to-blue-700'
    const threshold=20
    if((weath.main.temp-273.15)<=threshold) return 'from-cyan-700 to-blue-700'
    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-2 py-2 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 min-h-screen ${formatBackground()}`}>
      <Inputs setQuery={setQuery} />
      {weath && (
        <div>
          <Timeandlocation weath={weath} />
          <Tempanddetails  weath={weath}/>
        </div>
      )}
      {/* <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
       */}
    </div>
    
  );
}

export default App;
