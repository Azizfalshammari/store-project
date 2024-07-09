import React from 'react'

 function Nav() {
  return (
    <div className='flex pt-[10px] pb-[10px] pr-[10px] pl-[10px] justify-between'>
        <div className='mr-[20px]'>
            <div className="logo">Logo</div>
        </div>

        <ul className='flex'>
            {/* <li className='mr-[10px]'>Frist</li>
            <li className='mr-[10px]'>second</li> */}
            {/* <li className='mr-[10px]'>Logout</li> */}
        </ul>
    

        <div className="flex ">
        <div className="icons flex">
        <i class="fa-regular fa-user mr-[10px]"></i>
        <i class="fa-solid fa-bag-shopping  mr-[10px]"></i>
        <i class="far fa-heart  mr-[10px] "></i>
    
        </div>
        <div className='search flex ml-[10px]'>
        <input type="text" placeholder='search'/>
        <ul className='flex ml-[20px]'>
            <li className='mr-[10px]'>SignUp</li>
            <li>Login</li>
        </ul>
        </div>
         
        </div>
    </div>
  )
}


export default Nav