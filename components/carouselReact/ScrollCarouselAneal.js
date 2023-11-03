import React, { useState, useEffect } from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

function ScrollCarouselAneal ({children}) {
    const [isDown, setIsDown] = useState(false);
    let startX, startY, scrollLeft, scrollTop;

    const handleMouseDown = (e) => {
        setIsDown(true);
        startX = e.pageX - e.target.offsetLeft;
        startY = e.pageY - e.target.offsetTop;
        scrollLeft = e.target.scrollLeft;
        scrollTop = e.target.scrollTop;
       // e.target.style.cursor = 'grabbing';
      };

      const handleMouseLeave = () => {
        setIsDown(false);
        //document.getElementById('carouselz2Container').style.cursor = 'grab';
      };

      const handleMouseUp = () => {
        setIsDown(false);
       // document.getElementById('carouselz2Container').style.cursor = 'grab';
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
            <div className='max-w-[calc(100%-4rem)] mx-auto relative'>
                    <div className='carouselz2Container w-full h-full grid grid-flow-col auto-cols-[100%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-8 overflow-y-hidden md:py-16 md:auto-cols-[40%] lg:auto-cols-[30%]'
                            id='carouselz2Container'
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            >
                                        {children}
                      
                          <div className='z-10 w-[95%] flex justify-between items-center bg-red-900 absolute top-[50%] -left-1.5 md:left-5'>
                              {/* left arrow */}
                          <div className='relative text-2xl rounded-full bg-gray-300 text-black cursor-pointer'>
                              <AiFillCaretLeft  id='action-button--previous' className="absolute left-1/2 top-1/2 transform-translate(-50%, -50%)"/>
                          </div>

                          {/* right arrow */}
                          <div className='relative text-2xl rounded-full bg-gray-100 text-black cursor-pointer' >
                              <AiFillCaretRight  id='action-button--next' className="absolute left-1/2 top-1/2 transform-translate(-50%, -50%)"/>
                          </div>
                          </div>
                      
                    </div>
  
            </div>     
    )
}

export default ScrollCarouselAneal;