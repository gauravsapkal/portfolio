import React from "react";
import "./Projects.css";

import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BsBootstrap, BsGithub, BsWordpress } from "react-icons/bs";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNetlify,
  SiRedux,
  SiChakraui,
  SiHeroku,
  SiJsonwebtokens,
} from "react-icons/si";
import { DiCss3, DiCss3Full, DiGit, DiReact } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const Projects = () => {


  return (
    <>
      <div className="Projectsection">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">




          <div className="projects_container" data-aos="fade-right">
            <div className="project">

              <div className="project_videocontainer" >

                <div >

                  <Carousel className="project_videocontainer" autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} >

                    <div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/landing.png"
                      />

                    </div>

                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/footer.png"

                      />

                    </div>



                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/dropdown.png"

                      />

                    </div>




                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/popup.png"

                      />

                    </div>




                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/register.png"

                      />

                    </div>




                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/login.png"

                      />

                    </div>





                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/productpage.png"

                      />

                    </div>





                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/productpagefilter.png"

                      />

                    </div>





                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/singlepage.png"

                      />

                    </div>




                    <div>
                      <img src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/payment.png" alt="" />
                    </div>



                    <div>
                      <img src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/cartbar.png" alt="" />
                    </div>


                    <div>
                      <img src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/cart.png" alt="" />
                    </div>


                    <div>
                      <img src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/payment.png" alt="" />
                    </div>


                    <div>

                      <img src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/success.png" alt="" />
                    </div>

                    <div>

                      <img src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/zappos/history.png" alt="" />
                    </div>


                  </Carousel>

                </div>

              </div>


              <div className="project_information">
                <h2>Zappos.com</h2>
                <p>
                  Zappos.com is an American online shoe and clothing retailer based in Las Vegas, Nevada, United States.
                  We use React for development of this website and also, we use Chakra UI, Redux, JSON Server.


                </p>

                <div className="tec" >
                  <FaReact />
                  <SiRedux />
                  <SiChakraui />
                  {/* <BsGithub/> */}
                  <BsBootstrap />
                  {/* <SiMaterialui/> */}

                  <SiHeroku />

                  <SiNetlify />
                </div>

                <div>
                  <a
                    href="https://zappos-official.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gauravsapkal/zappos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>







          <div className="projects_container" data-aos="fade-right">
            <div className="project">

              <div className="project_videocontainer" >

                <div >

                  <Carousel className="project_videocontainer" autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} >

                    <div>
                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/overstock/landing.png"
                        alt="overstock"
                      />
                    </div>

                    <div>
                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/overstock/products.png"
                        alt="overstock"
                      />
                    </div>

                    <div>
                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/overstock/filters.png"
                        alt="overstock"
                      />
                    </div>

                    <div>
                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/overstock/single%20product.png"
                        alt="overstock"
                      />
                    </div>

                    <div>
                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/overstock/cart.png"
                        alt="overstock"
                      />
                    </div>

                    <div>
                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/overstock/payment.png"
                        alt="overstock"
                      />
                    </div>

                  </Carousel>

                </div>

              </div>





              <div className="project_information">
                <h2>Overstock.com</h2>
                <p>
                Overstock.com Inc. Company is an e-commerce retailer offering customers furniture, home decor, and dining items.
                  This project has all functionalities as of original site with backend deployed on render.

                </p>
                <div className="tec" >
                  <DiReact/>
                  <SiRedux/>
                  <SiChakraui/>
                  <SiNodedotjs/>
                  <SiMongodb/>
                  <SiExpress/>
                  <SiJsonwebtokens/>
                  
                </div>
                <div>
                  <a
                    href="https://overstock-mern.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gauravsapkal/overstock-MERN-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>







          <div className="projects_container" data-aos="fade-right">
            <div className="project">

              <div className="project_videocontainer" >

                <div >

                  <Carousel className="project_videocontainer" autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} >

                    <div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/landing.png"

                      />

                    </div>

                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/register.png"

                      />

                    </div>



                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/registerdetailed.png"

                      />

                    </div>




                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/social.png"

                      />

                    </div>




                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/comments.png"

                      />

                    </div>





                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/foodpage.png"

                      />

                    </div>
                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/recipepage.png"

                      />

                    </div>
                    <div >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/fatsecret/single.png"

                      />

                    </div>



                  </Carousel>







                </div>

              </div>


              <div className="project_information">
                <h2>FatSecret</h2>
                <p>
                  FatSecret is a new online diet, nutrition and weight loss community that harnesses contributions of members.
                  We designed and developed this website clone using HTML, CSS, JavaScript, JSON Server, Heroku and other tools and technologies.
                </p>

                <div className="tec" >
                  {/* <FaReact /> */}
                  {/* <SiRedux /> */}
                  {/* <SiChakraui /> */}
                  <SiHtml5 />
                  <DiCss3Full />
                  <SiJavascript />
                  <BsGithub />
                  <SiHeroku />
                  <SiNetlify />
                </div>

                <div>
                  <a
                    href="https://gentle-kashata-e21372.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gauravsapkal/masai-fatsecret-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>







          <div className="projects_container" data-aos="fade-right">
            <div className="project">

              <div className="project_videocontainer" >

                <div >

                  <Carousel className="project_videocontainer" autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} >

                    <div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/naukri/landing.png"
                        alt=""
                      />

                    </div>

                    <div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/naukri/register.png"
                        alt=""
                      />

                    </div><div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/naukri/featured.png"
                        alt=""
                      />

                    </div><div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/naukri/list.png"
                        alt=""
                      />

                    </div><div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/naukri/post.png"
                        alt=""
                      />

                    </div><div  >

                      <img
                        src="https://raw.githubusercontent.com/gauravsapkal/portfolio/main/imagesdata/naukri/single.png"
                        alt=""
                      />

                    </div>







                  </Carousel>







                </div>

              </div>


              <div className="project_information">
                <h2>Naukri.com</h2>
                <p>
                  Naukri job search website is one of India's largest job search site for job seekers and also for companies to find right talent.
                  User can able to register and login on our website and search different jobs according to their need and apply.
                </p>
                <div className="tec" >
                  <SiHtml5 />
                  <DiCss3 />
                  <BsGithub />
                  <DiGit />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://naukri-clone-page.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gauravsapkal/naukri-website-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>





          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165701189-64bcfffd-18b9-4096-8e9c-21ff20a8e459.png"
                    alt="Youtube_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>YouTube</h2>
                <p>
                  Youtube is a video-streaming platform used by creators across the globe to publish original content. I Was tried to clone this project with HTML, CSS and JS.
                </p>
                <div className="tec" >
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://youtubeloading.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Youtube_app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165779624-c6f9e317-12b5-4184-a2e4-e76d4ad8b1fa.png"
                    alt="Stop_Watch"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stop Watch</h2>
                <p>
                  Stop Watch is use to calculate time required for specific task, I have tried to make stop watch like Google stopwatch , it will provide featchers like Stop, Pause and Reset timer.
                </p>
                <div className="tec" >

                  <IoLogoJavascript />
                  <FaReact />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://vstopwatch.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Stop_Watch.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165694268-70fb96be-1a7e-44de-a710-d4c0934a006b.png"
                    alt="Weather_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Weather App is a platform used to get weather report as per users search for their respective city or they can also pick up any location from the provided google map And also see upcoming 7 days data after searching.
                </p>
                <div className="tec" >

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  
                  <a
                    href="https://github.com/Vaibhav0702/weather_app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <a
                    href="https://vstopwatch.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a> */}


          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165793532-4040faa2-5eae-4024-abf2-4fddd0295477.png"
                    alt="Movie_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie App</h2>
                <p>
                Movie app is a Movie-streaming platform used for watching top movie. In this app on the landing page we can see slideshow of trending movies and see all trending movies below and also sort them according to Rating.
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://filmstan.netlify.app/home.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Movie_app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165774596-72e70fda-35d5-4c5f-8ce0-a424e107c842.png"
                    alt="Translate_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Translate App</h2>
                <p>
                Translate App is a platform used to translate language of the input word or sentance from English to Hindi, I have tried to make a website based on translate app, it will translate language of the input word or sentance from English to Hindi 
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://translatetool.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/translate_app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165800181-1adc65aa-df5a-4e32-aeb9-d1d88f98a809.png"
                    alt="Food_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Food App</h2>
                <p>
                Food App is a food ordering platform used for order and enjoy our favourite food. In this app we can order our favourite food and enjoy it after delivery.
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://khanaapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Food_App.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </>
  );
};
