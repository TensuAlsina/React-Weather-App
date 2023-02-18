import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title:"Addis Ababa"
        },
        {
            id:2,
            title:"Wuhan"
        },
        {
            id:3,
            title:"Nairobi"
        },
        {
            id:4,
            title:"Toronto"
        },
        {
            id:5,
            title:"Berlin"
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
            <button onClick={()=>setQuery({q:city.title})} key={city.id} className='text-white text-lg font-medium hover:scale-150 transition-all duration-300 hover:text-orange-300'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons