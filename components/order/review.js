// import React from 'react';

// function Review({artworks}) {
//   // Convert artworks.price to a number
//   const price = parseFloat(artworks.price);

//   // Calculate shipping cost (5% of price) and tax (4% of price)
//   const shippingCost = price * 0.05;
//   const tax = price * 0.04;

//   // Calculate total (price + shipping cost + tax)
//   const total = price + shippingCost + tax;

//   return (
//     <div className=''>
//       <span className='font-bold block text-4xl mb-3'>Review Order</span>
//       <div className='flex flex-col gap-3 md:flex-row justify-between'>
//         <div className='w-full h-96 bg-gray-200 p-1'>
//           <img src={artworks.image}
//             alt={artworks.name}
//             className="w-full h-full" />
//         </div>
//         <div className='w-full bg-gray-100 divide-y px-2 py-2'>
//           <span className='block font-bold text-2xl'>Summary</span>
//           <div className='px-0'>
//             <div className='flex justify-between'>
//               <span className='block'>Art Name:</span>
//               <span className='block font-semibold'>{artworks.name}</span>
//             </div>
//             <div className='flex justify-between'>
//               <span className='block'>Price:</span>
//               <span className='block font-semibold'>US$ {price.toFixed(2)}</span>
//             </div>
//           </div>
//           <div className='billShipContainer'>
//             <span className='block font-semibold'>Billing & Shipping</span>
//             <div className='shipBillInfo'>
//               <span className='block font-medium'>1234 Elm Street Springfield, Teshie 12345 Ghana</span>
//             </div>
//           </div>
//           <div className='paymentMethodContainer'>
//             <span className='block font-semibold'>Payment Method</span>
//             <div className='paymentInfo flex justify-between items-center'>
//               <span className='block font-medium'>Credit Card</span>
//               <span className='block font-semibold'>**********97</span>
//             </div>
//           </div>
//           <div className='shippingCostContainer'>
//             <span className='block font-semibold'>Shipping</span>
//             <div className='paymentInfo flex justify-between items-center'>
//               <span className='block font-medium'>Shipping Cost</span>
//               <span className='block font-semibold'>US$ {shippingCost.toFixed(2)}</span>
//             </div>
//             <div className='paymentInfo flex justify-between items-center'>
//               <span className='block font-medium'>Tax</span>
//               <span className='block font-semibold'>US$ {tax.toFixed(2)}</span>
//             </div>
//           </div>
//           <div className='totalCost'>
//             <div className='flex justify-between items-center'>
//               <span className='block font-bold'>Total</span>
//               <span className='block font-semibold'>US$ {total.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//         <div className='w-full h-10 bg-blue-500 md:hidden'></div>
//       </div>
//     </div>
//   );
// }

// export default Review;


import React from 'react';

function Review({artworks}) {
  // Convert artworks.price to a number
  const price = parseFloat(artworks.price);

  // Calculate shipping cost (5% of price) and tax (4% of price)
  const shippingCost = price * 0.05;
  const tax = price * 0.04;

  // Calculate total (price + shipping cost + tax)
  const total = price + shippingCost + tax;

  // Format numbers with commas for thousands and two decimal places
  const formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  const formattedShippingCost = shippingCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  const formattedTax = tax.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  const formattedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

  return (
    <div className=''>
      <span className='font-bold block text-4xl mb-3'>Review Order</span>
      <div className='flex flex-col gap-3 md:flex-row justify-between'>
        <div className='w-full h-96 bg-gray-200 p-1'>
          <img src={artworks.image}
            alt={artworks.name}
            className="w-full h-full" />
        </div>
        <div className='w-full'>
          <div className='w-full bg-gray-100 divide-y px-2'>
            <span className='block font-bold text-2xl'>Summary</span>
            <div className='px-0'>
              <div className='flex justify-between'>
                <span className='block'>Art Name:</span>
                <span className='block font-semibold'>{artworks.name}</span>
              </div>
              <div className='flex justify-between'>
                <span className='block'>Price:</span>
                <span className='block font-semibold'>{formattedPrice}</span>
              </div>
            </div>
            <div className='billShipContainer'>
              <span className='block font-semibold'>Billing & Shipping</span>
              <div className='shipBillInfo'>
                <span className='block font-medium'>1234 Elm Street Springfield, Teshie 12345 Ghana</span>
              </div>
            </div>
            <div className='paymentMethodContainer'>
              <span className='block font-semibold'>Payment Method</span>
              <div className='paymentInfo flex justify-between items-center'>
                <span className='block font-medium'>Credit Card</span>
                <span className='block font-semibold'>**********97</span>
              </div>
            </div>
            <div className='shippingCostContainer'>
              <span className='block font-semibold'>Shipping</span>
              <div className='paymentInfo flex justify-between items-center'>
                <span className='block font-medium'>Shipping Cost</span>
                <span className='block font-semibold'>{formattedShippingCost}</span>
              </div>
              <div className='paymentInfo flex justify-between items-center'>
                <span className='block font-medium'>Tax</span>
                <span className='block font-semibold'>{formattedTax}</span>
              </div>
            </div>
            <div className='totalCost'>
              <div className='flex justify-between items-center'>
                <span className='block font-bold'>Total</span>
                <span className='block font-semibold'>{formattedTotal}</span>
              </div>
            </div>
          </div>
          <div className='hidden w-full h-10 bg-black md:block md:flex items-center justify-center text-white text-l font-semibold'>
            <button type='button'>Confirm payment</button>
          </div>
        </div>
        
        <div className='w-full h-10 flex items-center justify-center text-white text-l font-semibold bg-black md:hidden'>
          <button type='button'>Confirm payment</button>
        </div>
      </div>
    </div>
  );
}

export default Review;

