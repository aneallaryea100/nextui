import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import BlogData from '@localDatabase/Data/editorialBlog'
import slugify from 'slugify'


function ArticleDetails({ articleName, index }) {
  useEffect(() => {
    function convertToSlug(inputString) {
      return inputString
        .toLowerCase()
        .replace(/\s+/g, '-') 
        .replace(/-+/g, '-')       
        .replace(/[^\w-]+/g, '');   
    }

    console.log('slugname', convertToSlug(articleName.name))
  }, [])

  return (
    <div className='w-4/5 m-auto' key={index}>
      <h1 className='font-bold text-2xl my-4'>{articleName.name}</h1>
      <div className=''>
        <img src={articleName.imageSrc} alt={articleName.author} className='float-left max-w-[320px] mx-2'/>
        <p className=''>{articleName.blogContent}</p>
      </div>
    </div>
  )
}

export default ArticleDetails

export async function getStaticProps({params}) {
  const articlename = params.articlename;
  const articleName = BlogData.find((article) => article.name === articlename);
  
  if (!articleName) {
    return {
      notFound: true,
    }
  }

  return {
    props: { articleName }
  }
}

export async function getStaticPaths(){
  const paths = BlogData.map((article) => ({ 
    params: { 
      articlename: article.name,
     },
  }))

  return { paths, fallback: false}
}

