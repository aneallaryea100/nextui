import React from 'react'
import GalleryBillBoard from '@components/galleryComponents/galleryBillBoard';
import GalleryImageDiv from '@components/galleryImageDiv';
import galleryBillboardData from '@localDatabase/Data/galleryBillBoardData';
import galleryData1 from '@localDatabase/Data/galleryData1';

function index({galleryboard, galleryImage}) {
  return (
    <>
      <GalleryBillBoard galleryboard={galleryboard} />
      <GalleryImageDiv galleryImage={galleryImage}/>
    </>
  )
}

export default index

export async function getStaticProps() {
  return {
    props: {
      galleryboard: galleryBillboardData,
      galleryImage: galleryData1,
    }
  }
}
