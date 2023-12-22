import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import fairData from '@localDatabase/Data/fairs';

function Fairs({data}) {
  const [visiblePast, setVisiblePast] = useState(10);
  const [activeTab, setActiveTab] = useState("current")
  
  const totalPastEvent = data.past.length;
 
  const loadMore = () => {
    setVisiblePast(k => k + 5)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className='mx-3 px-2 mt-4'>
      {/* medium screen view */}
      <div className='hidden md:block'>
            <h1 className='font-bold text-4xl'>Current Events</h1>
          <div className='hidden md:flex flex-col gap-3 current'>
        { data.current.map((k, v) => (
          <div className={v} key={v}>
                <div className='bg-red-200 w-full h-[35rem]'>
                  <img src={k.image} alt={k.title} className='w-full h-full object-cover'/>
                </div>
                <div className='flex justify-start items-center py-2 px-2'>
                  <div className='bg-yellow-300 w-16 h-10 flex justify-center items-center'><img src={k.logo} alt='test' className='w-16 h-10 object-cover'/></div> 
                  <div className='mx-5 font-semibold'>
                    <span className='block'>{k.title}</span>
                    <span className='block'>{k.date}</span>
                  </div>
                  </div>
            </div> 
        ))
          
          }
          </div>
          <div className='hidden mt-5 md:flex'>
            <div className='pastevent  w-3/5 p-2'>
              <h2 className='text-4xl py-2'>Past Events</h2>
              <div className='hold-pastevents'>
                <div className='divide-y divide-gray-400 flex flex-col border-t-2 border-gray-400'>
                { data.past.slice(0, visiblePast).map((k,v) => (
                  <div className='flex items-center justify-between py-10 px-1' id={v} key={v}>
                  <div className='flex items-center'><span className='w-16 h-16'><img src={k.logo} className='w-16 h-16 object-cover'/></span><span className='mx-5 w-52 font-bold'>{k.title}</span></div>
                  <div><span className='font-semibold'>{k.date}</span></div>
                  <div><span ><IoIosArrowForward /></span></div>
                </div>
                ))
                }
              </div>
            { visiblePast < totalPastEvent && (
                <div className='flex justify-center items-center'><button className='bg-blue-600 p-2 rounded-md text-white font-semibold' onClick={loadMore}>Load more</button></div>
            )
            }
              </div>
              
            </div>
            <div className='upcomingevent w-2/5 h-96 p-2'>
            <h2 className='text-4xl border-b-2 border-gray-400 py-2'>Upcoming Events</h2>
            <div className='flex flex-col gap-3 justify-start  mt-4'>
              { data.upcoming.map((k, v) => (
                <div className='flex flex-col gap-2' id={v} key={v}>
                <span className='underline decoration-1 text-2xl'>{k.title}</span>
                <span className='font-semibold'>{k.date}</span>
              </div>
              ))
                
              }
            </div>
            </div>
          </div>
      </div>
      {/* mobile view */}
        <div className='mt-5 md:hidden'>
          <div className='bg-fairbg bg-no-repeat bg-cover  w-full h-52 flex justify-center items-center'>
            <span className='flex justify-center items-center text-white text-center font-extrabold w-3/4'>Collect from leading art fairs on Tribals</span>
          </div>
          <div className='flex justify-center items-center mt-4 '>
            <div className='flex justify-between items-center border-b-2 border-gray-400 w-4/6'>
              <div className={`py-2 ${activeTab==="current" ? 'border-b-2 border-black' : ''}`} onClick={() => handleTabClick("current")}><button>Current</button></div>
              <div className={`py-2 ${activeTab==="upcoming" ? 'border-b-2 border-black' : ''}`} onClick={() => handleTabClick("upcoming")}><button>Upcoming</button></div>
              <div className={`py-2 ${activeTab==="past" ? 'border-b-2 border-black' : ''}`} onClick={() => handleTabClick("past")}><button>Past</button></div>
            </div>
            
          </div>
          <div className='activetabsDisplay my-2'>
            {/* current */}
            {activeTab === "current" && 
              <div className='divide-y divide-gray-400 flex flex-col'>
                { 
                  data.current.map((k,v) => (
                      <div className='flex items-center justify-between' id={v} key={v}>
                        <div className='flex flex-col gap-1 py-2'>
                          <div className='flex items-center'><span className='font-bold'>{k.title}</span></div>
                          <div><span className='font-semibold'>{k.date}</span></div>
                        </div>
                      <div><span ><IoIosArrowForward /></span></div>
                    </div>
                    ))
                }
            </div>
            }
            {/* past */}
            {activeTab === "past" && 
            <div className='divide-y divide-gray-400 flex flex-col'>
              { data.past.slice(0, visiblePast).map((k,v) => (
                  <div className='flex items-center justify-between' id={v} key={v}>
                    <div className='flex flex-col gap-1 py-2'>
                      <div className='flex items-center'><span className='font-bold'>{k.title}</span></div>
                      <div><span className='font-semibold'>{k.date}</span></div>
                    </div>
                  <div><span ><IoIosArrowForward /></span></div>
                </div>
                ))
                }
            { visiblePast < totalPastEvent && (
                <div className='flex justify-center items-center py-4'><button className='bg-blue-600 p-2 rounded-md text-white font-semibold' onClick={loadMore}>Load more</button></div>
            )
            }
            </div>
            }
            {/* upcoming */}
            {activeTab === "upcoming" && 
               <div className='divide-y divide-gray-400 flex flex-col'>
               { 
                 data.upcoming.map((k,v) => (
                     <div className='flex items-center justify-between' id={v} key={v}>
                       <div className='flex flex-col gap-1 py-2'>
                         <div className='flex items-center'><span className='font-bold'>{k.title}</span></div>
                         <div><span className='font-semibold'>{k.date}</span></div>
                       </div>
                     <div><span ><IoIosArrowForward /></span></div>
                   </div>
                   ))
               }
           </div>
            }
          </div>
        </div>
    </div>
  )
}

export async function getStaticProps(){
  const data = fairData;
  return{
    props: {
      data
    }
  }
}


export default Fairs
