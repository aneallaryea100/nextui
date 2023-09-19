import React from 'react'
import ArtCenterOne from '@components/centerOfartss/artCenterOne'
import ArtCenterOneData from '@localDatabase/Data/centerArtSection1'
import ArtCenterSectionTwoArtWorksData from '@localDatabase/Data/centerArtSection2Artworks'
import ArtCenterArtWorks from '@components/centerOfartss/artCenterArtWorks'
import styles from "@styles/centerArtIndex.module.css"

function index({artcenterone, artcenterartworks}) {
  return (
    <>
    <div className={styles.centerArtIndexcontainer}>
     <h1>Collect art and Design Online</h1>
    </div>
    <ArtCenterOne artcenterone={artcenterone} />
    <ArtCenterArtWorks artcenterartworks={artcenterartworks}/>
    </>
  )
}

export default index

export async function getStaticProps(){
  return {
    props: {
      artcenterone: ArtCenterOneData,
      artcenterartworks: ArtCenterSectionTwoArtWorksData,
    }
  }
}