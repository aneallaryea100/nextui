import React from 'react'
import { useRouter } from 'next/router'
import ArtCenterSectionTwoArtWorksData from '@localDatabase/Data/centerArtSection2Artworks'
import ArtCenterDetailedPage from '@components/centerOfartss/artCenterDetailedPage'
import ArtCenterOtherWorks from '@components/centerOfartss/artCenterOtherWorks'

function DetailedCenterofArt() {
    const router = useRouter()
    const {centerofartname} = router.query
    const artdata = ArtCenterSectionTwoArtWorksData;
    const  mainArtwork = artdata.find((art) => art.name === centerofartname);
   // const relatedWork = mainArtwork.relatedWorks.find((work) => work.name === centerofartname);
    

    if (!mainArtwork) {
      console.log(`Art not found for name: ${centerofartname}`);
      return <div>Art not found</div>;
    }

  return (
    <>
      {mainArtwork && <ArtCenterDetailedPage artDetails={mainArtwork} />}
      <ArtCenterOtherWorks otherWorks={mainArtwork}/> 
    </>
  )
}

export default DetailedCenterofArt