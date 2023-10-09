import React, { useState } from 'react'
import {AiFillCaretLeft, AiFillCaretRight, AiOutlineMinus} from "react-icons/ai";

const randomData = [
    {
        "id": 1,
        "name":"Darts",
        "image":"https://images.unsplash.com/photo-1687692414808-be94eadc8d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "price": 200,
    },
    {
        "id": 2,
        "name":"Job",
        "image":"https://images.unsplash.com/photo-1686367134749-6795adf7f2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 300,
    },
    {
        "id": 3,
        "name":"Ubats",
        "image":"https://images.unsplash.com/photo-1689232535234-79db492ed871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 400,
    },
    {
        "id": 4,
        "name":"JNoksz",
        "image":"https://images.unsplash.com/photo-1696226100906-d9289cd6eb64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 500,
    },
    {
        "id": 5,
        "name":"Jkolson",
        "image":"https://images.unsplash.com/photo-1689870214223-abd1c76106dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 600,
    },
    {
        "id": 6,
        "name":"uuiuiu",
        "image":"https://images.unsplash.com/photo-1682642566142-f89364f2ef61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "price": 600,
    },
    {
        "id": 7,
        "name":"poppa",
        "image":"https://images.unsplash.com/photo-1687692414808-be94eadc8d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "price": 600,
    },
    {
        "id": 8,
        "name":"lolla",
        "image":"https://images.unsplash.com/photo-1696251803608-e8893f7fcdf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 600,
    },
    {
        "id": 9,
        "name":"aaaaa",
        "image":"https://images.unsplash.com/photo-1689871431224-f6764b046bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 600,
    },
    {
        "id": 10,
        "name":"kkkopp",
        "image":"https://images.unsplash.com/photo-1695796187783-23b6a38ba1aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "price": 600,
    },
]


function Carouselz2() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 5 < 0 ? 0 : currentIndex - 5);
    }

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 5 >= randomData.length ? currentIndex : currentIndex + 5);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className='max-w-[calc(100%-4rem)] mx-auto max-w-[7rem]'>
            <div className='carouselz2Container w-full grid grid-flow-col auto-cols-[55%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-8 relative md:auto-cols-[33%] lg:auto-cols-[19%]'>
                {
                    randomData.map((data, dataIndex) => (
                        <div className='w-full h-72 rounded-lg snap-start mx-2 bg-red-200' key={dataIndex}>
                            <div className='h-4/5 w-full'>
                                <img src={data.image} className='w-full h-full object-cover' alt={data.name} />
                            </div>
                            <div className='w-full flex items-center justify-around'>
                                <span className='block'>{data.name}</span>
                                <span className='block'>{`US$ ${data.price}`}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* left arrow */}
            <div className='hidden text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer mx-5'><AiFillCaretLeft onClick={prevSlide} /></div>

            {/* right arrow */}
            <div className='hidden text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer mx-5'><AiFillCaretRight onClick={nextSlide} /></div>

            {/* <div className='flex justify-evenly top-4  py-2'>
                {
                    randomData.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className='text-2xl cursor-pointer'
                            onClick={() => goToSlide(slideIndex)}
                        >
                            <AiOutlineMinus key={slideIndex} size={50} className={slideIndex === currentIndex ? 'text-gray-500' : 'text-black'} />
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Carouselz2
