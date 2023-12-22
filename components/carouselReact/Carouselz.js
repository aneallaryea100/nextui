import React, {useState} from 'react'
import {AiFillCaretLeft, AiFillCaretRight, AiOutlineMinus} from "react-icons/ai";

const slides = [
    {
        url: "https://images.unsplash.com/photo-1687692414808-be94eadc8d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1695765586912-39758d5de97d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1696199265099-e86e88c0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1689871431080-b32f1194c352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1696251803608-e8893f7fcdf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1689871431224-f6764b046bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
]

function Carouselz() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    } 

    const nextSlide = () => {
       const isLastSlide = currentIndex === slides.length - 1;
       const newIndex = isLastSlide ? 0 : currentIndex + 1;
       setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
      <div style={{background: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500'></div>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer mx-5'><AiFillCaretLeft  onClick={prevSlide}/></div>

      {/* rigth arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer mx-5'><AiFillCaretRight   onClick={nextSlide}/></div>

      <div className='flex justify-evenly top-4  py-2'>
        {
            slides.map((slide, slideIndex) => (
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
    </div>
  ) 
}

export default Carouselz
