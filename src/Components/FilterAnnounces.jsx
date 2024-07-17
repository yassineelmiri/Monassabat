import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAnnonces } from './AnnonceContext';
import { useNavigate } from 'react-router-dom';

const FilterAnnounces = () => {

    const { annonces } = useAnnonces();
    const [currentSlides, setCurrentSlides] = useState([]);
    
    const navigate = useNavigate();


    
    const handleDetailsClick = (id) => {
        navigate(`/AnnouncesDetails/${id}`);
    };

    useEffect(() => {
        if (annonces.length > 0) {
            const initialSlides = annonces.map(() => 0);
            setCurrentSlides(initialSlides);
        }
    }, [annonces]);

    const goToPreviousSlide = (index) => {
        if (annonces[index] && annonces[index].images && Array.isArray(annonces[index].images)) {
            const prevSlide = (currentSlides[index] - 1 + annonces[index].images.length) % annonces[index].images.length;
            setCurrentSlides(prevSlides => [
                ...prevSlides.slice(0, index),
                prevSlide,
                ...prevSlides.slice(index + 1),
            ]);
        }
    };

    const goToNextSlide = (index) => {
        if (annonces[index] && annonces[index].images && Array.isArray(annonces[index].images)) {
            const nextSlide = (currentSlides[index] + 1) % annonces[index].images.length;
            setCurrentSlides(prevSlides => [
                ...prevSlides.slice(0, index),
                nextSlide,
                ...prevSlides.slice(index + 1),
            ]);
        }
    };

    return (
        <div>
            {annonces.length > 0 ? (
                <div className="w-[78%] mx-auto py-20">
                    <div className="mx-[1rem] max-w-[100%]">
                        <div className="flex flex-wrap gap-10 py-10">
                            {annonces.map((annonce, index) => (
                                <div key={annonce.annonce.id}>
                                    <div className="card relative py-2">
                                        <div className="cursor-pointer duration-700">
                                            <div className="max-w-2xl mx-auto">
                                                <div id={`carousel-${index}`} className="relative w-[350px] h-[230px] rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                                                    <div className="relative w-[350px] rounded-xl h-[240px] md:h-96" data-carousel-inner>
                                                        {annonce.images && Array.isArray(annonce.images) && annonce.images.length > 0 && (
                                                            <div className="duration-700 ease-in-out" data-carousel-item>
                                                                <img src={`http://api.mounassabat.ma/${annonce.images[currentSlides[index]]}`} className="object-cover w-full h-full" alt={`Slide ${currentSlides[index]}`} />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {annonce.images && Array.isArray(annonce.images) && annonce.images.length > 1 && (
                                                        <>
                                                            <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                                                                {annonce.images.map((_, slideIndex) => (
                                                                    <button
                                                                        key={slideIndex}
                                                                        type="button"
                                                                        className={`w-3 h-3 rounded-full ${slideIndex === currentSlides[index] ? 'bg-yellow-600' : 'bg-gray-300'} hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 transition`}
                                                                        onClick={() => setCurrentSlides(prevSlides => [...prevSlides.slice(0, index), slideIndex, ...prevSlides.slice(index + 1)])}
                                                                    ></button>
                                                                ))}
                                                            </div>
                                                            <button
                                                                type="button"
                                                                className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-yellow-600 rounded-full hover:bg-gray-300 focus:outline-none transition"
                                                                onClick={() => goToPreviousSlide(index)}
                                                            >
                                                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-yellow-600 rounded-full hover:bg-gray-300 focus:outline-none transition"
                                                                onClick={() => goToNextSlide(index)}
                                                            >
                                                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                </svg>
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white shadow-lg w-[330px] mx-auto mt-[-20px] relative">
                                            <div className="px-8 py-4">
                                                <div className="flex gap-2">
                                                    <h1 className="text-xl font-serif font-medium">{annonce.annonce.title}</h1>
                                                </div>
                                                <div className="py-2 flex gap-3">
                                                    <div className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 bg-yellow-600 px-1 py-1 dark:text-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.12.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                                                        </svg>
                                                        <p className="text-md font-serif font-medium text-gray-500 ">{annonce.annonce.location}</p>
                                                    </div>
                                                </div>
                                                <div className="w-full h-[1px] bg-gray-500"></div>
                                                <div className="flex justify-between items-center">
                                                    <div className=" py-4 flex justify-center items-center gap-2">
                                                       
                                                    </div>
                                                    <p className="text-gray-500 font-serif font-medium">{annonce.annonce.sub_category_name}</p>
                                                </div>
                                                <p className="text-gray-500 font-serif inline-flex mr-2 font-bold">{annonce.annonce.price}</p><span className='text-gray-500 font-serif font-bold'>MAD</span>
                                                <div className="flex justify-between items-center">
                                    <div className=" py-4 flex justify-center items-center gap-2">
                                        <div id="details" onClick={() => handleDetailsClick(annonce.annonce.id)} className="border-gray-400 border px-1 py-1 rounded-full  hover:border-yellow-500 duration-500">
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
                                </div></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )}
        </div>
    );
};

FilterAnnounces.propTypes = {
    annonces: PropTypes.arrayOf(
        PropTypes.shape({
            annonce: PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
                location: PropTypes.string.isRequired,
                accepted_at: PropTypes.string,
                sub_category_name: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ),
};

export default FilterAnnounces;