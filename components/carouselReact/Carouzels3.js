import React, { useState, useEffect } from 'react';

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


function Carouzels3() {
    const [isDown, setIsDown] = useState(false);
  let startX, startY, scrollLeft, scrollTop;

  const handleMouseDown = (e) => {
    setIsDown(true);
    startX = e.pageX - e.target.offsetLeft;
    startY = e.pageY - e.target.offsetTop;
    scrollLeft = e.target.scrollLeft;
    scrollTop = e.target.scrollTop;
    e.target.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    document.getElementById('carouselz2Container').style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    document.getElementById('carouselz2Container').style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    const walkX = (x - startX) * 1;
    const walkY = (y - startY) * 1;
    e.target.scrollLeft = scrollLeft - walkX;
    e.target.scrollTop = scrollTop - walkY;
  };

  useEffect(() => {
    const scrollLeftButton = document.getElementById('action-button--previous');
    const scrollRightButton = document.getElementById('action-button--next');

    const handleScrollLeft = () => {
      document.getElementById('carouselz2Container').scrollBy({
        top: 0, 
        left: -200, 
        behavior: 'smooth'
      });
    };

    const handleScrollRight = () => {
      document.getElementById('carouselz2Container').scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
      });
    };

    const handleScroll = (e) => {
      const position = e.target.scrollLeft;
      if (position === 0) {
        scrollLeftButton.disabled = true;
        scrollLeftButton.style.color = 'gray';
      } else {
        scrollLeftButton.disabled = false;
        scrollLeftButton.style.color = 'black';
      }

      if (
        Math.round(position) === 
        e.target.scrollWidth - 
        e.target.clientWidth
      ) {
        scrollRightButton.disabled = true;
        scrollRightButton.style.color = 'gray';
      } else {
        scrollRightButton.disabled = false;
        scrollRightButton.style.color = 'black';
      }
    };

    scrollLeftButton.addEventListener('click', handleScrollLeft);
    scrollRightButton.addEventListener('click', handleScrollRight);

    const bankAccounts = document.getElementById('carouselz2Container');
    bankAccounts.addEventListener('scroll', handleScroll);

    return () => {
      scrollLeftButton.removeEventListener('click', handleScrollLeft);
      scrollRightButton.removeEventListener('click', handleScrollRight);
      bankAccounts.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className='max-w-[calc(100%-4rem)] mx-auto mt-5'>
        <div className='w-full flex justify-between items-center pr-12 mb-4'>
            <h1 className='text-2xl font-bold'>The Originals</h1>
            <div className='hidden w-12 ml-5 md:flex md:justify-between md:items-center bg-red-900 relative'>
                 {/* left arrow */}
            <div className='relative text-2xl rounded-full bg-gray-100 text-black cursor-pointer'>
                <AiFillCaretLeft  id='action-button--previous' className="absolute left-1/2 top-1/2 transform-translate(-50%, -50%)"/>
            </div>

            {/* right arrow */}
            <div className='relative text-2xl rounded-full bg-gray-100 text-black cursor-pointer' >
                <AiFillCaretRight  id='action-button--next' className="absolute left-1/2 top-1/2 transform-translate(-50%, -50%)"/>
            </div>
            </div>
        </div>
         

            <div className='carouselz2Container w-full grid grid-flow-col auto-cols-[55%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-8 relative md:auto-cols-[33%] lg:auto-cols-[19%]'
             id='carouselz2Container'
             onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
             >
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
    </div>
  )
}

export default Carouzels3
