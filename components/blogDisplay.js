import Image from "next/image"
import BlogData from "@localDatabase/Data/editorialBlog"
import Link from "next/link"

function BlogDisplay() {
  return (
    <div className='max-w-[calc(100%-4rem)] mx-auto mt-5 py-8'>
      <h2 className='font-semibold text-2xl text-dark my-5'>Tribals Editorial</h2>
      <div className='blogDisplayContentContainer grid grid-cols-1 w-full gap-x-1 gap-y-4 md:grid-cols-2 md:gap-y-0' >
        <div className='blogDisplayContentrigthEdit mb-5 w-full h-96 md:h-screen md:mb-0'>
            <div className="blogDisplayContentImagery w-full h-3/4 bg-black bg-no-repeat bg-cover bg-center" >
                <img src='https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxhcnQlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
                alt='editorial' 
                className='w-full h-full object-cover'/>
            </div>
            <div className='blogDisplayContenttext'>
                <span className='font-semibold block'>Center of Arts</span>
                <span className='font-bold text-2xl block'>The Tribals Book of Arts: July 2023</span>
                <span className='italic font-semibold block'>By Tribals Editorial</span>
                <span className='font-semibold block'>15 July, 2023</span>
            </div>
        </div>
        
        <div className='blogDisplayContentleftEdit w-full grid grid-cols-1 grid-rows-1 gap-y-5 gap-x-3 md:grid-cols-2'>
            {
                BlogData.map((data) => (
                    <Link href={`/articles/${data.name}`}>
                        <div className='blogDisplayContentleftBox w-full ' key={data.id}>
                        <div className='blogDisplayContentleftImageBox h-64'>
                            <img
                             src={data.imageSrc}
                             alt={data.name}
                            className='w-full h-full'
                            />
                        </div>
                        <div className='p-1 text-dark grid grid-cols-1 gap-0'>
                            <span className='font-semibold block'>{data.category}</span>
                            <span className='font-bold block text-xl'>{data.title}</span>
                            <span className='italic font-semibold block'>{`By ${data.author}` }</span>
                            <span className='font-semibold block text-gray-500'>{data.date}</span>
                        </div>
                    </div>
                    </Link>
                    
                ))
            }
           

           
        </div>
      </div>
    </div>
  )
}

export default BlogDisplay

// export asycn function getServerSideProps() {

// }
