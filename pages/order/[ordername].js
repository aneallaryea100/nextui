import { useState } from "react"
import Link from "next/link"
import Shipping from "@components/order/shipping";
import Payment from "@components/order/payment";
import Review from "@components/order/review";

function OrderDetails() {
    const [activeTab, setActiveTab] = useState("shipping");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div className='z-10 absolute top-0 w-full py-4 px-5'>
        <div className='mt-5'>
            <div className="logo">
                <Link href='/'>
                <span className='text-3xl font-bold bg-green-900 border-4 p-1 m-2 text-zinc-500 bg-white'>Tribals</span>
            </Link>
            </div>
            
            
            <div className="mt-5 px-1  md:w-full">
                <div className="flex justify-between items-center border-b-2 border-gray-200 w-full gap-5 ">
                    <div className={`flex justify-between w-1/3 px-3 py-4 -mb-0.5 ${activeTab === 'shipping' ? 'border-b-2 ': ''}`}  onClick={() => handleTabClick('shipping')}>
                        <span className={`font-semibold ${activeTab === 'shipping' ? 'text-zinc-500': 'text-gray-400'}`}>Shipping</span>
                        <span>{">"}</span>
                    </div>
                    <div className={`flex justify-between w-1/3 px-3 py-4 -mb-0.5 ${activeTab === 'payment' ? 'border-b-2 ': ''}`}  onClick={() => handleTabClick('payment')}>
                        <span className={`font-semibold ${activeTab === 'payment' ? 'text-zinc-500': 'text-gray-400'}`}>Payment</span>
                        <span>{">"}</span>
                    </div>
                    <div className={`flex justify-between w-1/3 px-3 py-4 -mb-0.5 ${activeTab === 'review' ? 'border-b-2 ': ''}`}  onClick={() => handleTabClick('review')}>
                        <span className={`font-semibold ${activeTab === 'review' ? 'text-zinc-500': 'text-gray-400'}`}>Review</span>
                        <span>{">"}</span>
                    </div>
                    
                </div>
            </div>

            <div className="mt-5">
                {activeTab === 'shipping' && <div><Shipping /></div>}
                {activeTab === 'payment' && <div><Payment /></div>}
                {activeTab === 'review' && <div><Review /></div>}
            </div>
        </div>
    </div>
  )
}

export default OrderDetails
