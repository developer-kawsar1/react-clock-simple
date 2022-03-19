import React, { useEffect, useState } from 'react'
// import Country from '../Country/Country'

export default function Countries() { 
   const [countries,setCountries]=useState(0)
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
   },[])
  return (
    <div> 
        <h2>Hello countries</h2> 
        <div className="country-container">
            {
                countries.map(console.log(77))
            }
        </div>
        
     </div>
  )
}
