import React from 'react'
import Nav from '../Components/Nav'

function Home() {
    return (
      <div>
        <Nav/>
          {/* section one */}
          <div className='home flex justify-items-center'>
              {/* left */}
              <div className="text text-[#fff]">
                  <h1>Wellocme</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporibus aperiam obcaecati qui rerum incidunt, saepe, dignissimos laudantium explicabo ea perspiciatis, aut sunt odit quos ab consectetur maxime molestiae optio?</p>
              </div>
              {/* right */}
              <div>
                  <img src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" alt="" />
                  </div>
          </div>
  
          {/* section Two */}
          <div className="sectionTwo div flex">
                {/* left box */}
              <div>
                <h4 className="Title bg-[#fff] text-[gray] w-[100px] mt-[5px] ml-[5px]">tilte</h4>
                <img className='h-[400px] w-[200px] mr-[10px] rounded-[6px]' src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt="" />
              </div>
            {/* right box */}
              <div>
                  <div className="flex">
                      <div className="  mr-[10px]">
                      <h4 className="Title">title</h4>
                      <img className='h-[200px] w-[390px] mb-[10px] rounded-[6px]' src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" alt="" />
                      </div>
                      <div>
                      <h4 className="Title">Title</h4>
                      <img className='h-[200px] w-[400px] mb-[10px] rounded-[6px]'  src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" alt="" />
                      </div>
                  </div>
                  <div>
                    <h4 className="Title">Title</h4>
                    <div className="">
                    <img className='h-[190px] w-[800px] mb-[10px] rounded-[6px]' src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" alt="" />
                    </div>

                      {/* <img className='h-[190px] w-[800px] mb-[10px] rounded-[6px]' src="https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg" alt="" /> */}
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  
  export default Home