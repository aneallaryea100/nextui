import { Session } from "next-auth"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head";
//import { getSession, useSession, signOut } from "next-auth/react";
import StoryTales from "@components/storyTales";
import Featured from "@components/featuredArtist";
import GalleryFeatured from "@components/galleryExhibit";
import FollowArtist from "@components/followArtist";
import BlogDisplay from "@components/blogDisplay";
import Carouzels3 from "@components/carouselReact/Carouzels3";


function Home() {
 // const {data: session} = useSession();

  // function handleSignOut(){
  //   signOut()
  // }

  return (
    <div className="homecontainer">
      <Head>
        <title>Tribals</title>
      </Head> 
      
      <StoryTales />
      <Featured />
      <GalleryFeatured />
      <BlogDisplay />
      <FollowArtist />
    </div>
  )
}

export default Home
