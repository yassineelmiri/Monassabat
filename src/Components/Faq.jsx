import React from 'react';
import NavBar from "./NavBar.jsx";
import {Link} from "react-router-dom";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
import backgroundImage from "../assets/image3.jpg";
import Footer from "./Footer.jsx";

import logo from '/src/assets/logo.png';
const Faq = () => {
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
                    <h1 className="text-6xl text-white font-bold font-serif py-11">Read FAQ</h1>
                    <div
                        className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[25%]">
                        <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                        <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                        <p className="text-white font-bold font-serif text-md">FAQ</p>
                    </div>
                </div>
            </div>

            <div className="py-8 w-[60%] mx-auto flex gap-10">
                <div className="w-[65%]">
                    <h1 className="text-4xl font-serif font-medium text-black py-10">Géneral Questions</h1>
                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-5">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #1</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content = document.getElementById('content');
                                    if (content) {
                                        if (content.classList.contains('hidden')) {
                                            content.classList.remove('hidden');
                                            content.classList.add('block', 'duration-500');
                                        } else {
                                            content.classList.remove('block', 'opacity-100');
                                            content.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #2</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content2 = document.getElementById('content2');
                                    if (content2) {
                                        if (content2.classList.contains('hidden')) {
                                            content2.classList.remove('hidden');
                                            content2.classList.add('block', 'duration-500');
                                        } else {
                                            content2.classList.remove('block', 'opacity-100');
                                            content2.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content2" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #3</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content3 = document.getElementById('content3');
                                    if (content3) {
                                        if (content3.classList.contains('hidden')) {
                                            content3.classList.remove('hidden');
                                            content3.classList.add('block', 'duration-500');
                                        } else {
                                            content3.classList.remove('block', 'opacity-100');
                                            content3.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content3" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #4</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content43 = document.getElementById('content43');
                                    if (content43) {
                                        if (content43.classList.contains('hidden')) {
                                            content43.classList.remove('hidden');
                                            content43.classList.add('block', 'duration-500');
                                        } else {
                                            content43.classList.remove('block', 'opacity-100');
                                            content43.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content43" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border border-gray-400 py-3 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #5</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content5 = document.getElementById('content5');
                                    if (content5) {
                                        if (content5.classList.contains('hidden')) {
                                            content5.classList.remove('hidden');
                                            content5.classList.add('block', 'duration-500');
                                        } else {
                                            content5.classList.remove('block', 'opacity-100');
                                            content5.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content5" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #6</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content6 = document.getElementById('content6');
                                    if (content6) {
                                        if (content6.classList.contains('hidden')) {
                                            content6.classList.remove('hidden');
                                            content6.classList.add('block', 'duration-500');
                                        } else {
                                            content6.classList.remove('block', 'opacity-100');
                                            5
                                            content6.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content6" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl font-serif font-medium text-black py-10">Listing Management</h1>

                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-4">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #1</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content10 = document.getElementById('content10');
                                    if (content10) {
                                        if (content10.classList.contains('hidden')) {
                                            content10.classList.remove('hidden');
                                            content10.classList.add('block', 'duration-500');
                                        } else {
                                            content10.classList.remove('block', 'opacity-100');
                                            5
                                            content10.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content10" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #2</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content9 = document.getElementById('content9');
                                    if (content9) {
                                        if (content9.classList.contains('hidden')) {
                                            content9.classList.remove('hidden');
                                            content9.classList.add('block', 'duration-500');
                                        } else {
                                            content9.classList.remove('block', 'opacity-100');
                                            5
                                            content9.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content9" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>


                    <div
                        className="border border-gray-400 py-4 w-full rounded-md hover:border-none hover:shadow-xl cursor-pointer duration-500 mt-8">
                        <div className="px-14 flex justify-between items-center">
                            <h1 className="text-lg text-gray-800 font-serif font-medium">Question #3</h1>
                            <div
                                className="border border-gray-400 rounded-full py-2 px-2 hover:border-yellow-600 duration-300 cursor-pointer"
                                onClick={() => {
                                    const content8 = document.getElementById('content8');
                                    if (content8) {
                                        if (content8.classList.contains('hidden')) {
                                            content8.classList.remove('hidden');
                                            content8.classList.add('block', 'duration-500');
                                        } else {
                                            content8.classList.remove('block', 'opacity-100');
                                            5
                                            content8.classList.add('hidden');
                                        }
                                    }
                                }}>
                                <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m15 19-7-7 7-7"/>
                                </svg>
                            </div>
                        </div>

                        <div id="content8" className="hidden">
                            <div className="py-4">
                                <div className="border bg-gray-400 w-full h-[3px]"></div>
                            </div>

                            <div className="px-14">
                                <p className="text-lg font-serif font-medium text-gray-800 ">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consequatur consequuntur cum eveniet expedita nobis
                                    non numquam provident quod temporibus voluptates!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[35%] py-20">
                    <div className="border border-gray-400">
                        <h1 className="text-md font-medium font-serif px-8 py-3">Useful Links</h1>
                        <div className="w-full bg-gray-400 h-[1px]"></div>
                        <div className="py-4 px-8 ">
                            <h1 className="font-bold hover:text-yellow-600 cursor-pointer duration-500 font-serif py-2">Contact
                                Us</h1>
                            <h1 className="font-bold hover:text-yellow-600 cursor-pointer duration-500 font-serif py-2">Latest
                                News</h1>
                            <h1 className="font-bold hover:text-yellow-600 cursor-pointer duration-500 font-serif py-2">Login
                                and Register</h1>
                            <Link to="/Team" className="font-bold hover:text-yellow-600 cursor-pointer duration-500 font-serif py-2">Meet
                                Our Team</Link>
                        </div>
                    </div>

                    <div className="bg-gray-400 rounded-lg mt-16">
                        <div className="py-4">
                            <h1 className="text-xl textblack font-medium font-serif text-center">Didn't find the
                                answer?</h1>
                            <h1 className="text-xl textblack font-medium font-serif text-center">Ask us questions
                                directly</h1>
                        </div>
                        <div className="py-8 px-6">

                            <div className="relative mb-8">
                                <div
                                    className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-black " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path
                                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path
                                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1"
                                       className="bg-gray-50 text-gray-900 placeholder:text-gray-600 placeholder:font-serif placeholder:text-lg text-sm  block w-full ps-10 py-4 "
                                       placeholder="Name *"/>
                            </div>

                            <div className="relative mb-8">
                                <div
                                    className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-black " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path
                                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path
                                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1"
                                       className="bg-gray-50 text-gray-900 placeholder:text-gray-600 placeholder:font-serif placeholder:text-lg text-sm  block w-full ps-10 py-4 "
                                       placeholder="Email *"/>
                            </div>

                            <div className="relative mb-8">
                                <div
                                    className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-black " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path
                                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path
                                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1"
                                       className="bg-gray-50 text-gray-900 placeholder:text-gray-600 placeholder:font-serif placeholder:text-lg text-sm  block w-full ps-10 py-4 "
                                       placeholder="Phone *"/>
                            </div>

                            <textarea
                                className="placeholder:text-gray-600 placeholder:p-8 placeholder:font-serif placeholder:font-medium"
                                name="" id="" cols="33" rows="8" placeholder="Message *"></textarea>
                            <div className="flex justify-center gap-5 py-4">
                                <input type="checkbox"/>
                                <h1 className="font-serif font-medium text-lg">I accept the <span
                                    className="text-yellow-600 underline font-serif font-medium">privacy policy</span>
                                </h1>
                            </div>

                            <div className="py-5">
                                <div
                                    className="flex justify-center gap-8 bg-yellow-600 px-5 items-center py-2 rounded border-4 w-[50%] mx-auto border-white">
                                    <button className="font-medium text-white font-serif text-lg">Send</button>
                                    <svg className="w-6 h-6 text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                    </svg>
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

export default Faq;