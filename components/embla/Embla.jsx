import React from 'react'
import EmblaCarousel from './EmblaCarousel'

function Embla() {
    const OPTIONS = { align: 'start', dragFree: true, containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className='relative'>
       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Embla
