import Link from "next/link"


function UserPage({ session, handleSignOut }) {
  return (
    <main className="userContainer">
      <div className="redDiv">
        <div className="centerRedDiv">
          <span className="textstory">The Trees on the edge</span>
          <button className="findoutmore">Fnd out more</button>
        </div>
      </div>
      <div className="blueDiv">
      <div className="centerRedDiv">
          <span className="textstory">The Trees on the edge</span>
          <button className="findoutmore">Fnd out more</button>
        </div>
      </div> 
      <div className="greenDiv">
      <div className="centerRedDiv">
          <span className="textstory">The Trees on the edge</span>
          <button className="findoutmore">Fnd out more</button>
      </div>
      </div>
    </main>
  )
}

export default UserPage
