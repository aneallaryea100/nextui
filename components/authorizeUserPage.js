import Link from "next/link"


function UserPage({ session, handleSignOut }) {
  return (
    <main className="userContainer">
      <div className="redDiv">
        <div className="centerRedDiv">
        <h2>Untamed Ground</h2>
          <span className="textstory">They beckon you to set foot upon their hallowed grounds, to embrace the unknown and immerse yourself in their enigmatic ways.</span>
          <button className="findoutmore">Fnd out more</button>
        </div>
      </div>
      <div className="blueDiv">
      <div className="centerRedDiv">
          <h2>The eyes of truth</h2>
          <span className="textstory">To encounter the Shikara is to be swept away by a force greater than oneself, to surrender to the allure of a world beyond the ordinary.</span>
          <button className="findoutmore">Fnd out more</button>
        </div>
      </div> 
      <div className="greenDiv">
      <div className="centerRedDiv">
          <h2>Twin Souls</h2>
          <span className="textstory">For within the depths of their existence, a universe of wonders awaits, ready to ignite your soul with an untamed flame.</span>
          <button className="findoutmore">Fnd out more</button>
      </div>
      </div>
    </main>
  )
}

export default UserPage
