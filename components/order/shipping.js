import { useEffect } from 'react';
import Link from 'next/link'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useSession } from 'next-auth/react';

function Shipping({artworks, session}) {

  useEffect(() => {
    console.log('session in shipping', session)
    console.log('session name', session?.user?.name)
  });
  const price = parseFloat(artworks.price);
  const formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  return (
    <div className='p-2'>
      <span className='font-bold text-3xl'>Delivery Address</span>
      <div className='flex flex-col gap-4 md:flex-row justify-between'>
            <div className='w-full flex flex-col gap-3 md:w-1/2'>
              <div className='flex justify-between border-1 border-gray-200 p-3 mt-3'>
                      <div className='flex flex-col w-1/2 gap-2'>
                          <span className='block font-semibold'>{session?.user?.name}</span>
                          <span className='block line-clamp-4 md:w-3/5'>1234 Elm Street Springfield, Teshie 12345 Ghana</span>
                      </div>
                      <div>
                          <span className='text-underline text-blue-600 text-lg'>Edit</span>
                      </div>
              </div>

              <Link href="#" className='text-zinc-500 font-semibold underline underline-offset-2'>Add a new Address</Link>
              <button className='hidden bg-black text-white py-2.5 rounded-full font-medium w-full mt-3 md:w-1/2 md:block'>Save and Continue</button>
            </div>

            <div className='flex flex-col gap-3 md:w-2/5'>
                <div className='border-1 border-gray-200 flex flex-col divide-y divide-gray-200'>
                    <div className='flex flex-col p-3'>
                      <span className='w-16 h-16 bg-gray-300 p-1'>
                        <img 
                        src={`${artworks.image}`}
                        alt={artworks.name}
                        className='w-16 h-14'
                        />
                      </span>
                      <span className='font-semibold text-normal mt-2'>{artworks.name}</span>
                      <span className='italic text-gray-600'>Scratch & Riff: Hand-painted LPs, 2023</span>
                      <span className='bold text-gray-600'>Accra Central Gallery</span>
                      <span className='bold text-gray-600'>Greater Accra, AC, GH</span>
                      <span className='font-semibold text-normal'>{`Price US${formattedPrice}`}</span>
                    </div>
                    <div className='p-2 flex flex-col gap-1'>
                      <div className='flex justify-between text-gray-600 font-semibold mb-3'>
                        <span>Price</span>
                        <span>{`US${formattedPrice}`}</span>
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

                <button className='bg-black text-white py-2.5 rounded-full font-medium w-full mt-3 md:w-1/2 md:hidden'>Save and Continue</button>

            </div>

          
      </div>
      
      
    </div>
  )
}

export default Shipping
