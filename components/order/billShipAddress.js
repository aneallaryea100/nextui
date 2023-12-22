import React from 'react'

function BillShipAddress() {
  return (
    <div>
      <form className='mt-5 flex flex-col gap-5'>
        <div className='flex flex-col gap-4 border-b-2 py-2'>
            <span className='text-sm'>Name on Card</span>
            <input type='text'
            className='appearance-none focus:outline-none leading-tight bg:white'
            placeholder='Full Name'/>
        </div>

        <div className='flex flex-col gap-4 border-b-2 py-2'>
            <span className='text-sm'>Country</span>
            <input type='text'
            className='appearance-none focus:outline-none leading-tight bg:white'
            placeholder='Full Name'/>
        </div>

        <div className='flex flex-col gap-4 border-b-2 py-2'>
            <span className='text-sm'>Address Line 1</span>
            <input type='text'
            className='appearance-none focus:outline-none leading-tight bg:white'
            placeholder='Street Address'/>
        </div>

        <div className='flex flex-col gap-4 border-b-2 py-2'>
            <span className='text-sm'>Address Line 2 (Optional)</span>
            <input type='text'
            className='appearance-none focus:outline-none leading-tight bg:white'
            placeholder='Apt, floor, suite etc.'/>
        </div>

        <div className='flex flex-col gap-4 border-b-2 py-2'>
            <span className='text-sm'>City</span>
            <input type='text'
            className='appearance-none focus:outline-none leading-tight bg:white'
            placeholder='City'/>
        </div>

        <div className='statePostalDiv flex flex-col gap-5 w-full md:flex md:flex-row'>
            <div className='flex flex-col gap-4 border-b-2 py-2 md:w-full'>
              <span className='text-sm'>state, province, or region</span>
              <input type='text'
              className='appearance-none focus:outline-none leading-tight bg:white'
              placeholder='State, Province, Region'/>
          </div> 

          <div className='flex flex-col gap-4 border-b-2 py-2 md:w-full'>
              <span className='text-sm'>Postal Code</span>
              <input type='text'
              className='appearance-none focus:outline-none leading-tight bg:white'
              placeholder='Zip/postal code'/>
          </div>
        </div>

       
      </form>
    </div>
  )
}

export default BillShipAddress
