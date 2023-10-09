import React, { useState } from 'react'
import styles from '@styles/galleryBillboard.module.css'
import {AiFillCaretLeft, AiFillCaretRight, AiOutlineMinus} from "react-icons/ai";




function GalleryBillBoard({ galleryboard }) {
  const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? galleryboard.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    } 

    const nextSlide = () => {
       const isLastSlide = currentIndex === galleryboard.length - 1;
       const newIndex = isLastSlide ? 0 : currentIndex + 1;
       setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

      return (
    <div className='container mt-5'>
        <div className='GalleryBillBoardcontainer max-w-[1400px] max-h-[700px] w-full mt-5 mx-auto rounded-2xl bg-gray-200'>
                     <div key={galleryboard[currentIndex].id} className='GalleryBillBoardBox grid grid-cols-1 md:grid-cols-2 w-full h-full'>
                        <div className='GalleryBillBoardImageBox w-full h-86 rounded-2xl md:h-96'>
                            <img src={galleryboard[currentIndex].image} alt={galleryboard[currentIndex].title} className='GalleryBillBoardImage object-cover w-full h-full rounded'/>
                        </div>
                        <div className='GalleryBillBoardTextBox w-full h-64 flex flex-col justify-center items-center gap-2 md:h-full'>
                            <h2 className='text-2xl font-bold text-dark md:text-4xl'>{galleryboard[currentIndex].title}</h2>
                            <span className='font-semibold text-gray-500'>{galleryboard[currentIndex].show}</span>
                            <span className='font-semibold text-2xl text-dark-500'>{galleryboard[currentIndex].subtitle}</span>
                            <span className='italic font-semibold'>{galleryboard[currentIndex].location}</span>
                            <button type='button' className='w-32 h-8 bg-white text-black border-1 rounded-2xl'>Follow</button>
                        </div>
                     </div>   
        </div>

      <div className='container flex items-center justify-between w-4/5 mt-3'>
           <div className='flex justify-evenly w-4/5'>
        {
            galleryboard.map((_, slideIndex) => (
                <div
                key={slideIndex}
                className='text-2xl cursor-pointer'
                onClick={() => goToSlide(slideIndex)}
                >
                    <AiOutlineMinus key={slideIndex} size={50} className={slideIndex === currentIndex ? 'text-gray-500' : 'text-black'}/>
                </div>
            ))
        }
        </div>

        <div className='flex justify-center items-center gap-2 w-1/5'>
          {/* arrow buttons */}
          <div className={`text-2xl w-8 h-8 rounded-full p-2 bg-gray-100 text-white cursor-pointer relative ${currentIndex === 0 ? 'invisible' : 'visible'}`}><AiFillCaretLeft  onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1.5 text-black'/></div>
          <div className={`text-2xl w-8 h-8 rounded-full p-2 bg-gray-100 text-gray cursor-pointer relative  ${currentIndex === galleryboard.length - 1 ? 'invisible' : 'visible'}`}><AiFillCaretRight   onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1.5 text-black"/></div>
        </div>
      </div>
       
       
    </div>
  )
}

export default GalleryBillBoard
