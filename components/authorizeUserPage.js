import Link from "next/link"
import Image from "next/image"

function UserPage({ session, handleSignOut }) {
  return (
    <main className="userContainer">
      <h1>Authorize User page</h1> 
    

      <div>
        <Link href={'/profile'}>profile</Link>
      </div>
        
    </main>
  )
}

export default UserPage
