import { AiOutlineCreditCard } from "react-icons/ai";
import { useState } from "react";

function Creditcard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.replace(/(\d{4})(?=\d)/g, '$1-'); // Add hyphen after every 4 digits
    setCardNumber(value.slice(0, 19)); // Limit to 19 characters (16 digits + 3 hyphens)
  };

  const handleExpirationChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.slice(0, 4); // Limit to 4 characters (MMYY format)
    value = value.replace(/(\d{2})(?=\d)/g, '$1/'); // Add slash after first 2 digits
    setExpiration(value);
  };

  const handleCvcChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.slice(0, 4); // Limit to 4 characters (CVC)
    setCvc(value);
  };
  return (
    <div className='creditCardWrapper'>
      <span className='text-sm'>Credit card*</span>
      <div className='flex w-full'>
        <div className="flex gap-3 w-full border-b-2 border-gray-800 py-2 md:flex-row">
          <span className="flex items-center gap-2 w-full">
            <AiOutlineCreditCard />
            <input
             type='text'placeholder='card number'
              maxLength={19} value={cardNumber}
              onChange={handleCardNumberChange}
              className="appearance-none focus:outline-none w-full"/>
          </span>
          <span className="flex gap-0">
              <input
            type="text"
            placeholder="MM/YY"
            maxLength={5}
            id="expiration"
            value={expiration}
            onChange={handleExpirationChange}
            className="appearance-none focus:outline-none w-20"/>

            <input
            type="text" 
            placeholder="CVV" 
            maxLength={4} 
            id="cvc"
            value={cvc}
            onChange={handleCvcChange}
            className="appearance-none focus:outline-none w-20"/>
          </span>
         
        </div>  
      </div>
    </div>
  )
}

export default Creditcard
