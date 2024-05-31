import React from 'react'
import {DateTime} from "luxon";

const formatToLocalTime=(
    secs,zone,format="cccc, dd LLL yyyy' | Local time: 'hh:mm a")=>
        DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const Timeandlocation=({weath:{dt,timezone}})=>{
    return( 
        <div className="hidden sm:flex sm:flex-row  sm:justify-center mb-3">
           <p className="text-white text-xl font-light flex sm:flex-col">
            {formatToLocalTime(dt,timezone)}
           </p>
        </div>
    )
}
export {formatToLocalTime}
export default Timeandlocation
