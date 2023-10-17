import Link from 'next/link'
import BlogData from '@localDatabase/Data/editorialBlog'

function convertToSlug(inputString) {
  return inputString
  .toLowerCase()
  .replace(/\s+/g, '-') 
  .replace(/-+/g, '-')       
  .replace(/[^\w-]+/g, '');
}


function index({articles}) {
  return (
    <div className='max-w-[calc(100%-4rem)] mx-auto'>
      <h1 className='text-4xl font-bold my-3'>Editorial</h1>
      <div className='w-full grid grid-cols-1 mb-5'>
        {
          articles.map((item) => (
            <div key={item.id} className='w-2/3 h-[28rem] lg:mb-20'>
              <span className='block text-sm'>{item.date}</span>
              <div className='w-full h-[26rem]  bg-gray-100 grid grid-cols-1 md:grid-cols-2'>
                 <div className='w-full font-semibold flex flex-col'>
                  <Link href={`/articles/${item.name}`}>
                    <span className='block font-bold text-2xl w-full'>{item.title}</span>
                    <span className='block'>{`by ${item.author}`}</span> 
                  </Link>
                 </div>
                 <Link href={`/articles/${item.name}`}>
                  <div className='w-full min-h-min '>
                    <img src={item.imageSrc}  alt={item.name} className='w-full h-full object-fill bg-gray-200'/>
                  </div>
                 </Link>
                  
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default index

export async function getStaticProps(){
  return { 
    props: {
       articles : BlogData ,
    }
  }
}
