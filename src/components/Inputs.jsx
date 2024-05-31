import React from 'react'
import {useState} from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'

const Inputs=({setQuery})=>{
    const [city,setCity]=useState("");
    const handleSearchClick=()=>{
        if (city!=='')
            {setQuery(city)}
        else{setQuery('')}
        }
    const handleLocationClick=()=>{
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{   
                const {latitude,longitude}=position.coords
                setQuery({lat:latitude,lon:longitude})
                }
                ,
                (error)=>{
                    console.log(error)
                })
            }
        }
    return(
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row items-center space-x-4 justify-center">
                <input value={city} onChange={(e)=>setCity(e.currentTarget.value)} type="text" 
                placeholder="search for city..."
                className="text-xl font-light p-2 mt-2 sm:w-96 shadow-xl capitalize placeholder:lowercase"/>
                <UilSearch       size={44} className="text-white cursor-pointer transition ease-out hover:scale-110" onClick={handleSearchClick} />
                <UilLocationPoint size={44} className="text-white cursor-pointer transition ease-out hover:scale-110" onClick={handleLocationClick}/>
            </div>
        </div>
    )
}
export default Inputs
