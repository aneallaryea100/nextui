import styles from '@styles/blogDisplay.module.css'


function BlogDisplay() {
  return (
    <div className='container mt-5 p-2'>
      <h2 className='font-semibold text-2xl text-dark my-1'>Tribals Editorial</h2>
      <div className='blogDisplayContentContainer grid grid-cols-1 w-full gap-x-1 gap-y-4 md:grid-cols-2 md:gap-y-0' >
        <div className='blogDisplayContentrigthEdit w-full h-96 md:h-screen'>
            <div className="blogDisplayContentImagery w-full h-3/4 bg-black bg-[url('/images/fo.jpg')] bg-no-repeat bg-cover bg-center">
                {/* <img src='images/fo.jpg' alt='editorial' className=''/> */}
            </div>
            <div className='blogDisplayContenttext'>
                <span className='font-semibold block'>Center of Arts</span>
                <span className='font-bold text-2xl block'>The Tribals Book of Arts: July 2023</span>
                <span className='italic font-semibold block'>By Tribals Editorial</span>
                <span className='font-semibold block'>15 July, 2023</span>
            </div>
        </div>
        
        <div className='blogDisplayContentleftEdit w-full grid grid-cols-1 grid-rows-1 gap-y-2 gap-x-2 md:grid-cols-2'>
            <div className='blogDisplayContentleftBox w-full '>
                <div className='blogDisplayContentleftImageBox h-64'>
                    <img src='images/asake.webp' alt='asake work of art' className='w-full h-full'/>
                </div>
                <div className='bg-orange-500 p-1 text-dark grid grid-cols-1 gap-0'>
                    <span className='font-semibold block'>Art & Music</span>
                    <span className='font-bold block text-xl'>Inside the art and spirituality of Music</span>
                    <span className='italic font-semibold block'>By Asake </span>
                    <span className='font-semibold block'> July 8, 2023</span>
                </div>
            </div>

            <div className='blogDisplayContentleftBox w-full'>
                <div className='blogDisplayContentleftImageBox h-64'>
                    <img src='images/blacko.jpg' alt='The villian I never was-blacksherif' className='w-full h-full'/>
                </div>
                <div className='bg-black text-white p-1 grid grid-cols-1 gap-0'>
                    <span className='font-semibold block'>Art & Music</span>
                    <span className='font-bold block text-xl'>The Inspiration behind the Villian I never was.</span>
                    <span className='italic font-semibold block'>By Black Sherif </span>
                    <span className='font-semibold block'> August 18, 2023</span>
                </div>
            </div>

            <div className='blogDisplayContentleftBox w-full'>
                <div className='blogDisplayContentleftImageBox h-64'>
                    <img src='images/stonebwoy.jpg' alt='stonebwoy- 5th dimension' className='w-full h-full'/>
                </div>
                <div className='bg-orange-900 p-1 text-dark'>
                    <span className='font-semibold block'>Art & Music</span>
                    <span className='font-bold block text-xl'>The 5th Dimension and Journey of Afrobeat.</span>
                    <span className='italic font-semibold block'>By Stonebwoy </span>
                    <span className='font-semibold block'> June 10, 2023</span>
                </div>
            </div>

            <div className='blogDisplayContentleftBox w-full '>
                <div className='blogDisplayContentleftImageBox h-64'>
                    <img src='images/titi.jpeg' alt='Titilope' className='w-full h-full'/>
                </div>
                <div className='bg-green-400 p-1 text-white grid grid-cols-1 gap-2'>
                    <span className='font-semibold block'>Centre Of Art</span>
                    <span className='font-bold block text-xl'>The different faces of womanhood.</span>
                    <span className='italic font-semibold block'>By Titilope </span>
                    <span className='font-semibold block'> August 10, 2023</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDisplay
