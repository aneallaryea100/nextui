import React, {useState} from 'react'

function Expandable ({ children , maxChar=100 }) {
    const [isExpanded, setIsExpanded] = useState(true);
    
    if( children.length <= maxChar ){
        return (
            <p>{children}</p>
        )
    }

    const text = isExpanded ? children.substring(0, maxChar) : children;

        return ( 
            <>
             <span className='font-semibold'>{text} ...  <span className="underline cursor-pointer" onClick = {() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read more" : "Read less"}</span></span>
            </>
        )
}

export default Expandable;