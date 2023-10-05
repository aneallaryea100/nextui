import Image from 'next/image'
import Kalei from '../public/images/Kalei.jpg'
import Ghosts from '../public/images/Ghosts.jpg'
import Yahima from '../public/images/cameroon.jpg'
import ndebele from '../public/images/gramwood.jpg'

function Featured() {
  return (
    <div className='featuredContainer w-full container mt-5'>
      <h1 className='featuredheadtitle font-semibold text-2xl text-dark'>Featured </h1>

      <div className='artistContainer grid gap-1 grid-cols-2 lg:grid-cols-4'>
            <div className='artistContainerList w-full h-80 p-1'>
                <div className='imageArtContainer w-full h-5/6'>
                    <Image src={Kalei} alt='thecollecters' className='imgart w-full h-full' />
                </div>
                <div className='itextFeatured font-semibold'><p>Featured Fair</p></div>
                <div className='iheadFeatured'><span>Tatenda Eclipse, Zimbabwe.</span></div>
            </div>

            {/* second */}
            
            <div className='artistContainerList w-full h-80 p-1'>
                <div className='imageArtContainer w-full h-5/6'>
                    <Image src={Ghosts} alt='thecollecters' className='imgart w-full h-full' />
                </div>
                <div className='itextFeatured font-semibold'><p>Featured Fair</p></div>
                <div className='iheadFeatured'><span>Afolabi-Isigba, Nigeria.</span></div>
            </div>

            {/* third */}

            <div className='artistContainerList w-full h-80 p-1'>
                <div className='imageArtContainer w-full h-5/6'>
                    <Image src={Yahima} alt='thecollecters' className='imgart w-full h-full' />
                </div>
                <div className='itextFeatured font-semibold'><p>Featured Fair</p></div>
                <div className='iheadFeatured'><span>Adjeley Anang, Ghana.</span></div>
            </div>

            {/* fourth */}

            <div className='artistContainerList w-full h-80 p-1'>
                <div className='imageArtContainer w-full h-5/6'>
                    <Image src={ndebele} alt='thecollecters' className='imgart w-full h-full' />
                </div>
                <div className='itextFeatured font-semibold'><p>Featured Fair</p></div>
                <div className='iheadFeatured'><span>Bruise at Night, Kenya.</span></div>
            </div>
            
            
      </div>
    </div>
  )
}

export default Featured
