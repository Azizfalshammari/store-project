import React from 'react';

 function Logout({ handleLogout }) {
    // { user, handleLogout }
    return (
        <div className="navbar rounded bg-[#fff]">
            <div className="navbar-start">
          
               <div className="logo">
               {/* <img className='w-[50px] h-[50px] mt-[-17px]' src={logo} alt="" /> */}
               <img  className='w-[50px] h-[50px] mt-[-17px]' src="https://i.pinimg.com/564x/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg" alt="" />
           </div>
                <div className="ml-4">
                    {/* <h1 className="text-2xl font-semibold">{user.name}</h1> */}
                    {/* <p className="text-gray-600">{user.email}</p> */}
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={handleLogout} className="btnLogout ">Log Out</button>
            </div>
        </div>
    );
}

export default Logout