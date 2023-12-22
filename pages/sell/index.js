import React from 'react'
import { AiOutlineDollar } from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
import { FaGlobeAfrica } from "react-icons/fa";
import ScrollCarouselAneal from '@components/carouselReact/ScrollCarouselAneal';
import Specialist from '@localDatabase/Data/specialist';
import Expandable from '@components/expandable/expandable';



function Index({specialist}) {
  return (
    <div className='w-full grid grid-cols-1 gap-3'>
      {/* intro banner section */}
      <div className='w-full flex flex-col md:flex-row-reverse lg:h-[80vh]'>
        <div className='w-full bg-red-300'>
            <div className='w-full h-80 md:h-full'>
                <img src='https://images.unsplash.com/photo-1696461353431-32c529d4585d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D' alt='himage' className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='w-full p-2'>
            <div className='grid grid-cols-1 auto-cols-max'>
                <div className='w-full md:w-[75%]'>
                    <h1 className='block font-bold text-4xl md:text-6xl lg:text-8xl'>Sell art from your collection</h1>
                </div>

                <div className='my-2 md:my-4 lg:my-5'>
                    <p className='block w-full text-sm  md:text-2xl md:leading-10 md:font-semibold lg:w-2/3'>With our global reach and art market expertise, our specialists will find the right buyer for your work.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-between md:items-center md:gap-2 lg:w-1/2'>
                  <button className='btnbtn text-white py-2.5 rounded-full font-medium w-full mt-3 bg-black hover:bg-white'><span className='w-full hover:underline hover:underline-offset-1'>Start Selling</span></button>
                  <button className='btnbtn bg-white text-black py-2.5 rounded-full font-medium w-full mt-3 border-1'><span className=''>Get in Touch</span></button>
                </div>
                
                
            </div>
        </div>
      </div>
      {/* Info summary section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:my-10'>
        <div className='w-full grid grid-cols-1 gap-4 p-2'>
          <span className='text-4xl md:text-6xl'><AiOutlineDollar /></span>
          <h2 className='font-bold text-2xl md:text-4xl'>Earn more from your sale</h2>
          <span className='text-sm font-semibold'>With lower fees than traditional auction houses and dealers, you take home more of the final sale price.</span>
        </div>
        <div className='w-full grid grid-cols-1 gap-4 p-2'>
          <span className='text-4xl md:text-6xl'><GiAlliedStar /></span>
          <h2 className='font-bold text-2xl md:text-4xl'>Tap into our expertise</h2>
          <span className='text-sm font-semibold'>Our team has a wealth of experience in the secondary art market. A dedicated specialist will be with you every step of the way.</span>
        </div>
        <div className='w-full grid grid-cols-1 gap-4 p-2'>
          <span className='text-4xl md:text-6xl'><FaGlobeAfrica /></span>
          <h2 className='font-bold text-2xl md:text-4xl'>Reach a global network</h2>
          <span className='text-sm font-semibold'>With the world’s largest network of collectors, we match your work with the most interested buyers in over 190 countries.</span>
        </div>
      </div>
      {/* Sales strategy section */}
      <div className='w-full h-screen bg-black px-3 py-5 grid grid-cols-1 gap-5'>
        <div className='w-full grid grid-cols-1 gap-y-5'>
          <h3 className='w-full text-white text-2xl lg:text-6xl'>A sales strategy tailored to your artwork</h3>
          <p className='text-white text-sm'>A dedicated specialist works with you to select the best sales option for your artwork.</p>
        </div>
        <div className='w-full grid grid-flow-col auto-cols-[75%] gap-x-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-2 scroll-smooth md:auto-cols-[30%] md:overflow-y-hidden md:overflow-x-hidden md:pl-12'>
          <div className='snap-start w-full md:snap-align-none'>
            <div className='w-full md:h-[30%] lg:h-[70%]'>
              <img src='https://plus.unsplash.com/premium_photo-1661940814738-5a028d647d3a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1Y3Rpb258ZW58MHx8MHx8fDA%3D' alt='fff' className='w-full h-full object-cover'/>
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <h3 className='font-semibold text-white md:text-2xl lg:text-4xl'>Auction</h3>
              <p className='text-white'>Our curated auctions provide you with multiple opportunities to reach the widest audience and successfully achieve your artwork’s full potential.</p>
            </div>
          </div>
          <div className='snap-start w-full md:snap-align-none'>
            <div className='w-full md:h-[30%] lg:h-[70%]'>
              <img src='https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFydCUyMGV4aGliaXRpb258ZW58MHx8MHx8fDA%3D' alt='fff' className='w-full h-full object-cover'/>
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <h3 className='font-semibold text-white md:text-2xl lg:text-4xl'>Private sales</h3>
              <p className='text-white'>​​We offer tailored and discreet sales arrangements for our collectors’ highest value and most sensitive artworks.</p>
            </div>
          </div>
          <div className='snap-start w-full md:snap-align-none'>
            <div className='w-full md:h-[30%] lg:h-[70%]'>
              <img src='https://images.unsplash.com/photo-1551651653-c5186a1fbba2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY0fHxpcGFkfGVufDB8fDB8fHww' alt='fff' className='w-full h-full object-cover'/>
            </div>
            <div className='w-full grid grid-cols-1 gap-2'>
              <h3 className='font-semibold text-white md:text-2xl lg:text-4xl'>Online marketplace</h3>
              <p className='text-white'>When your work is listed directly on Tribals.net—the world’s largest online art marketplace—it reaches over 3 million art lovers.</p>
            </div>
          </div>
        </div>
      </div>
      {/* How it works section */}
      <div className='w-full mb-5 py-5 px-2 md:h-[50vh]'>
        <h3 className='font-semibold text-2xl mb-3'>How it works</h3>
        <div className='w-full h-3/4 grid grid-cols-1 gap-3 md:grid-cols-4'>
          
          <div className='grid grid-cols-1 gap-2 leading-3 p-2'>
            <span className='block text-xl font-semibold md:text-4xl'>01</span>
            <h4 className='font-semibold block md:text-4xl'>Submit your artwork</h4>
            <div className=''> <p className='text-sm'>Enter the artist’s name on the submission page. If the artist is in our database, you’ll be able to upload images and artwork details.</p></div>
           
          </div>

          <div className='grid grid-cols-1 gap-2 leading-3 p-2'>
            <span className='block text-xl font-semibold md:text-4xl'>02</span>
            <h4 className='font-semibold block md:text-4xl'>Meet your expert</h4>
            <div className=' '><p className='text-sm'>One of our specialists will review your submission and determine the best sales option.</p></div>
            
          </div>

          <div className='grid grid-cols-1 gap-2 leading-3 p-2'>
            <span className='block text-xl font-semibold md:text-4xl'>03</span>
            <h4 className='font-semibold block md:text-4xl'>Get a sales option</h4>
            <div className=''><p className='text-sm'>Review your tailored sales strategy and price estimate. We’ll select the best way to sell your work—either at auction, through private sale, or a direct listing on Artsy.</p></div>
          </div>

          <div className='grid grid-cols-1 gap-2 leading-3 p-2'>
            <span className='block text-xl font-semibold md:text-4xl'>04</span>
              <h4 className='font-semibold block md:text-4xl'>Sell your work</h4>
              <div className=''><p className='text-sm'>Keep your work until it sells, then let our team handle the logistics. No costly presale insurance, shipping, or handling fees.</p></div>
          </div>
        </div>
        <div className='w-full mt-5 md:w-1/5'>
          <button className='btnbtn text-white py-2.5 rounded-full font-medium w-full mt-3 bg-black hover:bg-white'><span className='w-full hover:underline hover:underline-offset-1 font-semibold'>Get Started</span></button>
        </div>
      </div>
      {/* Get in touch */}
      <div className='bg-black text-white w-full py-5 px-2 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:h-[35vh] lg:h-[90vh] '>
        <div className='w-full'>
          <h4 className='text-2xl font-semibold lg:text-6xl'>Interested in selling multiple artworks?</h4>
          <p className='text-2xl font-semibold lg:text-6xl'>Speak with our team.</p>
          <div className='w-full mt-2 md:w-1/2 lg:w-2/4'>
          <button className='btnbtn text-white py-2.5 rounded-full font-medium w-full mt-3 bg-white hover:bg-blue-500'><span className='w-full text-black hover:underline hover:underline-offset-1 font-semibold'>Get in Touch</span></button>
        </div>
        </div>
        <div className='imageDDiv w-full h-4/5 md:h-2/4 lg:h-4/5'>
          <img src='https://images.unsplash.com/photo-1666185761628-00a3655f4f7b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlY3Rpb24lMjBvZiUyMGFydHN8ZW58MHx8MHx8fDA%3D' alt="artist" className='w-full h-full object-cover' />
          <p className='text-gray-100 text-xs italic'>Janet Fish, Daffodils, 1995. Malik Roberts, Untitled | Blue, 2022. Robert Colescott, Les Demoiselles d’Alabama: Vestidas, 1985. Hunt Slonem, Peacock St Mary’s, 2010-2020. Vik Muniz, Metachrome (Interior with Egyptian Curtain, after Matisse), 2016.</p>
        </div>
      </div>
      {/* meet the specialist */}
      <div className='w-full h-screen px-2 pt-5'>
        <div className='w-full h-24 flex flex-col gap-2.5 lg:grid grid-cols-1'>
          <h5 className='text-2xl font-bold lg:text-6xl'>Meet the specialist</h5>
          <p className='w-full text-xs font-semibold lg:text-xl'>Our specialists span today’s most popular collecting categories.</p>
          <div className='flex w-[90%] lg:w-1/3'>
            <button className='btnbtn text-white rounded-full font-medium border border-black  bg-white hover:bg-blue-500 px-2.5 mr-3'><span className='w-full text-black hover:underline hover:underline-offset-1'>Auctions</span></button>
            <button className='btnbtn text-white rounded-full font-medium border border-black  bg-white hover:bg-blue-500 px-2.5'><span className='w-full text-black hover:underline hover:underline-offset-1'>Private Sales & Advisory</span></button>
          </div>
        </div>
        {/* specialist images or div caraousel */}
        <div className='w-full h-[80%] mt-5 flex no-wrap gap-2'>
          {/* Sect 1 */}
          <ScrollCarouselAneal>
            {
              specialist.map((data , dataindex) => (
                 <div className='relative w-full h-[29rem] snap-start' key={dataindex}>
                    <div className='w-full h-full bg-yellow-500'>
                      <img src={data.img} alt={data.name} className='w-full h-full object-cover'/>
                    </div>
                    <div className='textsection absolute bottom-0 left-1 p-2 flex flex-col gap-2 text-white'>
                      <span className='block font-semibold text-2xl'>{data.name}</span>
                      <span className='block text-xs'>{data.role}</span>
                       <Expandable>{data.about}</Expandable> 
                      <button className='btnbtn w-[80%] rounded-full font-medium border bg-transparent hover:bg-blue-500 px-2.5 md:w-2/4'><span className='w-full text-white hover:underline hover:underline-offset-1 text-xs'>{`Contact ${data.name}`}</span></button>
                    </div>
                  </div>
              ))
            }
           
          </ScrollCarouselAneal>
          
        </div>
        <div className='w-full mt-3 md:px-4'>
          <span className='block text-sm font-semibold md:text-xl'>Not sure who’s the right fit for your collection? Get in touch and we’ll connect you.</span>
          <button className='btnbtn w-full bg-black text-white rounded-full font-medium border border-black hover:bg-blue-500 py-2 mt-3 md:w-1/3'><span className='w-full hover:underline hover:underline-offset-1'>Get in touch</span></button>
        </div>
      </div>
      {/* Global collectors */}
      <div className='w-full px-5 py-5 mt-5'>
          <h6 className='w-full text-2xl font-semibold mb-5  md:text-6xl'>Reach a global network of collectors</h6>
          <div className='flex flex-col gap-2 md:flex-row'>
              <div className='w-full grid grid-cols-2 gap-2  md:grid-cols-1 md:w-[70%] md:h-96 md:gap-y-8'>
                  <div className='w-full'>
                    <span className='text-4xl md:text-6xl font-bold'>3M+</span>
                    <div>
                      <span className='w-full text-sm block md:font-semibold md:text-2xl'>registered users worldwide</span>
                  </div>
                  </div>

                  <div className='w-full '>
                    <span className='text-4xl md:text-6xl font-bold'>3,000</span>
                    <div>
                      <span className='w-full text-sm block md:font-semibold md:text-2xl'>miles average transaction distance</span>
                  </div>
                  </div>

                  <div className='w-full '>
                    <span className='text-4xl md:text-6xl font-bold'>190</span>
                    <div>
                      <span className='w-full text-sm block md:font-semibold md:text-2xl'>countries in our network</span>
                  </div>
                  </div> 
              </div>
              <div className='bg-globalMap w-full h-96 bg-no-repeat bg-cover bg-center md:h-[70vh]'></div>
          </div>
      </div>
      {/* prevously sold on tribals */}
      <div className='w-full h-screen bg-indigo-300 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className='block md:text-4xl font-bold text-white'>Previously sold on Tribals</span>
        <span className='block md:text-4xl font-bold text-white'>--awaits database--</span>
        </div>
      </div>
      {/* No upfront fees*/}
      <div className='bg-black text-white w-full py-5 px-2 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:h-[35vh] md:px-5 lg:h-[90vh] '>
        <div className='w-full'>
          <h4 className='text-2xl font-semibold tracking-wider leading-9 lg:text-5xl'>No upfront fees, clear pricing estimates, and competitive commission structures.</h4>
          <p className='text-sm font-semibold my-4 md:text-xl'>Have more questions?</p>
          <div className='w-full md:w-1/2 lg:w-2/4'>
          <button className='btnbtn text-white py-2.5 rounded-full font-medium w-full bg-black border hover:bg-blue-500'><span className='w-full text-white hover:underline hover:underline-offset-1 font-semibold'>Read FAQs</span></button>
        </div>
        </div>
        <div className='imageDDiv w-full h-4/5 md:h-2/4 lg:h-4/5'>
          <img src='https://d7hftxdivxxvm.cloudfront.net/?height=838&quality=80&resize_to=fit&src=https%3A%2F%2Ffiles.artsy.net%2Fimages%2FSWA-landing-FAQ-section-x2.jpg&width=1900' alt="artist" className='w-full h-full object-cover' />
          <p className='text-gray-100 text-xs italic hidden md:block'>Andy Warhol, Cow, II.12A, 1976. Alex Katz, Yellow Tulips, 2014. Hunt Slonem, Abraham Lincoln, 2020. Julian Opie, Walking in Melbourne, 1, 2018</p>
        </div>
      </div>
      {/* sell with tribals*/}
      <div className='flex justify-center items-center p-5 h-96'>
        <div className='bg-gray'>
           <div>
            <span className='block text-2xl font-semibold text-center md:text-4xl '>Sell with Tribals is the simple, contemporary way to sell art from your collection.</span>
          </div>
          <div className='w-full text-center mt-5'>
            <button className='btnbtn w-64 text-white py-2.5 rounded-full font-medium bg-black border hover:bg-blue-500'><span className='w-full text-white hover:underline hover:underline-offset-1 font-semibold'>Start selling</span></button>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  return {
    props: {
      specialist: Specialist,
    },
  }
}