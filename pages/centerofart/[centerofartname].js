import React from 'react'
import { useRouter } from 'next/router'
import ArtCenterSectionTwoArtWorksData from '@localDatabase/Data/centerArtSection2Artworks'
import ArtCenterDetailedPage from '@components/centerOfartss/artCenterDetailedPage'

function DetailedCenterofArt() {
    const router = useRouter()
    const {centerofartname} = router.query
    const artdata = ArtCenterSectionTwoArtWorksData;
    const  arts = artdata.find((art) => art.name === centerofartname);

    if (!arts) {
      return <div>Art not found</div>;
    }

  return (
    <>
      <ArtCenterDetailedPage artDetails={arts} />
    </>
  )
}

export default DetailedCenterofArt
