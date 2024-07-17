import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
const AnnouncesDetails = () => {
    const { id } = useParams();
    const [annonce, setAnnonce] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0); // State to track current slide index

    useEffect(() => {
        const fetchAnnonceDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('JWT token not found in local storage');
                }

                const response = await fetch(`http://api.mounassabat.ma/api/getAnnonceDetails/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch announcement details');
                }

                const data = await response.json();
                setAnnonce(data.annonce); // Assuming data is structured as { status: 'success', annonce: {...} }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching announcement details:', error);
                setLoading(false);
            }
        };

        fetchAnnonceDetails();
    }, [id]);

    const goToPreviousSlide = () => {
        if (annonce && annonce.image && annonce.image.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + annonce.image.length) % annonce.image.length);
        }
    };

    const goToNextSlide = () => {
        if (annonce && annonce.image && annonce.image.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % annonce.image.length);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!annonce) {
        return <div>Error fetching announcement details</div>;
    }

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

            <div className="w-[70%] py-16 mx-auto">
                <div className="flex items-center gap-20 mt-5">
                    <div id={`carousel-${id}`} className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                        <div className="relative w-[330px] rounded-xl h-[240px] md:h-96" data-carousel-inner>
                            {annonce.image && annonce.image.length > 0 && (
                                <div className="duration-700 ease-in-out h-[100%]" data-carousel-item>
                                    <img src={`http://api.mounassabat.ma/${annonce.image[currentIndex]}`} className="object-cover w-full h-full" alt={`Slide ${currentIndex}`} />
                                </div>
                            )}
                        </div>

                        {annonce.image && annonce.image.length > 1 && (
                            <>
                                <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                                    {annonce.image.map((_, slideIndex) => (
                                        <button
                                            key={slideIndex}
                                            type="button"
                                            className={`w-3 h-3 rounded-full ${slideIndex === currentIndex ? 'bg-yellow-600' : 'bg-gray-300'} hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 transition`}
                                            onClick={() => setCurrentIndex(slideIndex)}
                                        ></button>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-yellow-600 rounded-full hover:bg-gray-300 focus:outline-none transition"
                                    onClick={goToPreviousSlide}
                                >
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-yellow-600 rounded-full hover:bg-gray-300 focus:outline-none transition"
                                    onClick={goToNextSlide}
                                >
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    <div>
                        <h1 className="text-black font-serif  text-3xl py-2">{annonce.title}</h1>
                        <div className="py-6">
                            <h1 className="text-black font-serif text-2xl italic py-2">Description</h1>
                            <p className="text-gray-500 text-sm">{annonce.description}</p>
                        </div>
                        <div className="flex gap-20 items-center py-10">
                            <div>
                                <h1 className="text-black font-serif text-md">Category: <span className="px-10 text-gray-600 text-sm">{annonce.sub_name}</span></h1>
                                <h1 className="text-black font-serif text-md py-3">Prestataire: <span className="px-7 text-gray-600 text-sm">{annonce.firstName} {annonce.lastName}</span></h1>
                                <h1 className="text-black font-serif text-md">Location: <span className="px-12 text-gray-600 text-sm">{annonce.location}</span></h1>
                            </div>
                            <div>
                                <h1 className="text-black font-serif text-md">Date: <span className="px-8 text-gray-600 text-sm">{format(new Date(annonce.created_at), 'dd MMMM yyyy')}</span></h1>
                                <h1 className="text-black font-serif text-md py-3">Phone: <span className="px-7 text-gray-600 text-sm">+212 {annonce.phone}</span></h1>
                                <h1 className="text-black font-serif text-md">prix: <span className="px-8 text-gray-600 text-sm">{annonce.price} Dhs</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AnnouncesDetails;
