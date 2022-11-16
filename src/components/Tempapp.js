import React, { useEffect, useState } from 'react';
import "./css/style.css";
const TempApp= ()=>{
    const [city,setCity]=useState("");
    const [search,setSearch]=useState("");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2e6f82db8d730d0ea0e5cbb01183246a`;
            const response=await fetch(url);
            const resJson=await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    },[search])
    
return (
    <>
        <div className='box'>
        <div className='inputData'>
            <input type="search"
                   className="inputField"
                   value={search}
                   onChange={(event)=>{
                   setSearch(event.target.value)
                   }}
            ></input>
        </div>
        {!city?(
            <p className='errorMsg'>No Data Found</p>
        ):(
            <div>
            <div className='info'>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>{city.temp}°C</h1>
        <h3 className='tempmin_max'>Min: {city.temp_min}°C| Max: {city.temp_max}°C</h3>
        </div>
        <div className='wave-one'></div>
        <div className='wave-two'></div>
        <div className='wave-three'></div>
            </div>
        )}
        

        </div>
    </>
)
}
export default TempApp;