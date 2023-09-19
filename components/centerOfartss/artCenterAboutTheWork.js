import React from 'react'

function ArtCenterAboutTheWork({aboutwork}) {
  return (
    <div className='mt-3 md:w-4/6'>
      <p className='m-b-0'>About the work</p>
      <div className='bg-gray-500  w-full h-0.5'></div>
      <div className='divContainer border-1 border-gray-400 mt-3 p-1 md:flex'>
        <div className='firstdiv flex flex-col gap-2 text-sm md:w-1/4'>
            <p className='m-0 text-slate-950 font-bold'>Materials</p>
            <p className='m-0 text-sm text-slate-300 md:hidden'>{aboutwork.material}</p>
            <p className='decoration-black font-bold'>Size</p>
            <p className='m-0 md:hidden'>{aboutwork.artsize}</p>
            <p className='m-0 text-zinc-950 font-bold'>Rarity</p>
            <p className='m-0 text-underline md:hidden'>Unique</p>
            <p className='m-0 font-bold'>Medium</p>
            <p className='m-0 md:hidden'>Painting</p>
            <p className='m-0 font-bold'>Signature</p> 
            <p className='m-0 md:hidden'>Hand signed by artist</p>
            <p className='m-0 font-bold'>Certificate of Authenticity</p>
            <p className='m-0 md:hidden'>Included (issued by Gallery)</p>
            <p className='m-0 font-bold'>Frame</p>
            <p className='m-0 md:hidden'>Not Included</p>
        </div>
        <div className='seconddiv hidden md:w-1/2 text-sm md:flex flex-col gap-2'>
            <p className='m-0 font-light'>{aboutwork.material}</p>
            <p className='m-0'>{aboutwork.artsize}</p>
            <p className='m-0 text-underline'>Unique</p>
            <p className='m-0'>Painting</p>
            <p className='m-0'>Hand signed by artist</p>
            <p className='m-0'>Included (issued by Gallery)</p>
            <p className='m-0'>Not Included</p>
        </div>
      </div>

      {/* Name and about the artist to be followed */}

      <div className='border-1 border-gray-400 mt-5 p-2'>
        <div className='flex flex-row justify-between items-center'>
            <div className='w-full'>
                <div className='flex items-center p-1'>
                    <div className='w-10 h-10 rounded-full bg-orange-200'>
                        {/* <img className='object-contain rounded-full' src={aboutwork.image} alt={aboutwork.name}/> */}
                    </div>
                    <div className='flex flex-col ml-2'>
                        <span className='font-bold'>
                            {aboutwork.name}
                        </span>
                        <span className='text-sm'>
                            {aboutwork.originated}
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end'>
            <span className='flex justify-center items-center rounded-full border-1 border-black w-16 px-5 py-0.5'>Follow</span>
            </div>
        </div>
        <div className='mt-5'>
          {aboutwork.about}
        </div>
      </div>
    </div>
  )
}
 
export default ArtCenterAboutTheWork
