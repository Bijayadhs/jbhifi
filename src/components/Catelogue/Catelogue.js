import React from 'react'
import './Catelogue.css'

const catelogueImage = ['catelogue-1', 'catelogue-2', 'catelogue-3']

function Catelogue() {
    return (
        <div className="catelogue">
            {catelogueImage.map(c => <img key={c} src={`img/${c}.webp`} alt={c} />)}
        </div>
    )
}

export default Catelogue
