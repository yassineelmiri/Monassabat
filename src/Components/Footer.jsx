import React from 'react';
import logo from "/src/assets/logo.png";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="bg-stone-800 text-white py-8 ">
                <div className="w-[90%]  flex flex-wrap justify-evenly px-4 py-8">
                    <div className='text-justify'>
                        <img src={logo} alt="Logo" className="max-w-[144px] max-[1199px]:max-w-[120px] max-[991px]:max-w-[120px] max-[767px]:max-w-[100px] w-[90px] h-[70px] mb-6"/>
                        <p className="mb-4 flex items-center gap-2 font-serif font-medium"><span
                            className='bg-amber-300  rounded-full p-1 border-solid border-2 border-amber-100 hover:shadow-lg hover:shadow-amber-400'><img
                            className='w-3 h-3' src="https://img.icons8.com/ios-filled/50/iphone-x.png" alt="iphone-x"/></span><strong
                            className='flex item-center'>0620-268855 <br/>7ème Etage Apt N16, Et Moussa</strong></p>
                        <p className="mb-4 flex items-center gap-2 font-serif font-medium"><span
                            className='bg-amber-300  rounded-full p-1 border-solid border-2 border-amber-100 hover:shadow-lg hover:shadow-amber-400'><img
                            className='w-3 h-3' src="https://img.icons8.com/ios/50/order-delivered.png"
                            alt="order-delivered"/></span>Bnou Noussair, 174 Bd Mohamed <br/> Zerktouni, Casablanca
                            20250</p>

                        <p className="mb-4 flex items-center gap-2 font-serif font-medium"><span
                            className='bg-amber-300  rounded-full p-1 border-solid border-2 border-amber-100 hover:shadow-lg hover:shadow-amber-400'><img
                            className='w-3 h-3' src="https://img.icons8.com/material-two-tone/24/email.png"
                            alt="email"/></span>contact@mounassabat.ma</p>
                        <p className="mt-4 text-center font-serif font-medium">Suivez nos réseaux sociaux</p>
                        <div className="flex gap-8 justify-center py-5">
                            <div className="border border-gray-500 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                <svg className="w-6 h-6 text-white hover:text-yellow-600 duration-300" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="border border-gray-500 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                <svg className="w-6 h-6 text-white hover:text-yellow-600 duration-300" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="border border-gray-500 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                <svg className="w-6 h-6 text-white hover:text-yellow-600 duration-300" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd"
                                          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='text-justify'>
                        <h4 className="font-bold mb-8 font-serif">Information</h4>
                        <ul className=' '>
                             <li className="mb-4 relative hover:list-disc"><Link to="/QuiSommesNous" className="hover-item hover:text-yellow-600 duration-500">Qui sommes-nous ?</Link></li>
                             <li className="mb-4 relative hover:list-disc"><Link to="/QuiSommesNous" className="hover-item hover:text-yellow-600 duration-500">A Propos</Link></li>
                             <li className="mb-4 relative hover:list-disc"><Link to="/Login" className="hover-item hover:text-yellow-600 duration-500">Se connecter / S’inscrire</Link></li>
                             <li className="mb-4 relative hover:list-disc"><Link to="/Blog" className="hover-item hover:text-yellow-600 duration-500">idées</Link></li>
                             <li className="mb-4 relative hover:list-disc"><Link to="/Contact" className="hover-item hover:text-yellow-600 duration-500">Contact</Link></li>
                             <li className="mb-4 relative hover:list-disc"><Link to="/Compare" className="hover-item hover:text-yellow-600 duration-500">Compare</Link></li>
                             <li className="mb-4 relative hover:list-disc"><Link to="/Faq" className="hover-item hover:text-yellow-600 duration-500">FAQ</Link></li>
                        </ul>

                    </div>
                    <div className='text-justify'>
                        <h4 className="font-bold mb-8 font-serif">Categories</h4>
                        <ul>
                            <li className="mb-4"><a href="#" className="hover:underline">Marriage</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Fête de naissance</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">BabyShower</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Anniversaire</a></li>
                            <li className="mb-4"><a href="#" className="hover:underline">Conférence</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;