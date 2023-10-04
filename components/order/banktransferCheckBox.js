import React, { useState } from "react"

function BanktransferCheckBox() {
  const [saveCardDetail, setSaveCardDetail] = useState(false)

  const handleSaveCardDetail = () => {
    setSaveCardDetail(!saveCardDetail);
  }

  return (
    <div className="flex gap-2">
      <input type='checkbox' className={`relative peer appearance-none w-4 h-4 border-2 border-dark-500
                 mt-1 shrink-0 checked:border-0
                 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-black-100
                 disabled:border-steel-400 disabled:bg-steel-400 ${ saveCardDetail ? 'bg-dark' : 'bg-white'}`} 
                 id="checky"
                 onChange={handleSaveCardDetail}/>
      <label 
      className="underline">
        Save bank account for later use
        </label>
        <svg
                className="
                absolute 
                w-4 h-4 mt-1
                hidden peer-checked:block
                pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={ saveCardDetail ? 'white' : ''}
                stroke-width="4"
                stroke-linecap="round"
                strokelinejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
    </div>
  )
}

export default BanktransferCheckBox
