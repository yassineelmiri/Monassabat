import React from 'react';
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import {Link} from "react-router-dom";

const Favorites = () => {
    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <div className="w-[60%] mx-auto ">
                <ul className="flex gap-10 items-center text-center font-serif font-medium text-gray-500 text-md py-8">
                    <Link to="" className="hover:text-black duration-300">Ajouter un nouveau</Link>
                    <Link to="/Annonces" className="hover:text-black duration-300 ">Mes annonces</Link>
                    <div>
                        <li className="text-black">Favorites</li>
                        <div className="w-28 bg-yellow-600 h-[2px]"></div>
                    </div>
                    <Link to="/Messages" className="hover:text-black duration-300">Messages</Link>
                    <Link to="" className="hover:text-black duration-300">Paramétres</Link>
                </ul>

                <div className="py-16">
                    <div className="border-2 border-gray-400 rounded-lg ">
                        <div className="p-10 flex flex-col gap-8 justify-center items-center text-center">
                            <h1 className="text-black text-3xl font-serif font-medium">You don't have favorite ads yet.</h1>

                            <svg className="w-36 h-36 text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"/>
                            </svg>

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

export default Favorites;