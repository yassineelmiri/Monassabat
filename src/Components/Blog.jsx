import React from 'react';
import NavBar from "./NavBar.jsx";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
import backgroundImage from "../assets/image3.jpg";
import Footer from "./Footer.jsx";

import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
const Blog = () => {
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
                    <h1 className="text-6xl text-white font-bold font-serif py-11">Derniéres nouvelles</h1>
                    <div
                        className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[25%]">
                        <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                        <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                        <p className="text-white font-bold font-serif text-md">Blog</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] flex justify-between py-10">
                <div></div>
                <div>
                    <div className=" flex text-start">
                        <input
                            className="py-5 border border-gray-400 w-full rounded-l-lg placeholder:text-black px-5 placeholder:font-serif placeholder:text-md"
                            type="text" placeholder="Rechercher"/>
                        <div className="bg-black flex justif-center items-center rounded-r-lg px-5">
                            <svg className="w-7 h-7 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="py-14">
                        <div className="border border-gray-400 px-5 py-5 rounded-t-lg">
                            <h1 className="text-black font-serif font-medium text-md">Tag Cloud</h1>
                        </div>
                        <div className="border border-gray-400 px-5 py-8 rounded-b-lg"></div>
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

export default Blog;