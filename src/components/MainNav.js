import React from 'react'

function MainNav() {
    return (
        <div class="main-nav">
            <div>logo</div>
            <div className="search">
                <input type="text" placeholder="Search products..."/>
            </div>
            <ul>
                <li>Gift Cards</li>
            </ul>
        </div>
    )
}

export default MainNav
