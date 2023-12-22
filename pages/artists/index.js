import React from 'react'
import Carouselz2 from '@components/carouselReact/Carouselz2'
import ArtistData from '@localDatabase/Data/artistData'
import Conceptual from '@components/categoryArt/conceptual'
import Minimalist from '@components/categoryArt/minimalist'
import PopArt from '@components/categoryArt/popArt'
import Abstract from '@components/categoryArt/abstract'

function Artist({artist}) {
  return (
    <div className='max-w-[calc(100%-4rem)] mx-auto max-w-[7rem] mt-5'>
      <div className='mx-0'>
        <div className='flex justify-between items-center'>
          <div className='grid grid-cols-1'>
            <span className='block font-semibold text-4xl'>Feartured Artist</span>
            <span className='font-semibold'>Browse over {artist.length - 10} artists</span>
          </div>
          <div>
            <span>Alphabets</span>
          </div>
        </div>
        
        <div className='carouselz2Container hidden md:grid grid-flow-col auto-cols-[55%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-8'>
          {artist.slice(5, 9).map((artdata, index) => (
            <div className='box w-full h-[30rem] bg-red-600' key={index}>
            <div className='w-full h-[25rem] bg-red-300'>
              <img src={artdata.profileImage}
              alt={artdata.name}
              className='w-full h-full object-cover'
              />
            </div>
            <div className='bg-white w-full h-[5rem] flex px-1 py-2'>
              <div className='block w-full'>
                <span className='block text-2xl font-semibold'>{artdata.name.firstName} {artdata.name.lastName}</span>
                <span className='block text-xl text-gray-600'>{`${artdata.birthPlace.demonym} b.${artdata.year}`}</span>
              </div>
              <div className='text-center flex cursor-pointer'>
                <span className='w-36 h-[50px] border-1 rounded-full bg-white text-black flex items-center justify-center'>Follow</span>
              </div>
            </div>
            </div>
          ))
          }
        </div>
      </div>
      <Abstract artist={artist}/>
      <Conceptual artist={artist}/>
      <Minimalist artist={artist}/>
      <PopArt artist={artist}/>
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

