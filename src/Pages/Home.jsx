import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
// import { useState , useEffect } from 'react';
import axios from "axios";
import img from "../assets/labtop.png";
import img2 from "../assets/game.png";
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
      <div className="home flex justify-items-center">
        {/* left */}
        <div className="text text-[#fff]">
          <h1 className="text-[40px] mb-[10px]">Wellocme</h1>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            temporibus aperiam obcaecati qui rerum incidunt, saepe, dignissimos
            laudantium explicabo ea perspiciatis, aut sunt odit quos ab
            consectetur maxime molestiae optio?
          </p>
        </div>
        {/* right */}
        <div>
          <img
            src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg"
            alt=""
          />
        </div>
      </div>

      {/* section Two */}
      <div />
      <div className="sectionTwo div flex mb-[40px]">
        {/* left box */}
        <div className="bg-[#eee] mr-[10px]">
          <h4 className="Title bg-[#fff] text-[gray] w-[100px] mt-[5px] ml-[5px]">
            Electronics
          </h4>
          <img
            className="h-[400px] w-[180px] mr-[10px] rounded-[6px] m-[auto]"
            src="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX679_.jpg"
            alt=""
          />
        </div>
        {/* right box */}
        <div>
          <div className="flex">
            <div className="flex-col mr-[10px] h-[200px] w-[390px] bg-[#eee]">
              <h4 className="Title">title</h4>
              <div className="">
                <img
                  className="w-[250px] h-[180px]   mb-[10px] mt-[-10px] rounded-[6px] m-[auto]"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col mr-[10px] h-[200px] w-[390px] bg-[#eee]">
              <h4 className="Title">For Her</h4>
              <div className="">
                <img
                  className=" w-[250px] h-[180px]  mb-[10px] rounded-[6px]"
                  src={img}
                  alt=""
                />
              </div>

              {/* <img  className='h-[200px] w-[400px] mb-[10px] rounded-[6px]' src={element.image} alt="" /> */}
            </div>
          </div>
          <div>
            <h4 className="Title">Title</h4>
            <div className="">
              <img
                className="h-[190px] w-[800px] mb-[10px] rounded-[6px]"
                src="https://img.paisawapas.com/ovz3vew9pw/2021/10/06223906/amazon-trending.jpg"
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
                    <i className="fas fa-shopping-bag"></i>
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
