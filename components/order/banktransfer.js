import { AiOutlineSearch } from "react-icons/ai";

function Banktransfer() {

  const bankImages = [
      '../../images/boa.png',
      '../../images/chase.png',
      '../../images/nfc.png',
      '../../images/pnc.png',
      '../../images/usaa.png',
      '../../images/welssfargo.jpg',
  ];


  return (
    <div className='px-1'>
      <ul className='list-disc text-sm ml-3 text-gray-600 font-semibold'>
        <li>Search for your bank institution or select from the options below.</li>
        <li>If you can not find your bank, please check your spelling or choose another payment method.</li>
        <li>Bank transfer is powered by Stripe.</li>
        <li>Payment processing will take 4-7 business days once the gallery accepts the order.</li>
      </ul>
      <form className='mt-5 flex flex-col gap-5'>
        <div>
            <label className='mb-2'>Email</label>
            <input type='email' placeholder='Email address' id='email' className='w-full appearance-none border-b-2 border-gray-200 py-2 focus:outline-none leading-tight bg:white font-medium text-black'/>
        </div>

        <div>
            <label className='mb-2'>Full Name</label>
            <input type='name' placeholder='First & Last Name' id='name' className='w-full appearance-none border-b-2 border-gray-200 py-2 focus:outline-none leading-tight bg:white font-medium text-black'/>
        </div>

        <div>
            <label className='mb-2'>Bank account</label>
            <div className="flex items-center border-b-2 border-gray-200">
                <span><AiOutlineSearch /></span>
                <input type='search' placeholder='Search for your bank' id='bankname' className='w-full appearance-none py-2 focus:outline-none leading-tight bg:white font-medium text-black' />
            </div>
        </div>
      </form>

      <div className="bankcards mt-5 w-full grid grid-cols-3 gap-2 p-2">
        {/* <div className="w-100 h-60 bg-blue-800"></div> */}
        {bankImages.map((banks, index) => (
          <div key={index} className="h-36 relative  shadow-sm p-2 hover:bg-blend-lighten flex justify-center items-center cursor-pointer">
            <div className="w-1/2 h-2/5 md:w-2/3 ">
                <img src={banks} alt="gg"  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banktransfer
