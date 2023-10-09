import React, { useState, useEffect } from 'react';
import styles from '@styles/followArtist.module.css'
import cardArtist from '@localDatabase/cardArtist.js'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


function FollowArtist() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
    console.log('clicked')
  };

    
  return (
    <div className="max-w-[calc(100%-4rem)] mx-auto max-w-[7rem] overscroll-x-none mt-5">
      <h2 className="font-bold text-2xl -mb-5">Trending Artist on Tribals</h2>
        <div className='carouselz2Container w-full grid grid-flow-col auto-cols-[55%] gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory snap-start scroll-px-2 scroll-smooth py-20 relative md:auto-cols-[33%] lg:auto-cols-[19%]'>
            
            {cardArtist.map((card, index) => (

                <div className="w-full h-72 rounded-lg snap-start mx-2" key={index}>
                <div className="h-4/5 w-full">
                    <img src={card.image} alt={card.name} className='w-full h-full object-cover'/>
                </div>
                <div className="w-full flex justify-between px-2 py-3">
                    <div className="grid grid-col">
                        <span className='font-semibold'>{card.name}</span>
                        <span className='italic font-semibold text-gray-500'>{card.location}</span>
                    </div>
                    <div className="border-1 w-20 h-8 rounded-full flex justify-center items-center bg-black text-white">
                    <button className="" onClick={handleButtonClick}>{isFollowing ? 'Following' : 'Follow'}</button>
                    </div>
                </div>
            </div>
        
            ))}
            
        </div>
    </div>
  )
}

export default FollowArtist


