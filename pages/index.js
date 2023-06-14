import { Session } from "next-auth"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head";
import { getSession, useSession, signOut } from "next-auth/react";


function Home() {

  const {data: session} = useSession();

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
    <div className='guestContainer'>
      <h1>The guest page</h1>
      <Link href={'/login'}>Login</Link>
    </div>
  )
}

// Authorize User

function User ({ session, handleSignOut }) {
  return (
    <main className="userContainer">
      <h1>Authorize User page</h1> 
      <button onClick={handleSignOut}>Sign out</button>

      <div>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div>
        <Link href={'/profile'}>profile</Link>
      </div>
        
    </main>
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
