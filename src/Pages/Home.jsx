

import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Foter";
import img from "../assets/labtop.png";
import imgOrange from "../assets/orange.png";
import img3 from "../assets/rotator_mobiles2024._SS435_QL85_-removebg-preview.png";
import img4 from "../assets/d-removebg-preview (4).png";
import game from "../assets/gameT.png";
import Features from "../Components/Features";
import AdCarousel from "../Components/AdCarousel";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Futers/LogInSlice";

function Home(props) {
  const { isLogin } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const User = localStorage.getItem("username");
  const isLoggedInn = localStorage.getItem("isLoggedIn");
  const nav = useNavigate();
  // { user, handleLogout }

  const handleLogout1 = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userid");
    nav("/login");
  };
  useEffect(() => {
    axios
      .get("https://6685a3abb3f57b06dd4d6580.mockapi.io/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setFilteredProducts(res.data);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const handleLogout = () => {
    localStorage.removeItem("id");
  };

  const handleCategoryClick = (category) => {
    axios
      .get(
        `https://6685a3abb3f57b06dd4d6580.mockapi.io/products?category=${category}`
      )
      .then((res) => {
        setFilteredProducts(res.data);
      });
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <div className="py-4 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <h1 className="font-extrabold text-blue-900">
                  YAFHElectronic.
                </h1>
              </Link>
              <div className="relative flex items-center">
                <svg
                  className="absolute left-3 w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
                  />
                </svg>
                <input
                  type="text"
                  className="pl-10 pr-3 py-2 rounded-md bg-gradient-to-r from-blue-900 to-blue-500 text-white focus:outline-none"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>{" "}
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              {!isLoggedInn ? (
                <ul className="flex items-center space-x-4">
                  <Link to="/cart">
                    <svg
                      className="w-12 h-12 text-blue-900"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10 20a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1.618-16.968a.78.78 0 0 0-.618-.312H6.472l-.39-2.466A2 2 0 0 0 4.112 0H2a1 1 0 0 0 0 2h2.112l.39 2.467 1.82 11.536a3 3 0 0 0 2.972 2.528h7.084a3 3 0 0 0 2.972-2.528L22.732 6a.993.993 0 0 0-.114-.968zM17.448 14a1 1 0 0 1-.992.857H8.584a1 1 0 0 1-.992-.857L6.8 8h12.4z" />
                    </svg>
                  </Link>
                  <Link to="/login">
                    <li className="text-blue-900 rounded-xl border-2 border-blue-900 px-3 py-2 cursor-pointer">
                      Login
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className="text-white cursor-pointer rounded-xl bg-gradient-to-r from-blue-900 to-blue-500 px-3 py-2">
                      Sign Up
                    </li>
                  </Link>
                </ul>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/cart">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10 20a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10-3a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1.618-16.968a.78.78 0 0 0-.618-.312H6.472l-.39-2.466A2 2 0 0 0 4.112 0H2a1 1 0 0 0 0 2h2.112l.39 2.467 1.82 11.536a3 3 0 0 0 2.972 2.528h7.084a3 3 0 0 0 2.972-2.528L22.732 6a.993.993 0 0 0-.114-.968zM17.448 14a1 1 0 0 1-.992.857H8.584a1 1 0 0 1-.992-.857L6.8 8h12.4z" />
                    </svg>
                  </Link>
                  <div className="text-black cursor-pointer">
                    Welcome {User}
                  </div>
                  <Link to="/login">
                    <div className="navbar rounded bg-[#fff]">
                      <div className="navbar-start">
                        <div className="logo">
                          <img
                            className="w-[50px] h-[50px] mt-[-17px]"
                            src="https://i.pinimg.com/564x/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">= </div>
                      </div>
                      <div className="navbar-end">
                        <button onClick={handleLogout1} className="btnLogout ">
                          Log Out
                        </button>
                      </div>
                    </div>
                  </Link>

                  {/* <Logout > */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}

        <div className="w-full mx-auto bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-[40px] text-white">
                  Your Electronics Destination: Shop the Latest and Greatest
                  Gadgets
                </h1>
                <p className="mt-4 text-gray-200">
                  Stay Connected, Informed, and Entertained with Our Electronics
                  Selection
                </p>
                <button className="mt-6 bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2 mt-10 ml-6 mb-0 md:mt-0 flex justify-center">
                <img
                  src={imgOrange}
                  alt="Headphones"
                  className="w-full max-w-md object-contain"
                  style={{ background: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <AdCarousel />
        {/* Section Two */}
        <div className="sectionTwo div flex mb-[40px] bg-gray-100">
          {/* Left Box */}
          <div
            className="#feb124 h-[440px] mr-[10px] mt-6  bg-[#FCA721] cursor-pointer"
            onClick={() => handleCategoryClick("Electronics")}
          >
            <h4 className="Title bg-[#FCA721]  text-[gray] w-[100px] mt-[5px] ml-[5px]">
              Smartphone
            </h4>
            <img
              className="h-[400px] w-[200px] mr-[10px] rounded-[6px] m-[auto]"
              src={img3}
              alt=""
            />
          </div>
          {/* Right Box */}
          <div>
            <div className="flex">
              <div
                className="flex-col mr-[10px] mt-6 h-[200px] w-[400px]  bg-[#F26D0E] cursor-pointer"
                onClick={() => handleCategoryClick("Gaming")}
              >
                <h4 className="Title">Gaming</h4>
                <div className="">
                  <img
                    className="w-[250px] h-[180px] mb-[10px] mt-[-5px] rounded-[6px] m-[auto]"
                    src={game}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="flex-col mr-[15px] h-[200px] mt-6 w-[390px]  bg-[#FCA721] cursor-pointer"
                onClick={() => handleCategoryClick("Wearables")}
              >
                <h4 className="Title">Laptop</h4>
                <div className="">
                  <img
                    className=" w-[250px] h-[180px]  mb-[10px] ml-[3vw] rounded-[6px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div
                className=" catogary h-[230px] w-[800px] bg-[#F26D0E] cursor-pointer"
                onClick={() => handleCategoryClick("Cameras")}
              >
                <h4 className="Title">Smart TV</h4>
                <img
                  className="h-[200px] w-[800px] mb-[10px] rounded-[6px] mt-[-20px]"
                  src={img4}
                  alt=""
                />
              </div>
              <br />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto mt-1 p-8">
          <div className="sea mb-3"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <img src={product.image} className="w-full h-80 object-cover" />
                <div className="p-4 flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-2">{product.price}$</p>
                  <Link to={`/details/${product.id}`}>
                    <button className="bg-gradient-to-r from-[#FFB526] to-[#ED5004] text-black px-4 py-2 rounded-md hover:bg-yellow-600">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </>
  );
}

            <Features/>
            </>
          )
        }
  
  
  export default Home
