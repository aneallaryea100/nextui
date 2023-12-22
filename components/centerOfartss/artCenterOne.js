import React from 'react'
import styles from '@styles/artcenterOne.module.css'

function ArtCenterOne( {artcenterone} ) {
  return (
    <div className='grid grid-cols-2 lg:flex flex-wrap justify-evenly items-center gap-2 px-4'>
      {
        artcenterone.map((data) => (
            <div className='w-4/5 lg:w-[15%] bg-gray-100 pt-4' key={data.id}>
                <div className='w-full h-[15rem]'>
                    <img src={data.image} alt={data.name} className='w-full h-full object-contain'/>
                </div>
                <div className='min-w-min flex justify-center py-1'>
                    <span className='font-semibold'>{data.name}</span>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ArtCenterOne
