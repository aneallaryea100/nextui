import React, { useState, useEffect} from 'react'
import styles from '@styles/galleryImage.module.css'


function GalleryImageDiv({ galleryImage }) {
    const [realData, setRealData] = useState(galleryImage);

    const handleFollowClick = (id) => {
      setRealData((prevData) => 
        prevData.map((data) => 
          data.id === id ? { ...data, following: !data.following} : data
        )
      )
    }

  return (
    <div className='max-w-[calc(100%-4rem)] mx-auto overscroll-x-none mt-5'>
    <h1 className='font-semibold text-2xl'>Prints & Multiples</h1>
    <div className='carouselz2Container w-full grid grid-flow-col auto-cols-[70%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-10 relative md:auto-cols-[40%] lg:auto-cols-[25%]'>
      {
          realData.map((data, index) => {
              return (
                  <div className='galleryBox w-full h-72 rounded-lg snap-start mx-2 flex flex-col-reverse' key={index}>
                      <div className='boxImageGalerry h-4/5 w-full'>
                          <img src={data.imageURL}  alt={data.title} className='w-full h-full object-cover'/>
                      </div>
                      <div className="boxSub w-full flex justify-between px-2 py-3">
                        <div className="boxSubtitleContainer grid grid-col">
                          <p className='font-semibold'>{data.title}</p>
                          <p className='font-medium text-gray-500'>{data.subtitle}</p>
                        </div>

                        <div onClick={()=> handleFollowClick(data.id)} className='boxFollowGalerry border-1 w-24 h-8 rounded-full flex justify-center items-center cursor-pointer'>
                          <span className='py-1 px-4'>{data.following ? 'Following' : 'Follow'}</span>
                        </div>
                      </div>
                  </div>
              )
          })
      }
    </div>
  </div>
  )
}

export default GalleryImageDiv
