import { Session } from "next-auth"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head";
import { getSession, useSession, signOut } from "next-auth/react";
import GuestPage from "@components/guest";
import UserPage from "@components/authorizeUserPage";
import Nav from "@components/nav";


function Home() {

  const {data: session} = useSession();
  console.log("checck the session", session)

  function handleSignOut(){
    signOut()
  }

  return (
    <div className="homecontainer">
      <Head>
        <title>Home Page</title>
      </Head> 
      
      {session ? User({ session, handleSignOut }) : Guest()}
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
    <UserPage session={session} handleSignOut={handleSignOut} />
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
