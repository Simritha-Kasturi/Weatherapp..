import React from "react"
import {UilTemperature,UilTear,UilWind,UilSun,UilSunset,} from "@iconscout/react-unicons";
import { formatToLocalTime} from "./Timeandlocation";

const Tempanddetails=({weath})=>{
    const {main,name,sys,weather,wind}=weath;
    const {sunrise,sunset}=sys;
    return(
        <div>
        <div className="flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center text-white">
           <p className="text-xl text-cyan-300">{weather[0].main}</p>   
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="cloud" className="w-16"/>
           <p className="text-8xl pb-5">{(main.temp-273.15).toFixed()}°C</p>
           <h2 className="text-4xl font-semibold">{name}</h2>
           <div className="flex flex-col space-y-2 mt-6">
           <div className="flex items-center justify-center">
            <UilTemperature size={20} className="mr-1"/> <span className=" text-xl">Real feel:</span><span className="font-large  text-xl ml-1">{(main.feels_like-273.15).toFixed(2)}°C</span>
           </div>
           <div className="flex items-center justify-center">
            <UilTear size={20} className="mr-1"/><span className="text-xl">Humidity:</span><span className="font-large text-xl ml-1">{main.humidity.toFixed()}%</span>
           </div>
           <div className="flex items-center justify-center">
            <UilWind size={20} className="mr-1"/><span className=" text-xl">Wind:</span><span className="font-large text-xl ml-1">{wind.speed.toFixed()}km/h</span>
           </div>
           </div>
        </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between space-x-2 mx-16 mt-5 text-white py-3 ">
            <UilSun className="hidden sm:inline-block"/>
            <p className=" md:text-lg">
                <span className="font-medium">Rise:</span><span className="font-medium ml-1">{formatToLocalTime(sunrise,sys.timezone,"hh:mm a")}</span>
            </p>
            <p className="hidden sm:inline-block text-xl">|</p>
            <UilSunset className="hidden sm:inline-block"/>
            <p className="md:text-lg">
            <span className="font-medium">Set:</span><span className="font-medium ml-1">{formatToLocalTime(sunset,sys.timezone,"hh:mm a")}</span>
            </p>
            <p className="hidden sm:inline-block text-xl">|</p>
            <UilSun className="hidden sm:inline-block" />
            <p className=" md:text-lg">
            <span className="font-medium">High:</span><span className="font-medium ml-1">{(main.temp_max-273.15).toFixed(2)}°C</span>
            </p>
            <p className="hidden sm:inline-block text-xl">|</p>
            <UilSun className="hidden sm:inline-block"/>
            <p className=" md:text-lg">
            <span className="font-medium">Low:</span><span className="font-medium ml-1">{(main.temp_min-273.15).toFixed(2)}°C</span>
            </p>
            

        </div>

        </div>
    )
}

export default Tempanddetails