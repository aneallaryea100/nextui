import React from 'react'
import Carouselz2 from '@components/carouselReact/Carouselz2'
import ArtistData from '@localDatabase/Data/artistData'

function Artist({artist}) {
  return (
    <div className='container mt-5'>
      <div className='max-w-[calc(100%-4rem)] mx-auto max-w-[7rem]'>
        <span className='block font-semibold text-4xl'>Feartured Artist</span>
        <div className='carouselz2Container hidden md:grid grid-flow-col auto-cols-[55%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-8'>
          <div className='box w-full h-[30rem] bg-red-600'>
            <div className='w-full h-[25rem] bg-red-300'>
              <img src='https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt='ttt'
              className='w-full h-full object-cover'
              />
            </div>
            <div className='bg-white w-full h-[5rem] flex px-1 py-2'>
              <div className='block w-full'>
                <span className='block text-2xl font-semibold'>Matt Hummels</span>
                <span className='block text-xl text-gray-600'>German, b.1989</span>
              </div>
              <div className='text-center flex cursor-pointer'>
                <span className='w-36 h-[50px] border-1 rounded-full bg-white text-black flex items-center justify-center'>Follow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* test */}
      <div>
        {artist.slice(0, 10).map((artdata, index) => (
          <ul key={index}>
            <li className='font-semibold'>{artdata.name.firstName} {artdata.name.lastName}</li>
            <li>{artdata.birthPlace.name}, {artdata.birthPlace.demonym}</li>
        </ul>
        )) 
        }
      </div>
    </div>
  )
}

export default Artist

export async function getStaticProps() {
  return {
    props: {
      artist: ArtistData
    }
  }
}

