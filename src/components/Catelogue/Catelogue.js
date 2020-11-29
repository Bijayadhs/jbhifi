import React from 'react'
import './Catelogue.css'

function Catelogue({catelogueImage}) {
    return (
        <div className="catelogue">
            {catelogueImage.map(c=><img key={c} src={`img/${c}.webp`} alt={c}/>)}
        </div>
    )
}

export default Catelogue
