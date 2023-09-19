import React from 'react'
import styles from "@styles/artCenterDetails.module.css"
import { AiOutlineBell } from "react-icons/ai";
import ArtCenterAboutTheWork from './artCenterAboutTheWork';
import ArtCenterOtherWorks from './artCenterOtherWorks';

function ArtCenterDetailedPage({ artDetails }) {
  return (
    <div className={styles.artcenterDetailWrapper}>
        <div className={styles.artcenterDetailContainer}>
            <div className={styles.artcenterDetailImageDivs}>
                <img src={artDetails.image} alt={artDetails.name} className={styles.artcenterDetailImage}/>
            </div>
            <div>
                <div className={styles.artcenterDetailTextsDivs}>
                <h1 className="font-bold text-2xl">{artDetails.name}</h1>
                <p className="text-2xl">{`"${artDetails.subdescribe}"`}</p>
                <span>{artDetails.arttype}</span>
                <span>{artDetails.artsize}</span>
                 {artDetails.uniquework ? <span>Unique Work</span> : ""}
                 {artDetails.authCertificate ? <span>Includes a Certificate of Authenticity</span> : ""}
                <span>${artDetails.price}</span>
                <div className={styles.artcenterDetailBtns}>
                    <button className={styles.artcenterDetailBtnsPurchase}>Purchase</button>
                    <button className={styles.artcenterDetailBtnsOffer}>Make an Offer</button>
                </div>
            </div>

            <div className="grid divide-y divide-neutral-100 max-w-xl mx-auto mt-5">
            <div className="py-2">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>Shipping and Taxes</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Taxes may apply at checkout. Learn more
                Ships from London, GB
                Shipping: £250 within United Kingdom [U.K.], £575 rest of world
				</p>
			</details>
		   </div>

        <div className="py-2">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>Be covered by the Tribals Guarantee when you checkout with Tribals</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Taxes may apply at checkout. Learn more
                    Ships from London, GB
                    Shipping: £250 within United Kingdom [U.K.], £575 rest of world
				</p>
			</details>
		</div>

        <div className='py-2'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='font-bold'>Hashimoto Contemporary</span>
                    <span className='font-thin text-xs'>New York, Los Angeles, +1 more</span>
                </div>
                <span className='px-4 py-1 rounded-full border-1 border-black'>Contact Gallery</span>
            </div>
        </div>

        <div className='py-2'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span>Get notifications for similar works</span>
                </div>
                <span className='flex justify-between items-center gap-2 px-4 py-1 rounded-full border-1 border-black'><AiOutlineBell /> Create Alert</span>
            </div>
        </div>

        <div className='py-2'>
            <p className='text-sm'>Want to sell a work by this artist? <span className='underline text-sm'>Sell with Tribals.</span></p>
        </div>
             </div>
            </div>
        </div>  
        <ArtCenterAboutTheWork aboutwork={artDetails}/> 
        <ArtCenterOtherWorks otherWorks={artDetails}/>  
        
    </div>
  )
}

export default ArtCenterDetailedPage
