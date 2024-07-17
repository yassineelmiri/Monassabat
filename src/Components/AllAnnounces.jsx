import React, { useEffect, useState } from 'react';
import makeupimg5 from "../assets/makeupimg5.jpg";
import NavBar from "./NavBar.jsx";
import Footer from "/src/Components/Footer.jsx";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from '/src/assets/logo.png';

const AllAnnounces = () => {
    const handleFavoritsClick = async (annonceId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }
            
            const response = await fetch('http://api.mounassabat.ma/api/favoris', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ annonce_id: annonceId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            const updatedAnnonces = annonces.map(annonce => {
                if (annonce.id === annonceId) {
                    return {
                        ...annonce,
                        isFavorited: !annonce.isFavorited 
                    };
                }
                return annonce;
            });

            setAnnonces(updatedAnnonces); 
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const [annonces, setAnnonces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const [currentSlides, setCurrentSlides] = useState(annonces.map(() => 0)); // Initialize currentSlides with 0 for each annonce


    useEffect(() => {
        console.log(annonces); // Log annonces to verify the structure and image paths
    }, [annonces]);

    useEffect(() => {
        fetchAllAnnonces(1); // Fetch initial page of announcements
    }, []);


    const fetchAllAnnonces = async (page) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }
    
            const response = await fetch(`http://api.mounassabat.ma/api/getAllAcceptedAnnonces?page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (response.ok) {
                const data = await response.json();
                setAnnonces(data.data);
            } else {
                const errorMessage = await response.text();
                console.error('Failed to fetch annonces:', errorMessage);
            }
        } catch (error) {
            console.error('Error fetching annonces:', error);
        }
    };

    const handleDetailsClick = (id) => {
        navigate(`/AnnouncesDetails/${id}`);
    };

    const goToPreviousSlide = (index) => {
        if (annonces[index].images.length > 0) {
            const prevSlide = (currentSlides[index] - 1 + annonces[index].images.length) % annonces[index].images.length;
            setCurrentSlides(prevSlides => [...prevSlides.slice(0, index), prevSlide, ...prevSlides.slice(index + 1)]);
        }
    };

    const goToNextSlide = (index) => {
        if (annonces[index].images.length > 0) {
            const nextSlide = (currentSlides[index] + 1) % annonces[index].images.length;
            setCurrentSlides(prevSlides => [...prevSlides.slice(0, index), nextSlide, ...prevSlides.slice(index + 1)]);
        }
    };


    useEffect(() => {
        setCurrentSlides(annonces.map(() => 0)); 
    }, [annonces]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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

            <div className="w-[70%] mx-auto py-20">
                    <Link to="/"  className="text-white bg-yellow-600 duration-300 hover:bg-yellow-500 px-8 py-3 rounded font-serif text-md">Retour</Link>

                    <div className="flex flex-wrap gap-10 py-10">
                    {annonces.map((annonce, index) => (
                <div key={annonce.id}>
                    <div className="card relative py-2 w-[330px]">
                        <div className="cursor-pointer duration-700 w-[330px]">
                            {/* Log the image path */}
                            {console.log(annonce.images[currentSlides[index]])}
                            <img className="w-[330px] h-[240px]" src={`http://api.mounassabat.ma/${annonce.images[currentSlides[index]]}`} alt={`Image ${currentSlides[index]}`} />
                        </div>
                        <button
                            className="absolute inset-y-0 left-0 flex items-center mt-[-190px] px-4  text-white "
                            onClick={() => goToPreviousSlide(index)}
                        >
                            <svg class="w-8 h-8 text-white rounded-full  bg-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                            </svg>

                        </button>
                        <button
                            className="absolute inset-y-0 right-0 flex items-center mt-[-190px] px-4   text-white "
                            onClick={() => goToNextSlide(index)}
                        >
                            <svg class="w-8 h-8 text-white rounded-full  bg-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                            </svg>

                        </button>
                        <div className="bg-white shadow-lg w-[93%] mx-auto mt-[-20px] relative">
                            <div className="px-8 py-4">
                                <div className="flex gap-2">
                                    <h1 className="text-xl font-serif font-medium">{annonce.title}</h1>
                                </div>
                                <div className="py-2 flex gap-3">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 bg-yellow-600 px-1 py-1 dark:text-white rounded-full"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                            <path stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.12.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                                        </svg>
                                        <p className="text-md font-serif font-medium text-gray-500 ">{annonce.location}</p>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-500"></div>
                                <p className="text-gray-500 font-serif font-medium">{annonce.sub_name}</p>
                                <div className="flex justify-between items-center">
                                    <div className=" py-4 flex justify-center items-center gap-2">
                                        <div id="details" onClick={() => handleDetailsClick(annonce.id)} className="border-gray-400 border px-1 py-1 rounded-full  hover:border-yellow-500 duration-500">
                                            <svg
                                                className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-width="2"
                                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                <path stroke="currentColor" stroke-width="2"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                            </svg>
                                        </div>
                                    
                                        <div id="favorits"  onClick={() => handleFavoritsClick(annonce.id, annonce.isFavorited)} className="border-gray-400 border px-1 py-1 rounded-full hover:text-yellow-500 hover:border-yellow-500">
                                            <svg
                                                className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

                    </div>

                    <div className="flex  gap-96 justify-between  mt-10">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className={`px-8 py-3 mx-2 text-sm font-medium text-white bg-yellow-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}>
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className={`px-8 py-3 mx-2 text-sm font-medium text-white bg-yellow-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}>
                                        Next
                                    </button>
                                </div>
            </div>  


            <footer>
                <Footer/>
            </footer>  
        </div>
    );
};

export default AllAnnounces;