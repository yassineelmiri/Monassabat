import React from 'react';
import NavBar from "/src/Components/NavBar.jsx";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
import walid from "/src/assets/Walid.jpg";
import backgroundImage from "../assets/image3.jpg";
import Footer from "./Footer.jsx";
import informaticien from "../assets/informaticien.jpeg";
import designer from "../assets/designer.jpeg";
import abderahmane from "../assets/abderahmane.jpeg";

import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
const Team = () => {
    return (
        <div>
            <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
                <div className="gi-header-bottom p-[0] border-b-[1px] border-solid border-[#eee] max-[991px]:py-[15px] min-[992px]:block max-[575px]:pt-[15px] max-[575px]:border-[0] max-[575px]:pb-[0] shadow-md">
                    <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                        <div className="w-full flex flex-wrap px-[12px] max-[575px]:p-[0]">
                            <div className="gi-flex flex flex-row justify-between w-full max-[575px]:p-[0] max-[575px]:flex-col">
                                <div className="gi-header-logo flex items-center self-center max-[575px]:mb-[15px]">
                                    <a href="#" className="gi-header-btn gi-site-menu-icon mr-[20px] flex items-center min-[992px]:hidden max-[575px]:hidden">
                                        <i className="fi-rr-menu-burger text-[24px] leading-[17px] text-black"></i>
                                    </a>
                                    <Link to="/" className="header-logo text-left">
                                        <img src={logo} className="max-w-[144px] max-[1199px]:max-w-[120px] max-[991px]:max-w-[120px] max-[767px]:max-w-[100px] w-[110px] h-[85px]" alt="Logo" />
                                    </Link>
                                </div>
                               
                                    <Link to="/AnnounceForm" className="gi-header-action self-center max-[575px]:w-full max-[575px]:py-[10px] max-[575px]:bg-[#4b5966] w-[400px]">
                                        <div className="text-white bg-yellow-600 py-3.5 px-8 rounded-md font-serif font-medium ">
                                            <div className="flex justify-center items-center gap-10">
                                                <button className="">Publier votre annonce</button>
                                                <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
            <div className="w-[97%] mx-auto rounded-b-lg" style={{
                backgroundImage: `url(${backgroundQuiSommesNous})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '21vh'
            }}>
                <div className="w-[60%] mx-auto">
                    <h1 className="text-6xl text-white font-bold font-serif py-11">Our team</h1>
                    <div
                        className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[25%]">
                        <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                        <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                        <p className="text-white font-bold font-serif text-md">Our Team</p>
                    </div>
                </div>
            </div>
            <div className="w-[58%] mx-auto py-20">
                <div className="flex gap-16">
                    <div className="w-[40%] mx-auto rounded-lg" style={{
                        backgroundImage: `url(${informaticien})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '45vh'
                    }}>
                        <div className="w-[60%] mx-auto">
                            <div className="flex gap-5 py-80">
                                <div className="bg-white px-3 py-3 rounded-full">
                                    <svg className="w-6 h-6 text-black"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div className="bg-white px-3 py-3 rounded-full">
                                    <svg className="w-6 h-6 text-black"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div className="bg-white px-3 py-3 rounded-full">
                                    <svg className="w-6 h-6 text-black"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div className="bg-white px-3 py-3 rounded-full">
                                    <svg className="w-6 h-6 text-black" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <h1 className="text-5xl font-serif font-Medium">Karim HASRAOUI</h1>
                        <p className="py-5 text-gray-500 font-serif font-medium text-lg">Customer Advisor</p>
                        <p className="py-5 text-gray-500 font-serif font-medium text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi aspernatur deserunt
                            eaque est eum, explicabo inventore laudantium maxime natus necessitatibus, nesciunt nobis
                            nostrum qui repellat sapiente vero. Accusamus, voluptas?
                        </p>

                        <div
                            className="flex items-center gap-5 border border-gray-400 w-full px-8 py-4 rounded-lg mb-3">
                            <div className="border border-gray-400 rounded-full px-3 py-3">
                                <svg className="w-6 h-6 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"/>
                                </svg>
                            </div>
                            <h1 className="text-black font-serif font-medium">(123) 345-6897</h1>
                        </div>
                        <div className="flex items-center gap-5 border border-gray-400 w-full px-8 py-4 rounded-lg">
                            <div className="border border-gray-400 rounded-full px-3 py-3">
                                <svg className="w-6 h-6 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                                </svg>
                            </div>
                            <h1 className="text-black font-serif font-medium">Olivia@tangibledesign.net</h1>
                        </div>
                    </div>
                </div>

                <div className="py-24 flex flex-col justify-center items-center">
                    <h1 className="text-gray-500 bg-gray-400 font-serif font-medium px-3 py-1 rounded-md text-center w-[10%]">Our
                        Team</h1>
                    <h1 className="text-black font-serif font-medium text-5xl text-center py-8">The geniuses behind our
                        work</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-5">

                    <div
                        className="relative cursor-pointer bg-cover bg-center w-[260px] h-[350px] group overflow-hidden border border-gray-400">
                        <img src={walid} alt="Image"
                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-110"/>
                        <div
                            className="absolute inset-0 rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer from-black/80 to-transparent bg-gradient-to-t  pt-30 text-white flex items-end">
                            <div
                                className="transform-gpu  w-full  text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-500 ease-in-out">
                                <div className="w-full bg-white py-3">
                                    <h1 className=" w-full text-black  text-center font-serif font-medium text-2xl">Walid
                                        LHAILA</h1>
                                    <p className="text-gray-500  text-center font-serif font-medium text-md">Developer
                                        Web</p>

                                    <div className="flex justify-center py-2 w-full  gap-5">
                                        <div
                                            className="bg-white px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                      clip-rule="evenodd"/>
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                            </svg>

                                        </div>

                                        <div
                                            className=" px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>

                                        <div
                                            className=" px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className="relative cursor-pointer bg-cover bg-center w-[260px] h-[350px] group overflow-hidden border border-gray-400">
                        <img src={designer} alt="Image"
                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-110"/>
                        <div
                            className="absolute inset-0 rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer from-black/80 to-transparent bg-gradient-to-t  pt-30 text-white flex items-end">
                            <div
                                className="transform-gpu  w-full  text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-500 ease-in-out">
                                <div className="w-full bg-white py-3">
                                    <h1 className=" w-full text-black  text-center font-serif font-medium text-2xl">Fatimaezahra
                                        ESSIAD</h1>
                                    <p className="text-gray-500  text-center font-serif font-medium text-md">Designer
                                        Web</p>

                                    <div className="flex justify-center py-2 w-full  gap-5">
                                        <div
                                            className="bg-white px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                      clip-rule="evenodd"/>
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                            </svg>

                                        </div>

                                        <div
                                            className=" px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>

                                        <div
                                            className=" px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative cursor-pointer bg-cover bg-center w-[260px] h-[350px] group overflow-hidden border border-gray-400">
                        <img src={abderahmane} alt="Image"
                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-110"/>
                        <div
                            className="absolute inset-0 rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out cursor-pointer from-black/80 to-transparent bg-gradient-to-t  pt-30 text-white flex items-end">
                            <div
                                className="transform-gpu  w-full  text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-500 ease-in-out">
                                <div className="w-full bg-white py-3">
                                    <h1 className=" w-full text-black  text-center font-serif font-medium text-2xl">Abderahmane EL HAFIDI</h1>
                                    <p className="text-gray-500  text-center font-serif font-medium text-md">Developer
                                        Web</p>

                                    <div className="flex justify-center py-2 w-full  gap-5">
                                        <div
                                            className="bg-white px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                      clip-rule="evenodd"/>
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                            </svg>

                                        </div>

                                        <div
                                            className=" px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>

                                        <div
                                            className=" px-2 py-2 border border-gray-400 rounded-full hover:border-yellow-600 duration-300">
                                            <svg className="w-4 h-4 text-black hover:text-yellow-600 duration-300"
                                                 aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                   
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '40vh'
            }}>
                <div className="flex flex-col justify-center items-center text-center w-[30%] mx-auto py-5 ">
                    <h1 className="text-black text-4xl font-serif font-medium py-10">Sign up to receive the latest
                        updates and news</h1>
                    <div className="bg-white w-full px-5 py-3 rounded-r-full shadow-2xl">
                        <div className=" flex gap-4 text-start">
                            <input
                                className="py-5 border border-gray-400 w-full placeholder:text-black px-5 placeholder:font-serif placeholder:text-md"
                                type="text" placeholder="Email"/>
                            <div className="bg-black flex justif-center items-center rounded-r-full px-5">
                                <svg className="w-7 h-7 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Team;