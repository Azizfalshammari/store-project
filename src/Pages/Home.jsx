import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
// import { useState , useEffect } from 'react';
import axios from "axios";
import img from "../assets/labtop.png";
import img2 from "../assets/game.png";
import img3 from "../assets/rotator_mobiles2024._SS435_QL85_-removebg-preview.png";
import img4 from "../assets/d-removebg-preview (4).png";
import Background from "../assets/back.png";
function Home() {
  const [element, setElemnt] = useState([]);

  useEffect(() => {
    axios
      .get("https://6685a3abb3f57b06dd4d6580.mockapi.io/products")
      .then((res) => {
        console.log(res.data);
        setElemnt(res.data);
      });
  }, []);

  return (
    <div>
      <Nav />
      {/* section one */}
      <div className="home  flex justify-items-center">
        {/* left */}
        <div className="text text-[#fff]">
          <h1 className="text-[35px] mb-[10px]">
            Explore the world of technology with us
          </h1>
          <p className="text-[14px]">
            Welcome to our electronics store, where we offer the latest
            technologies and electronic devices to meet all your technological
            needs. We take pride in providing a wide range of products including
            smartphones, laptops, tablets, and premium accessories that combine
            superior performance with stylish design.
          </p>
        </div>
        {/* right */}
        <div>
          {/* <img src="https://img.freepik.com/premium-photo/shopping-cat-with-bags-blue-background_832240-2310.jpg" alt="" /> */}
          {/* <img src="https://i.pinimg.com/564x/d1/23/22/d123223ffc95c08a76410dfa217d964c.jpg" alt="" /> */}
          <img src={Background} alt="" />
        </div>
      </div>

      {/* section Two */}
      <div />
      <div className="sectionTwo div flex mb-[40px] ">
        {/* left box */}
        <div className="bg-[#a4a6c3] mr-[10px]">
          <h4 className="Title bg-[#a4c3b2] text-[gray] w-[100px] mt-[5px] ml-[5px]">
            Smartphone
          </h4>
          <img
            className="h-[400px] w-[200px] mr-[10px] rounded-[6px] m-[auto] bg-[#a4c3b2]"
            src={img3}
            alt=""
          />
        </div>
        {/* right box */}
        <div>
          <div className="flex">
            <div className="flex-col mr-[10px] h-[200px] w-[400px] bg-[#a4c3b2]">
              <h4 className="Title">Gaming</h4>
              <div className="">
                <img
                  className="w-[250px] h-[180px]   mb-[10px] mt-[-5px] rounded-[6px] m-[auto]"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col mr-[10px] h-[200px] w-[390px] bg-[#a4c3b2]">
              <h4 className="Title">Laptop</h4>
              <div className="">
                <img
                  className="  w-[250px] h-[180px]  mb-[10px] rounded-[6px]"
                  src={img}
                  alt=""
                />
              </div>

              {/* <img  className='h-[200px] w-[400px] mb-[10px] rounded-[6px]' src={element.image} alt="" /> */}
            </div>
          </div>
          <div className="">
            <h4 className="Title">Smart TV</h4>
            <div className=" catogary h-[200px] w-[800px] bg-[#a4c3b2]">
              <h4 className="Title">Smart TV</h4>
              <img
                className="h-[200px] w-[800px] mb-[10px] rounded-[6px] mt-[-20px]"
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* section Three */}
      <div className="sectionThree">
        <div className="box flex p-[10px] bg-[#fff] ">
          {element.map((el) => {
            return (
              <div className="content" key={el.id}>
                <img src={el.image} alt="" />
                <p className="description">{el.description}</p>
                <p>{el.rating}</p>
                <div className="flex justify-between">
                  <p className="price text-[#777]">{el.price}$</p>
                  <div className="flex ">
                    {/* <i class="far fa-heart mr-[10px]"></i> */}
                    <i class="fas fa-shopping-bag"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
