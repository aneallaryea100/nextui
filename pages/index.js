import { Session } from "next-auth"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head";
import { getSession, useSession, signOut } from "next-auth/react";
import GuestPage from "@components/guest";
import UserPage from "@components/authorizeUserPage";
import Featured from "@components/featuredArtist";
import GalleryFeatured from "@components/galleryExhibit";
import FollowArtist from "@components/followArtist";
import BlogDisplay from "@components/blogDisplay";
import MeetAdvisor from "@components/meetAdvisor";


function Home() {

  const {data: session} = useSession();

  function handleSignOut(){
    signOut()
  }

  return (
    <div className="homecontainer">
      <Head>
        <title>Tribals</title>
      </Head> 
      
      {session ? User({ session, handleSignOut }) : Guest()}
      <Featured />
      <GalleryFeatured />
      <BlogDisplay />
      <FollowArtist />
      <MeetAdvisor />
    </div>
  )
}

//Guest

function Guest () {
  return (
    <GuestPage />
  )
}

// Authorize User

function User ({ session, handleSignOut }) {
  return (
    <>
      <UserPage session={session} handleSignOut={handleSignOut} />
    </>
    
  )
}

export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default Home
