import React, {useState} from 'react'
import BillShipAddress from './billShipAddress'

function CreditCardCheckbox() {
    const [billingChecked, setBillingChecked] = useState(true);
    const [saveCardChecked, setSaveCardChecked] = useState(true);

    const handleBillingChange = () => {
        setBillingChecked(!billingChecked);
      };
    
      const handleSaveCardChange = () => {
        setSaveCardChecked(!saveCardChecked);
      };

  return (
    <div className='flex flex-col'>
        <div className='flex gap-3 items-center'>
            <input type='checkbox'
            className={`relative peer appearance-none w-4 h-4 border-2 border-dark-500
            mt-1 shrink-0 checked:bg-red-600 checked:border-0
            focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-black-100
            disabled:border-steel-400 disabled:bg-steel-400 ${billingChecked ? 'bg-black' : 'bg-white'}`}
            checked={billingChecked}
            onChange={handleBillingChange}
            />
            <label className='underline'>Billing and Shipping addresses are the same</label>
            <svg
                className="
                absolute 
                w-4 h-4 mt-1
                hidden peer-checked:block
                pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={billingChecked ? 'white' : ''}
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>

        <div className='flex gap-3 intems-center'>
            <input type='checkbox'
             className={`relative peer appearance-none w-4 h-4 border-2 border-dark-500
                 mt-1 shrink-0 checked:border-0
                 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-black-100
                 disabled:border-steel-400 disabled:bg-steel-400 ${saveCardChecked ? 'bg-black' : 'bg-white'}`}
                 checked={saveCardChecked}
                 onChange={handleSaveCardChange}
                 />
            <label className='underline'>Save credit card for later use.</label>
            <svg
                className="
                absolute 
                w-4 h-4 mt-1
                hidden peer-checked:block
                pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={saveCardChecked ? 'white' : ''}
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        {!billingChecked && <BillShipAddress />}
    </div>
  )
}

export default CreditCardCheckbox
