import { useState } from "react";
import { AiOutlineBank, AiFillCreditCard, AiFillSafetyCertificate } from "react-icons/ai";
import Creditcard from "./creditcard";
import Banktransfer from "./banktransfer";
import CreditCardCheckbox from "./creditCardCheckbox";
import BanktransferCheckBox from "./banktransferCheckBox";


function Payment({artworks}) {
  const [paymentMethod, setPaymentMethod] = useState("banktransfer");

  const handlePayChoice = (paychoice) => {
      setPaymentMethod(paychoice);
  }

  return (
    <div className='paymentContainer'>
      <span className='text-2xl font-semibold'>Payment method</span>
      <div className="flex flex-col gap-5 md:flex-row justify-between">
            <div className="wrapper mt-3 md:w-1/2">
                <div className='firstBlock divide-y divide-gray-200 border-1 border-gray-200 gap-1'>
                <div className='subblock flex gap-2 p-3'>
                  <div className='' id='paymenttype'>
                  <input type='radio' id='paymenttype' name='payment' className='w-5 h-5 p-5 border-3 text-red-500 focus:bg-black- focus:border-zinc-500' checked={paymentMethod === 'banktransfer'} onChange={() => handlePayChoice('banktransfer')}/>
                  </div>
                <div className="flex gap-2">
                  <span className="bank-house text-green-500"><AiOutlineBank /></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold p-0 -mt-1'>Bank transfer</span>
                    <span className='text-gray-600'>US bank account only</span>
                  </div>
                </div>
                </div>

                <div className='subblock-2 flex items-center gap-2 p-3'>
                  <div className='' id='paymenttype'>
                    <input type='radio' id='paymenttype' name='payment' className='w-5 h-5 p-5 border-3 text-red-500 focus:bg-black- focus:border-zinc-500' checked={paymentMethod === 'creditCard'} onChange={() => handlePayChoice('creditCard')}/>
                  </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="bank-house"><AiFillCreditCard /></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold p-0'>Credit card</span>
                  </div>
                </div>
                </div>
              </div>

              <div className="w-full mt-5">
                <h2 className='text-2xl font-semibold my-3'>Payment Details</h2>
                  {paymentMethod === 'banktransfer' && <Banktransfer />}
                  {paymentMethod === 'creditCard' && <Creditcard />}
              </div>

              <div className="mt-5">
                  {paymentMethod === 'banktransfer' && <BanktransferCheckBox />}
                  {paymentMethod === 'creditCard' && <CreditCardCheckbox />}
              </div>
          </div>

          <div className='flex flex-col gap-3 md:w-2/5 mt-3'>
                <div className='border-1 border-gray-200 flex flex-col divide-y divide-gray-200'>
                    <div className='flex flex-col p-3'>
                      <span className='w-16 h-16 bg-orange-300'></span>
                      <span className='font-semibold text-normal mt-2'>{artworks.name}</span>
                      <span className='italic text-gray-600'>Scratch & Riff: Hand-painted LPs, 2023</span>
                      <span className='bold text-gray-600'>Accra Central Gallery</span>
                      <span className='bold text-gray-600'>Greater Accra, AC, GH</span>
                      <span className='font-semibold text-normal'>{`Price US$${artworks.price}.00`}</span>
                    </div>
                    <div className='p-2 flex flex-col gap-1'>
                      <div className='flex justify-between text-gray-600 font-semibold mb-3'>
                        <span>Price</span>
                        <span>{`US$${artworks.price}.00`}</span>
                      </div>

                      <div className='flex justify-between text-gray-600 font-semibold'>
                        <span>Shipping</span>
                        <span>Calculated in next steps</span>
                      </div>

                      <div className='flex justify-between text-gray-600 font-semibold'>
                        <span>Tax*</span>
                        <span>Calculated in next steps</span>
                      </div>

                      <div className='flex justify-between font-semibold my-3'>
                        <span>Total</span>
                        <span>Waiting for final costs</span>
                      </div>

                      <div className='flex justify-between text-gray-600 font-semibold'>
                        <span>*Additional duties and taxes may apply at import.</span>
                      </div>
                    </div>
                </div>

                <div className='bg-gray-200 flex  py-4 px-2'>
                  <span className='p-1 text-base'><AiFillSafetyCertificate /></span>
                  <div className='flex flex-col'>
                    <span className='font-semibold'>Your purchase is protected.</span>
                    <span className='text-sm text-gray-900'>Learn more about <span className='underline'>Tribal’s buyer protection.</span></span>
                  </div>
                </div>

                <button className='bg-black hidden text-white py-2.5 rounded-full font-medium w-full mt-3 md:w-1/2'>Save and Continue</button>

          </div>
      </div>
      
      
    </div>
  )
}

export default Payment
