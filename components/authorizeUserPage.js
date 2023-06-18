import Link from "next/link"
import Image from "next/image"

function UserPage({ session, handleSignOut }) {
  return (
    <main className="userContainer">
      <div>red</div>
      <div>
        <Image
        src={'/images/grace_bol.jpg'}
        width={700}
        height={500}
        alt="grace-bol"
        />
      </div> 
    </main>
  )
}

export default UserPage
