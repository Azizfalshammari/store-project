import React from 'react'

 function Nav() {
  return (
    <div>
        <div>
            <div className="logo">Logo</div>
        </div>

        <ul className='flex'>
            <li>Frist</li>
            <li>second</li>
            <li>Third</li>
        </ul>
        <div className="icons flex">
        <i class="fa-regular fa-user"></i>
        <i class="fa-solid fa-bag-shopping"></i>
        <i class="far fa-heart"></i>
        </div>

        <div className="search">
            <input type="text" placeholder='search'/>
        </div>
    </div>
  )
}


export default Nav