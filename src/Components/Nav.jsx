
import React from 'react';
import Logout from './Logout';
import logo from '../assets/logo.png'


function Nav({ isLoggedIn,  handleLogout }) {
    // { isLoggedIn, user, handleLogout }
    return (
        <div className='flex justify-items-center pt-[20px] pb-[20px] pr-[10px] pl-[10px] justify-between'>
            <div className=''>
                <div className="logo">
                    {/* <img className='w-[50px] h-[50px] mt-[-17px]' src={logo} alt="" /> */}
                    <img  className='w-[50px] h-[50px] mt-[-17px]' src="https://i.pinimg.com/564x/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg" alt="" />
                </div>
            </div>
            

            {!isLoggedIn ? (
                <ul className='flex justify-items-center'>
                       <div className="icons flex mr-[20px]">
                        <i class="fa-regular fa-user mr-[10px]"></i>
                        <i class="fa-solid fa-bag-shopping  mr-[10px]"></i>    
                        </div>
                        <div className="search mr-[20px]">
                            <input type="text" className='pl-[5px]' placeholder='Seacrch' />
                            
                        </div>
                        <div className='flex'>
                        <li className='mr-[10px]'>SignUp</li>
                        <li>Login</li>
                        </div>
                 
                </ul>
            ) : (
                <div className="flex">
                    <div className="icons flex">
                        <i className="fa-regular fa-user mr-[10px]"></i>
                        <i className="fa-solid fa-bag-shopping  mr-[10px]"></i>
                    </div>
                    <div className='search flex ml-[1px]'>
                        <input type="text" className='block mr-[40px]' placeholder='Search'/>
                        <ul className='flex ml-[20px]'>
                            <li className='mr-[10px]'>SignUp</li>
                            <li className='active'>Login</li>
                        </ul>
                    </div>
                    <Logout  handleLogout={handleLogout} />
                    {/* <Logout user={user} handleLogout={handleLogout} /> */}
                </div>
            )}
        </div>
    );
}



export default Nav