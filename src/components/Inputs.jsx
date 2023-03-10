 
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react'


function Inputs({setQuery,units,setUnits}) {
  const [city, setCity] = useState('')
  const handleSearchClick = ()=>{
    if(city !== "")setQuery({q:city})
  }

  const handleLocationClick = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon
        })
      })
    }
  }



  return (
    <div className='flex justify-center my-6'>
        <div className='flex w-3/4 items-center justify-center space-x-4'>
            <input value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Search for city...' type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize' />
            <UilSearch onClick={handleSearchClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilLocationPoint onClick={handleLocationClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex w-1/4 items-center justify-center'>

            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>

        </div>
    </div>
  )
}

export default Inputs