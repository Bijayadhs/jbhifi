import React from 'react'

function Banner({card}) {
    return (
        <div>
            <img src={`../../img/${card}.webp`} alt={card}/>
                    
                    <div className="lineOfCircle">
                       <div className="circle"></div>
                   </div>
        </div>
    )
}

export default Banner
