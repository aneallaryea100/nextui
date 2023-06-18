import Link from "next/link"
function GuestPage() {
  return (
   
      <div className='guestContainer'>
      <h1>The guest page</h1>
      <Link href={'/login'}>Login</Link>
    </div>
    
  )
}

export default GuestPage
