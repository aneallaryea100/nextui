import React from 'react'

function PopArt({artist}) {
  return (
    <div className='mt-1'>
        <div className='w-full flex justify-between items-center mb-3'>
          <span className='block  text-4xl '>Pop Art</span>
          <span className='block cursor-pointer hover:underline'>View</span>
        </div>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
           {artist.slice(22, 26).map((artdata, index) => (
            <div key={index} className='w-full h-[30rem]' >
              <div className='w-full h-[20rem]'>
                <img src={artdata.profileImage} className='w-full h-full object-cover'/>
              </div>
            <div className='bg-white w-full h-[5rem] flex items-center justify-between px-1 py-2 bg-red-300'>
              <div className='block w-full'>
                <span className='block text-2xl font-semibold'>{artdata.name.firstName} {artdata.name.lastName}</span>
                <span className='block text-xl text-gray-600'>{`${artdata.birthPlace.demonym} b.${artdata.year}`}</span>
              </div>
              <div className='text-center flex cursor-pointer'>
                <span className='w-[6rem] h-[2rem] border-1 rounded-full bg-white text-black flex items-center justify-center'>Follow</span>
              </div>
            </div>
          </div>
          )) 
          
        }
        </div>
       
    </div>
  )
}

export default PopArt
