import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
// import Logout from '../Components/Logout';
import axios from 'axios';
import img from '../assets/labtop.png'
import imgOrange from '../assets/orange.png'
import img2 from '../assets/game.png';
import img3 from '../assets/rotator_mobiles2024._SS435_QL85_-removebg-preview.png';
import img4 from '../assets/d-removebg-preview (4).png';
import Background from '../assets/back.png';
import game from '../assets/gameT.png';
import Features from '../components/Features';



function Home(props) {
    
    const {isLogin} = props;
    const [filteredProducts , setFilteredProducts] = useState([]);


    useEffect(()=> {
        axios.get('https://6685a3abb3f57b06dd4d6580.mockapi.io/products').then((res)=> {
            console.log(res.data)
            setFilteredProducts(res.data)
        })
    },[])

    const handleLogout =()=> {
      localStorage.removeItem('id');
    }

    return (
      <>
      <div>
     
        {/* <Nav isLoggedIn={isLogin} user={user} handleLogout={handleLogout} /> */}
        <Nav isLoggedIn={isLogin} handleLogout={handleLogout} />
        {/* <Logout/> */}
      


          <div className="w-full mx-auto bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg"> 
            <div className="w-full max-w-4xl mx-auto"> <div className="flex flex-col md:flex-row items-center"> 
            <div className="md:w-1/2 text-center md:text-left"> 
            <h1 className="text-3xl md:text-4xl font-bold text-[40px] text-white"> Your Electronics Destination: Shop the Latest and Greatest Gadgets </h1>
             <p className="mt-4 text-gray-200"> Stay Connected, Informed, and Entertained with Our Electronics Selection </p> 
            <button className="mt-6 bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300"> Get Started </button>
            </div> <div className="md:w-1/2 mt-10 ml-6 mb-0 md:mt-0 flex justify-center"> 
            <img src={imgOrange} alt="Headphones" className="w-full max-w-md object-contain" style={{ background: 'none' }} /> </div> </div> </div> </div>

          {/* section Two */}
          <div/>
          <div className="sectionTwo div flex mb-[40px] mt-[40px]">
                {/* left box */}
              <div className='#feb124 mr-[10px]  bg-[#fff3b0]'>
                <h4 className="Title  bg-[#fff3b0] text-[gray] w-[100px] mt-[5px] ml-[5px]">Smartphone</h4>
                <img className='h-[400px] w-[200px] mr-[10px] rounded-[6px] m-[auto]  bg-[#fff3b0]' src={img3} alt="" />
              </div>
            {/* right box */}
              <div>
                  <div className="flex">
                      <div className="flex-col mr-[10px] h-[200px] w-[400px]  bg-[#fff3b0]">
                      <h4 className="Title">Gaming</h4>
                      <div className=''>
                      <img className='w-[250px] h-[180px]   mb-[10px] mt-[-5px] rounded-[6px] m-[auto]' src={game} alt="" />
                      </div>

                      </div>
                      <div className='flex-col mr-[10px] h-[200px] w-[390px]  bg-[#fff3b0]'>
                      <h4 className="Title">Laptop</h4>
                      <div className=''>
                        <img className='  w-[250px] h-[180px]  mb-[10px] rounded-[6px]'  src={img} alt="" />
                        </div>
                      </div>
                  </div>
                  <div className=''>
                    <h4 className="Title">Smart TV</h4>
                    <div className=" catogary h-[200px] w-[800px] bg-[#fff3b0]">
                    <h4 className="Title">Smart TV</h4>
                    <img className='h-[200px] w-[800px] mb-[10px] rounded-[6px] mt-[-20px]' src={img4} alt="" />
                    </div>

                  </div>
              </div>
          </div>

      <div className='container mx-auto p-4'> 
        <div className='sea mb-4'>
            </div> 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredProducts.map(product => ( <div key={product.id} className='bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105'> <img src={product.image} className='w-full h-80 object-cover' /> <div className='p-4 flex flex-col items-start'> 
        <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
        <p className='text-gray-700 mb-2'>{product.price}$</p>
          {/* <Link to={`/details/${product.id}`}>  */}
          <button className='bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-black px-4 py-2 rounded-md hover:bg-yellow-600'> View Details </button> 
          {/* </Link>  */}
          </div> </div> ))} </div> </div>

            </div>
            <Features/>
            </>
          )
        }
  
  
  export default Home