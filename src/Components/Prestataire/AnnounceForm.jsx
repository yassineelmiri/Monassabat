import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {Link} from "react-router-dom";
const AnnounceForm = () => {

    const [showCategories, setShowCategories] = useState(false);
    const [showCities, setShowCities] = useState(false);
    const [subValue, setsubValue] = useState('');
    const [sousValue, setsousValue] = useState('');
    const [cities, setCities] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formIncomplete, setFormIncomplete] = useState(false);
    const navigate = useNavigate();
    const [isDropdownAniversaire, setIsDropdownAniversaire] = useState(false);
    const [isDropdownBabyShower, setIsDropdownBabyShower] = useState(false);
    const [isDropdownMarriage, setIsDropdownMarriage] = useState(false);
    const [isDropdownFete, setIsDropdownFete] = useState(false);
    const [isDropdownConferance, setIsDropdownConferance] = useState(false);

    const [isDropdownLieudeReception, setIsDropdownLieudeReception] = useState(false);
    const [isDropdownMusique, setIsDropdownMusique] = useState(false);
    const [isDropdownMusique2, setIsDropdownMusique2] = useState(false);
    const [isDropdownAdultes, setIsDropdownAdultes] = useState(false);
    const [isDropdownenfants, setIsDropdownenfants] = useState(false);
    const [isDropdownColloque, setIsDropdownColloque] = useState(false);
    const [isDropdownEvenementProfessionnel, setIsDropdownEvenementProfessionnel] = useState(false);
    const [isDropdownSeminaire, setIsDropdownSeminaire] = useState(false);

    const toggleDropdownAniversaire = () => {
        setIsDropdownAniversaire(!isDropdownAniversaire);
    };
    const toggleDropdownBabyShower = () => {
        setIsDropdownBabyShower(!isDropdownBabyShower);
    };
    const toggleDropdownMarriage = () => {
        setIsDropdownMarriage(!isDropdownMarriage);
    };
    const toggleDropdownFete = () => {
        setIsDropdownFete(!isDropdownFete);
    };
    const toggleDropdownConferance = () => {
        setIsDropdownConferance(!isDropdownConferance);
    };

    const toggleDropdownAdultes = () => {
        setIsDropdownAdultes(!isDropdownAdultes);
    };
    const toggleDropdownenfants = () => {
        setIsDropdownenfants(!isDropdownenfants);
    };
    const toggleDropdownColloque = () => {
        setIsDropdownColloque(!isDropdownColloque);
    };
    const toggleDropdownEvenementProfessionnel = () => {
        setIsDropdownEvenementProfessionnel(!isDropdownEvenementProfessionnel);
    };
    const toggleDropdownSeminaire = () => {
        setIsDropdownSeminaire(!isDropdownSeminaire);
    };
    const toggleDropdownMusique = () => {
        setIsDropdownMusique(!isDropdownMusique);
    };
    const toggleDropdownMusique2 = () => {
        setIsDropdownMusique2(!isDropdownMusique2);
    };
    const toggleDropdownLieudeReception = () => {
        setIsDropdownLieudeReception(!isDropdownLieudeReception);
    };

    const handleSub = (event) => {
        const selectedCat = event.target.textContent;
        const subValue = event.target.getAttribute('value');
        setsubValue(subValue);
        setSelectedCat(selectedCat);
        setShowCategories(false);
      };
      const handleSub2 = (event) => {
        const subValue = event.target.getAttribute('value');
        setsubValue(subValue);
        
      };
      
    const handleSous = (event) => {
        const selectedCat = event.target.textContent;
        const sousValue = event.target.getAttribute('value');
        setsousValue(sousValue);
        setSelectedCat(selectedCat);
        setShowCategories(false);
      };
    const handleContinueClick = () => {
        // Check if any required fields are empty
        if (!selectedCity || !phoneNumber) {
            setFormIncomplete(true);
            setTimeout(() => {
                setFormIncomplete(false);
            }, 3000);
        } else {

            setFormIncomplete(false);
            
            localStorage.setItem("location",selectedCity);
            localStorage.setItem("sub_category_id", subValue);
            localStorage.setItem("sous_category_id", sousValue);  
            localStorage.setItem("category", selectedCat);
            navigate('/AnnounceForm2');
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const where = encodeURIComponent(JSON.stringify({
                    "asciiname": {
                        "$exists": true
                    }
                }));

                const response = await fetch(
                    'https://parseapi.back4app.com/classes/List_of_Morroco_cities?limit=1000&order=asciiname&keys=asciiname,population',
                    {
                        headers: {
                            'X-Parse-Application-Id': '2ZOfB60kP39M5kE4WynRqyP7lNGKZ9MB8fVWqAM9', // This is the fake app's application id
                            'X-Parse-Master-Key': 'Qq7lEIoEEzRris3IM6POE5ewvYuzACVyA6VKtiVb', // This is the fake app's readonly master key
                        }
                    }
                );

                const data = await response.json();
                setCities(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {

            localStorage.removeItem("sub_category_id");
            localStorage.removeItem("sub_category_id");
            localStorage.removeItem("location");
            localStorage.removeItem("category");
        setFilteredCities(
            cities.filter(city => city.asciiname.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery, cities]);

    const handleCitySelection = (cityName) => {
        setSelectedCity(cityName);
        setShowCities(false);
    };
    const [selectedCat, setSelectedCat] = useState('');

    


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <>
            <div className='h-screen bg-gray-100'>
                <div className="fixed bg-white w-screen flex justify-center gap-40 items-center h-18 px-10 py-2 shadow-gray shadow-md">
                    <div className="flex items-center">
                        <div className='bg-yellow-500 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H7Z" fill="#FFFFFF" />
                                <path d="M6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H7C6.44772 13 6 12.5523 6 12Z" fill="#FFFFFF" />
                                <path d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z" fill="#FFFFFF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.625 3H7.03369C7.71014 2.37135 8.6473 2 9.62497 2H18.375C20.263 2 22 3.38491 22 5.33333V14.6667C22 16.6151 20.263 18 18.375 18H17.94C17.631 19.697 16.1637 21 14.375 21H5.625C3.60818 21 2 19.3435 2 17.3333V6.66667C2 4.65653 3.60818 3 5.625 3ZM18.375 16H18V6.66667C18 5.62093 17.5648 4.67089 16.8632 4H18.375C19.3864 4 20 4.70443 20 5.33333V14.6667C20 15.2956 19.3864 16 18.375 16ZM5.625 5C4.74233 5 4 5.73129 4 6.66667V17.3333C4 18.2687 4.74233 19 5.625 19H14.375C15.2577 19 16 18.2687 16 17.3333V6.66667C16 5.73129 15.2577 5 14.375 5H5.625Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                        <div className='px-2'>
                            <h1 className='font-bold text-md text-yellow-500'>Information Général</h1>
                            <p className='text-yellow-500'>Remplire les informations générales de votre annonce</p>
                        </div>
                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-gray-300 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20V22ZM12.4453 4.01216C12.9968 4.04235 13.4683 3.61979 13.4985 3.06833C13.5287 2.51687 13.1061 2.04535 12.5547 2.01515L12.4453 4.01216ZM11.7627 9.23726L11.0556 8.53015L11.7627 9.23726ZM17.411 3.58902L18.1181 4.29613L17.411 3.58902ZM9 15L8.01005 14.8586C7.96411 15.1802 8.07723 15.504 8.3134 15.727C8.54957 15.9501 8.87936 16.0445 9.19778 15.9802L9 15ZM9.04745 14.6678L8.0575 14.5264L8.0575 14.5264L9.04745 14.6678ZM9.48793 14.9016L9.29015 13.9213L9.48793 14.9016ZM12.8012 13.7247L12.2287 12.9048H12.2287L12.8012 13.7247ZM11.564 14.3882L11.9302 15.3187H11.9302L11.564 14.3882ZM10.1791 10.9786L9.34943 10.4203V10.4203L10.1791 10.9786ZM9.49029 12.3561L8.54586 12.0274V12.0274L9.49029 12.3561ZM16.7071 4.29289C16.3166 3.90237 15.6834 3.90237 15.2929 4.29289C14.9024 4.68342 14.9024 5.31658 15.2929 5.70711L16.7071 4.29289ZM18.1213 8.53553C18.5118 8.92606 19.145 8.92606 19.5355 8.53553C19.9261 8.14501 19.9261 7.51184 19.5355 7.12132L18.1213 8.53553ZM16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18V16ZM21.88 10.8011C21.7701 10.2598 21.2423 9.91012 20.701 10.02C20.1598 10.1299 19.8101 10.6577 19.92 11.1989L21.88 10.8011ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C12.1495 4 12.298 4.00409 12.4453 4.01216L12.5547 2.01515C12.371 2.00509 12.186 2 12 2V4ZM12.4698 9.94436L18.1181 4.29613L16.7039 2.88191L11.0556 8.53015L12.4698 9.94436ZM19.5323 5.71034L13.6703 11.5723L15.0845 12.9865L20.9465 7.12455L19.5323 5.71034ZM9.98995 15.1414L10.0374 14.8093L8.0575 14.5264L8.01005 14.8586L9.98995 15.1414ZM9.29015 13.9213L8.80222 14.0198L9.19778 15.9802L9.68571 15.8818L9.29015 13.9213ZM13.6703 11.5723C12.8844 12.3582 12.5736 12.664 12.2287 12.9048L13.3737 14.5447C13.8964 14.1797 14.3472 13.7239 15.0845 12.9865L13.6703 11.5723ZM9.68571 15.8818C10.7079 15.6755 11.3371 15.5522 11.9302 15.3187L11.1977 13.4577C10.8064 13.6118 10.3796 13.7015 9.29015 13.9213L9.68571 15.8818ZM12.2287 12.9048C11.9079 13.1288 11.5618 13.3144 11.1977 13.4577L11.9302 15.3187C12.44 15.1181 12.9245 14.8583 13.3737 14.5447L12.2287 12.9048ZM11.0556 8.53015C10.243 9.34283 9.74031 9.83942 9.34943 10.4203L11.0087 11.5369C11.2665 11.1538 11.6034 10.8108 12.4698 9.94436L11.0556 8.53015ZM10.0374 14.8093C10.2107 13.5963 10.2829 13.121 10.4347 12.6848L8.54586 12.0274C8.31572 12.6886 8.22004 13.3887 8.0575 14.5264L10.0374 14.8093ZM9.34943 10.4203C9.01364 10.9192 8.74356 11.4594 8.54586 12.0274L10.4347 12.6848C10.5759 12.2791 10.7688 11.8933 11.0087 11.5369L9.34943 10.4203ZM19.5323 4.29613C19.9228 4.68665 19.9228 5.31981 19.5323 5.71034L20.9465 7.12455C22.1181 5.95298 22.1181 4.05348 20.9465 2.88191L19.5323 4.29613ZM20.9465 2.88191C19.7749 1.71034 17.8754 1.71034 16.7039 2.88191L18.1181 4.29613C18.5086 3.9056 19.1418 3.9056 19.5323 4.29613L20.9465 2.88191ZM15.2929 5.70711L18.1213 8.53553L19.5355 7.12132L16.7071 4.29289L15.2929 5.70711ZM20 12C20 14.2091 18.2091 16 16 16V18C19.3137 18 22 15.3137 22 12H20ZM19.92 11.1989C19.9723 11.4569 20 11.7247 20 12H22C22 11.5903 21.9588 11.1893 21.88 10.8011L19.92 11.1989Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-gray-300 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg fill="#FFFFFF" width="20px" height="20px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" /></svg>
                        </div>
                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-gray-300 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <Link to="/">Quitter</Link>
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <section className="max-w-2xl p-6 bg-white rounded-xl shadow-md  mt-20">
                        <h1 className="text-2xl font-bold text-black capitalize ">Qu'annoncez-vous aujourd'hui ?</h1>
                        <h4 className="text-md font-semibold capitalize text-gray-500">Grâce à ces informations les acheteurs peuvent trouver votre annonce plus facilement</h4>
                        <form>
                            <div className="flex-col gap-6 mt-4 ">
                                <div>
                                    <label className="text-md font-medium" ><span className='text-red-500'>*</span>Catégorie</label>
                                    <div className="relative">
                                        <div onClick={() => setShowCategories(!showCategories)} className="cursor-pointer flex items-center justify-between w-full px-4 h-14 mb-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300  focus:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring">
                                            <div className="flex">

                                                <h1 className='m-2 text-black font-semibold text-md'>{selectedCat || 'Sélectionner'}</h1>
                                                <input type="text" value={selectedCat} className='hidden' required />
                                            </div>
                                            <svg
                                                className="w-8 h-8 transform rotate-90"
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill="#FFD700"
                                                    d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-md font-medium" ><span className='text-red-500'>*</span>Ville - Secteur</label>
                                    <div onClick={() => setShowCities(!showCities)} className="cursor-pointer flex items-center justify-between w-full px-4 h-14 mb-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300  focus:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring">
                                        <div className="flex">
                                            <div className='bg-gray-100  rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <svg width="20px" height="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                                                    <path d="M87.13 0a2.386 2.386 0 0 0-.64.088a2.386 2.386 0 0 0-.883.463L11.34 62.373a2.386 2.386 0 0 0 1.619 4.219l37.959-1.479l17.697 33.614a2.386 2.386 0 0 0 4.465-.707L89.486 2.79A2.386 2.386 0 0 0 87.131 0z" fill="#000000" fillRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <h1 className='m-2 text-black font-semibold text-md'>{selectedCity || 'Sélectionner'}</h1>
                                            <input type="text" value={selectedCity} className='hidden' required />
                                        </div>
                                        <svg
                                            className="w-8 h-8 transform rotate-90"
                                            viewBox="0 0 64 64"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#FFD700"
                                                d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                            />
                                        </svg>

                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-2xl'>Vos coordonnées</h1>
                                    <p className='text-gray-500 text-md py-5'>Les acheteurs peuvent vous contacter directement sur votre numéro de téléphone.</p>
                                </div>
                                <div className=' gap-2 items-center flex'>
                                    <div className='bg-gray-100 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#000" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label className="text-md font-medium" ><span className='text-red-500'>*</span>Numéro de téléphone</label>
                                    </div>
                                </div><input
                                    id="phonenumber"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="block w-full h-14 font-bold text-md py-2 px-2 mt-2  bg-white border border-gray-300 rounded-md  focus:border-yellow-500  focus:outline-none focus:ring" required />
                                {formIncomplete && (
                                    <div className="fixed bottom-24 left-0 z-10 w-full flex justify-center">
                                        <div className="bg-red-500 text-white py-2 px-4 rounded-lg">
                                            Veuillez remplir tous les champs obligatoires.
                                        </div>
                                    </div>
                                )}</div>
                        </form>
                    </section>
                    <section className="max-w-2xl p-6  bg-white rounded-xl shadow-md  mt-20">
                        <div className='flex gap-2 justify-start items-center mb-3'>
                            <div className='flex-col  gap-2'> <div className='bg-yellow-400 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">


                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="ic-lamp" fillRule="nonzero" fill="#FFFFFF">
                                            <path d="M14,15 L14,15 C14,15 17,10.7179603 17,8.86111111 C17,6.17639358 14.7614237,4 12,4 C9.23857625,4 7,6.17639358 7,8.86111111 C7,11.5458286 10,15 10,15 L14,15 Z M14,17 L10,17 L9.08801644,17 L8.49000407,16.3114543 C8.05227388,15.8074559 7.42989845,14.9980309 6.80434805,13.9978738 C6.16962621,12.983053 5.66962614,11.9751664 5.35561966,10.9828868 C5.12578781,10.2566042 5,9.55015675 5,8.86111111 C5,5.0590187 8.14641923,2 12,2 C15.8535808,2 19,5.0590187 19,8.86111111 C19,9.88033254 18.5978164,11.0183796 17.8910708,12.4133336 C17.6926413,12.8049882 17.4721551,13.2098586 17.2332398,13.6248118 C16.8847181,14.2301317 16.5138507,14.8283525 16.1430473,15.395869 C15.9195215,15.7379762 15.7434996,15.9970025 15.6380014,16.147585 L15.0407989,17 L14,17 Z M10,20 C9.44771525,20 9,19.5522847 9,19 C9,18.4477153 9.44771525,18 10,18 L14,18 C14.5522847,18 15,18.4477153 15,19 C15,19.5522847 14.5522847,20 14,20 L10,20 Z M11,23 C10.4477153,23 10,22.5522847 10,22 C10,21.4477153 10.4477153,21 11,21 L13,21 C13.5522847,21 14,21.4477153 14,22 C14,22.5522847 13.5522847,23 13,23 L11,23 Z M11.25,6 C10.9564596,6 10.5686937,6.06462764 10.1645898,6.26667961 C9.4501558,6.62389661 9,7.29913031 9,8.25 C9,8.66421356 9.33578644,9 9.75,9 C10.1642136,9 10.5,8.66421356 10.5,8.25 C10.5,7.88836969 10.6123442,7.71985339 10.8354102,7.60832039 C10.9938063,7.52912236 11.1685404,7.5 11.25,7.5 C11.6642136,7.5 12,7.16421356 12,6.75 C12,6.33578644 11.6642136,6 11.25,6 L11.25,6 Z" id="Combined-Shape">

                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            </div>
                            <h1 className='font-bold text-md '>Comment définir mon annonce</h1>
                        </div>
                        <div className='bg-yellow-100 p-6 w-auto rounded-lg' style={{ width: '420px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='flex items-center'>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_429_11086)">
                                        <circle cx="12" cy="11.9999" r="9" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="12" y="16" width="0.01" height="0.01" stroke="#B45309" strokeWidth="3.75" strokeLinejoin="round" />
                                        <path d="M12 12L12 8" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_429_11086">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='p-6 py-10 w-80 text-yellow-700 font-medium text-md ml-2'>Choisir la bonne catégorie lors de l'insertion d'une annonce peut aider à augmenter la visibilité, la pertinence et l'efficacité, et éviter tout potentiel refus.
                                    Il est important d'inclure une adresse postale claire et précise pour que les clients potentiels puissent facilement vous trouver.
                                    Assurez-vous d'inclure un numéro de téléphone auquel les clients potentiels peuvent vous joindre
                                    Gardez vos coordonnées à jour.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center underline' ><a className='flex justify-center items-center text-md py-3 font-bold text-gray-900' href="">Termes et conditions d’annonce</a>
                        </div>
                    </section>
                </div>

            </div>
            {showCities && (
                <>
                    <div onClick={() => setShowCities(!showCities)} className="absolute inset-0 z-10 bg-black opacity-50"></div>
                    <div className={`fixed inset-y-0 p-4 right-0 z-20 flex flex-col w-1/3 bg-white shadow-lg transition-transform duration-500 ${showCities ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-lg font-medium p-4 '>Ville - Secteur</h1>
                            <p className='text-2xl font-medium p-4 cursor-pointer' onClick={() => setShowCities(!showCities)}>
                                <svg width="20px" height="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <path style={{ fill: '#FDE047', stroke: '#730000', strokeWidth: 4 }} d="M 20,4 3,21 33,50 3,80 20,97 49,67 79,97 95,80 65,50 95,20 80,4 50,34 z" />
                                </svg>
                            </p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center p-2 border-2 h-14 justify-center rounded-3xl w-[27rem] border-yellow-500'>
                                <svg className="w-8 h-8 text-yellow-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <input
                                    className='block w-full p-4 ps-6 text-sm text-gray-900 rounded-2xl bg-gray-50 focus:ring-0 focus:border-0 outline-none border-none'
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search city..."
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                        {/* start cities */}
                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '100vh' }}>
                            {filteredCities.map(city => (
                                <div onClick={() => handleCitySelection(city.asciiname)} key={city.objectId} className='cursor-pointer flex items-center justify-between'>
                                    <h1 className='text-lg font-medium p-4'>{city.asciiname}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                </>
            )}
            {showCategories && (
                <>
                    <div onClick={() => setShowCategories(!showCategories)} className="absolute inset-0 z-10 bg-black opacity-50"></div>
                    <div className={`fixed inset-y-0 p-4 right-0  z-20 flex flex-col w-1/3 bg-white shadow-lg transition-transform duration-500 ${showCategories ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-lg font-medium p-4 '>Sélectionner la catégorie</h1>
                            <p className='text-2xl font-medium p-4 cursor-pointer' onClick={() => setShowCategories(!showCategories)}>
                                <svg width="20px" height="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <path style={{ fill: '#FDE047', stroke: '#730000', strokeWidth: 4 }} d="M 20,4 3,21 33,50 3,80 20,97 49,67 79,97 95,80 65,50 95,20 80,4 50,34 z" />
                                </svg>
                            </p>
                        </div>

                        <div className='flex flex-col p-4 overflow-y-auto' style={{ minHeight: '80vh' }}>
                            <div>
                                <div onClick={toggleDropdownMarriage} className='cursor-pointer flex justify-between  items-center '>
                                    <div className='flex items-center'>
                                        <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                xmlSpace="preserve">
                                                <g>
                                                    <g>
                                                        <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                        <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <h1 className='text-lg font-medium p-4'>Marriage</h1>
                                    </div>

                                    <svg
                                        className="w-6 h-6 transform rotate-90"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFD700"
                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                        />
                                    </svg>
                                </div>
                                {isDropdownMarriage && (<>
                                    <div>

                                        <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="11" onClick={handleSub}>Adoul/céremonie</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="9" onClick={handleSub}>Agence de voyage</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="8" onClick={handleSub}>Femme de Menage Freelance</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                            <div onClick={toggleDropdownLieudeReception} className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="2" onClick={handleSub2} >lieu de reception</h1>

                                                </div><svg
                                                    className="w-6 h-6 transform rotate-90"
                                                    viewBox="0 0 64 64"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="#FFD700"
                                                        d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                    />
                                                </svg>

                                            </div>
                                        </div>
                                        {isDropdownLieudeReception && (
                                            <>
                                                <div className='ml-6'>
                                                    
                                                    <div
                                                        className={`overflow-hidden transition-height duration-300 ${isDropdownLieudeReception ? 'h-auto' : 'h-0'
                                                            }`}
                                                    >
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="3" onClick={handleSous}>Salle de reception</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="1" onClick={handleSous}>Salle de fete</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                
                                                    <div>
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="2" onClick={handleSous}>Villa privée</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </>)}
                                    </div>
                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="12" onClick={handleSub}>Locataire des robes de mariée et tenues pour le marié </h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div onClick={toggleDropdownMusique2} className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="6"  onClick={handleSub2} >Musique</h1>
                                                </div>
                                                <svg
                                                    className="w-6 h-6 transform rotate-90"
                                                    viewBox="0 0 64 64"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="#FFD700"
                                                        d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        {isDropdownMusique2 && (
                                            <>
                                                <div className='ml-6'>
                                                    <div
                                                        className={`overflow-hidden transition-height duration-300 ${isDropdownMusique2 ? 'h-auto' : 'h-0'
                                                            }`}
                                                    >
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="9" onClick={handleSous}>amdah</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="8" onClick={handleSous}>Awniyat</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="6" onClick={handleSous}>DJ (animateur)</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="7" onClick={handleSous}>Issawa/DQAYQYA</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                                <div className='flex justify-end items-center'>
                                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                                            xmlSpace="preserve">
                                                                            <g>
                                                                                <g>
                                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                    <h1 className='text-md font-medium p-2 ' value="5" onClick={handleSous}>Orchestre Chaabi/Tarab</h1>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="4" onClick={handleSous}>Orchéstre</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                                </div>
                                            </>)}
                                    </div>
                                    <div>
                                        <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="3" onClick={handleSub}>Ngafa(planification de mariage)</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2 ' value="10" onClick={handleSub}>Pàtissrie/Wedding cake</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                            <div className='cursor-pointer flex justify-between  items-center'>
                                                <div className='flex justify-end items-center'>
                                                    <div className='bg-red-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="20px" height="20px" viewBox="0 0 556.213 556.213"
                                                            xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
                                                    c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
                                                    c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
                                                    M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
                                                    c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
                                                    c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
                                                    c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
                                                    M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
                                                    c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
                                                    C47.812,250.796,104.279,194.33,173.684,194.33z"/>
                                                                    <path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
                                                    c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <h1 className='text-md font-medium p-2' value="4" onClick={handleSub}>Tyafer/Chocolatier</h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>)}
                            </div>
                            <div>
                                <div onClick={toggleDropdownAniversaire} className='cursor-pointer flex justify-between  items-center'>
                                    <div className='flex items-center'>
                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                        </div>
                                        <h1 className='text-lg font-medium p-4'>Anniversaire</h1>
                                    </div><svg
                                        className="w-6 h-6 transform rotate-90"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFD700"
                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                        />
                                    </svg>
                                </div>
                                {/* sous category */}
                                {isDropdownAniversaire && (
                                    <>
                                        <div
                                            className={`overflow-hidden transition-height duration-300 ${isDropdownAniversaire ? 'h-auto' : 'h-0'
                                                }`}
                                        >
                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                <div onClick={toggleDropdownAdultes} className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                        </div>
                                                        <h1 className='text-md font-medium p-2 ' value="24" onClick={handleSub2} >Anniversaire pour adultes</h1>
                                                    </div>
                                                    <svg
                                                        className="w-6 h-6 transform rotate-90"
                                                        viewBox="0 0 64 64"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="#FFD700"
                                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isDropdownAdultes && (
                                                <>
                                                    <div className='ml-6'>
                                                        <div
                                                            className={`overflow-hidden transition-height duration-300 ${isDropdownAdultes ? 'h-auto' : 'h-0'
                                                                }`}
                                                        >
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="22" onClick={handleSous}>Decorateur de fete</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="24" onClick={handleSous}>Dj ou group de musique</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="25" onClick={handleSous}>Lieu de reception</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="21" onClick={handleSous}>Patissier ou boulanger</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="23" onClick={handleSous}>Photograph et videograph</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="20" onClick={handleSous}>Traiteur pour aniversaire adulte</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>)}

                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                <div onClick={toggleDropdownenfants} className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                        </div>
                                                        <h1 className='text-md font-medium p-2 'value="23" onClick={handleSub2} >Anniversaire pour enfants</h1>
                                                    </div>
                                                    <svg
                                                        className="w-6 h-6 transform rotate-90"
                                                        viewBox="0 0 64 64"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="#FFD700"
                                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isDropdownenfants && (
                                                <>
                                                    <div className='ml-6'>
                                                        <div
                                                            className={`overflow-hidden transition-height duration-300 ${isDropdownenfants ? 'h-auto' : 'h-0'
                                                                }`}
                                                        >
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="11" onClick={handleSous}>Animateur</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                               
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="12" onClick={handleSous}>Clown</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="15" onClick={handleSous}>Lieu de reception</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="18" onClick={handleSous}>Locataire de jeux d'attraction</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="19" onClick={handleSous}>Magasin de deguisements</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="13" onClick={handleSous}>Patissier ou boulanger</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="16" onClick={handleSous}>Photograph et videograph</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-violet-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><title /><path d="M20.65,26.08l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,20.65,26.08Z" /><path d="M13.18,26.08l-.06-.18L13,25.74l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,13.18,26.08Z" /><path d="M9.45,22.34l-.06-.18L9.31,22l-.12-.14a.92.92,0,0,0-1.32,0L7.75,22l-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L9,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,9.45,22.34Z" /><path d="M16.92,22.34l-.06-.18L16.78,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,16.92,22.34Z" /><path d="M19.72,17.25l-.06-.18-.08-.16-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,19.72,17.25Z" /><path d="M14.12,17.25l-.06-.18L14,16.92l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06.16-.08a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,14.12,17.25Z" /><path d="M24.39,22.34l-.06-.18L24.25,22l-.12-.14a.92.92,0,0,0-1.32,0l-.12.14-.08.16a1.27,1.27,0,0,0,0,.18.6.6,0,0,0,0,.19.92.92,0,0,0,.07.35,1,1,0,0,0,.21.3.82.82,0,0,0,.3.21,1,1,0,0,0,.36.07l.18,0,.18-.06L24,23.3a.59.59,0,0,0,.14-.12.82.82,0,0,0,.21-.3.92.92,0,0,0,.07-.35A1.23,1.23,0,0,0,24.39,22.34Z" /><path d="M7.6,17.86a.93.93,0,0,0,.93-.93V16a2.34,2.34,0,0,0,1.86.95,2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.65.56A2.61,2.61,0,0,0,16,16.93a2.61,2.61,0,0,0,2.15-1.31c.35-.47.46-.56.65-.56s.3.09.66.56a2.61,2.61,0,0,0,2.15,1.31,2.35,2.35,0,0,0,1.87-1v.95a.93.93,0,1,0,1.87,0V13.2a2.8,2.8,0,0,0-1.86-2.62v-2l.39-.39h0a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39V10.4H16.94V8.6l.39-.39a3.74,3.74,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.73,3.73,0,0,0,0,5.28l.39.39V10.4H10.4V8.6l.39-.39a3.73,3.73,0,0,0,0-5.28l-.66-.66a.93.93,0,0,0-1.32,0l-.66.66a3.74,3.74,0,0,0,0,5.28l.39.39v2A2.8,2.8,0,0,0,6.67,13.2v3.73A.93.93,0,0,0,7.6,17.86ZM16,4.26A1.87,1.87,0,0,1,16,6.9a1.87,1.87,0,0,1,0-2.64Zm6.54,0h0a1.87,1.87,0,0,1,0,2.64h0A1.87,1.87,0,0,1,22.54,4.26Zm-13.07,0a1.87,1.87,0,0,1,0,2.64A1.87,1.87,0,0,1,9.47,4.26Zm0,8H22.53a.93.93,0,0,1,.93.93v.21a3.29,3.29,0,0,0-1.21,1.1c-.35.47-.46.56-.66.56s-.3-.09-.66-.56a2.61,2.61,0,0,0-2.15-1.31,2.61,2.61,0,0,0-2.15,1.31c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a2.61,2.61,0,0,0-2.15-1.31A2.61,2.61,0,0,0,11,14.5c-.35.47-.46.56-.65.56s-.3-.09-.65-.56a3.29,3.29,0,0,0-1.21-1.1V13.2A.93.93,0,0,1,9.47,12.26Z" /><path d="M29.07,28.13h-.93V21.6a2.8,2.8,0,0,0-2.8-2.8H6.67a2.8,2.8,0,0,0-2.8,2.8v6.53H2.93a.93.93,0,1,0,0,1.87H29.07a.93.93,0,1,0,0-1.87ZM6.67,20.67H25.33a.93.93,0,0,1,.93.93v1.07a3.78,3.78,0,0,0-1.6,1.07c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.21.66s-.75-.2-1.21-.66a3.25,3.25,0,0,0-5.05,0c-.46.46-.68.66-1.2.66s-.75-.2-1.21-.66a3.78,3.78,0,0,0-1.59-1.07V21.6A.93.93,0,0,1,6.67,20.67Zm-.93,7.46V24.8l.27.26a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.2-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.05,0c.46-.46.68-.66,1.21-.66s.75.2,1.21.66a3.25,3.25,0,0,0,5.06,0l.28-.27v3.34Z" /></svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="10" onClick={handleSous}>Traiteur pour aniversaire d'enfants</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>)}
                                        </div>
                                    </>)}
                            </div>
                            <div>
                                <div onClick={toggleDropdownBabyShower} className='cursor-pointer flex justify-between items-center '>
                                    <div className='flex items-center'><div className='bg-yellow-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <svg width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" id="Слой_3" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="  M48.539,25.643c0.492,0,0.889,0.397,0.889,0.888c0,0.491-0.396,0.889-0.889,0.889c-0.49,0-0.887-0.397-0.887-0.889" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /><path d="  M25.625,39.723c-0.701,1.221-1.631,0.686-2.334,1.904c-0.701,1.221,0.229,1.756-0.475,2.977s-1.633,0.686-2.334,1.906" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="43.313" x2="39.947" y1="57.188" y2="55.076" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="14.16" x2="17.525" y1="12.083" y2="9.973" /><path d="  M52.412,8.641c-0.486,0.221-0.973,0.44-1.459,0.659" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  30.768,17.708 35.586,26.166 38.338,22.431 43.072,21.755 39.26,14.338 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  40.713,32 37.184,39.551 41.82,39.643 45.107,43.115 48.641,36.332 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  19.019,21.998 27.465,29.005 27.734,22.408 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  51.037,42.072 51.176,47.205 58.869,40.996 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M45.037,15.047l7.006,4.229l-1.242-11.38l-9.088,5.143l0.27,0.163c-8.521,3.58-17.199,6.864-26.016,9.843" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M60.803,41.771c-7.758-3.037-15.182-6.74-22.201-11.038" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M3.484,26.701c1.685-0.35,3.413-0.719,3.758-0.826v-0.002l-0.385-1.784l9.037-1.463l1.773,10.384l-4.717-0.78l-3.748,2.735  L8.127,29.98" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /></svg></div>
                                        <h1 className='text-lg font-medium p-4'>Baby Shower</h1>
                                    </div><svg
                                        className="w-6 h-6 transform rotate-90"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFD700"
                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                        />
                                    </svg>
                                </div>
                                {isDropdownBabyShower && (
                                    <>
                                        <div>
                                            <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-yellow-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" id="Слой_3" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="  M48.539,25.643c0.492,0,0.889,0.397,0.889,0.888c0,0.491-0.396,0.889-0.889,0.889c-0.49,0-0.887-0.397-0.887-0.889" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /><path d="  M25.625,39.723c-0.701,1.221-1.631,0.686-2.334,1.904c-0.701,1.221,0.229,1.756-0.475,2.977s-1.633,0.686-2.334,1.906" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="43.313" x2="39.947" y1="57.188" y2="55.076" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="14.16" x2="17.525" y1="12.083" y2="9.973" /><path d="  M52.412,8.641c-0.486,0.221-0.973,0.44-1.459,0.659" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  30.768,17.708 35.586,26.166 38.338,22.431 43.072,21.755 39.26,14.338 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  40.713,32 37.184,39.551 41.82,39.643 45.107,43.115 48.641,36.332 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  19.019,21.998 27.465,29.005 27.734,22.408 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  51.037,42.072 51.176,47.205 58.869,40.996 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M45.037,15.047l7.006,4.229l-1.242-11.38l-9.088,5.143l0.27,0.163c-8.521,3.58-17.199,6.864-26.016,9.843" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M60.803,41.771c-7.758-3.037-15.182-6.74-22.201-11.038" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M3.484,26.701c1.685-0.35,3.413-0.719,3.758-0.826v-0.002l-0.385-1.784l9.037-1.463l1.773,10.384l-4.717-0.78l-3.748,2.735  L8.127,29.98" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /></svg></div>
                                                        <h1 className='text-md font-medium p-2 ' value="20" onClick={handleSub}>Agence decoration</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-yellow-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" id="Слой_3" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="  M48.539,25.643c0.492,0,0.889,0.397,0.889,0.888c0,0.491-0.396,0.889-0.889,0.889c-0.49,0-0.887-0.397-0.887-0.889" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /><path d="  M25.625,39.723c-0.701,1.221-1.631,0.686-2.334,1.904c-0.701,1.221,0.229,1.756-0.475,2.977s-1.633,0.686-2.334,1.906" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="43.313" x2="39.947" y1="57.188" y2="55.076" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="14.16" x2="17.525" y1="12.083" y2="9.973" /><path d="  M52.412,8.641c-0.486,0.221-0.973,0.44-1.459,0.659" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  30.768,17.708 35.586,26.166 38.338,22.431 43.072,21.755 39.26,14.338 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  40.713,32 37.184,39.551 41.82,39.643 45.107,43.115 48.641,36.332 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  19.019,21.998 27.465,29.005 27.734,22.408 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  51.037,42.072 51.176,47.205 58.869,40.996 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M45.037,15.047l7.006,4.229l-1.242-11.38l-9.088,5.143l0.27,0.163c-8.521,3.58-17.199,6.864-26.016,9.843" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M60.803,41.771c-7.758-3.037-15.182-6.74-22.201-11.038" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M3.484,26.701c1.685-0.35,3.413-0.719,3.758-0.826v-0.002l-0.385-1.784l9.037-1.463l1.773,10.384l-4.717-0.78l-3.748,2.735  L8.127,29.98" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /></svg></div>
                                                        <h1 className='text-md font-medium p-2 ' value="10" onClick={handleSub}>Patissier ou boulanger</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-yellow-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" id="Слой_3" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="  M48.539,25.643c0.492,0,0.889,0.397,0.889,0.888c0,0.491-0.396,0.889-0.889,0.889c-0.49,0-0.887-0.397-0.887-0.889" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /><path d="  M25.625,39.723c-0.701,1.221-1.631,0.686-2.334,1.904c-0.701,1.221,0.229,1.756-0.475,2.977s-1.633,0.686-2.334,1.906" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="43.313" x2="39.947" y1="57.188" y2="55.076" /><line fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" x1="14.16" x2="17.525" y1="12.083" y2="9.973" /><path d="  M52.412,8.641c-0.486,0.221-0.973,0.44-1.459,0.659" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  30.768,17.708 35.586,26.166 38.338,22.431 43.072,21.755 39.26,14.338 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  40.713,32 37.184,39.551 41.82,39.643 45.107,43.115 48.641,36.332 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  19.019,21.998 27.465,29.005 27.734,22.408 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><polyline fill="none" points="  51.037,42.072 51.176,47.205 58.869,40.996 " stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M45.037,15.047l7.006,4.229l-1.242-11.38l-9.088,5.143l0.27,0.163c-8.521,3.58-17.199,6.864-26.016,9.843" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M60.803,41.771c-7.758-3.037-15.182-6.74-22.201-11.038" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" /><path d="  M3.484,26.701c1.685-0.35,3.413-0.719,3.758-0.826v-0.002l-0.385-1.784l9.037-1.463l1.773,10.384l-4.717-0.78l-3.748,2.735  L8.127,29.98" fill="none" stroke="#1B1D1E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7" /></svg></div>
                                                        <h1 className='text-md font-medium p-2 ' value="22" onClick={handleSub}>Traiteur pour Baby Shower</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div>
                                <div onClick={toggleDropdownConferance} className='cursor-pointer flex justify-between items-center '>
                                    <div className='flex items-center'> <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></div>
                                        <h1 className='text-lg font-medium p-4'>Conférence</h1>
                                    </div><svg
                                        className="w-6 h-6 transform rotate-90"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFD700"
                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                        />
                                    </svg>
                                </div>
                                {isDropdownConferance && (
                                    <>
                                        <div>
                                            <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                                <div onClick={toggleDropdownColloque} className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h1 className='text-md font-medium p-2 ' value="25" onClick={handleSub2} >Colloque</h1>
                                                    </div>
                                                    <svg
                                                        className="w-6 h-6 transform rotate-90"
                                                        viewBox="0 0 64 64"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="#FFD700"
                                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isDropdownColloque && (
                                                <>
                                                    <div className='ml-6'>
                                                        <div
                                                            className={`overflow-hidden transition-height duration-300 ${isDropdownColloque ? 'h-auto' : 'h-0'
                                                                }`}
                                                        >
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="27" onClick={handleSous}>Salle Hotel</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="26" onClick={handleSous}>Traiteur de Conference</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>)}
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div onClick={toggleDropdownEvenementProfessionnel} className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h1 className='text-md font-medium p-2 ' value="26" onClick={handleSub2} >Evenement professionnel</h1>
                                                    </div>
                                                    <svg
                                                        className="w-6 h-6 transform rotate-90"
                                                        viewBox="0 0 64 64"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="#FFD700"
                                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isDropdownEvenementProfessionnel && (
                                                <>
                                                    <div className='ml-6'>
                                                        <div
                                                            className={`overflow-hidden transition-height duration-300 ${isDropdownEvenementProfessionnel ? 'h-auto' : 'h-0'
                                                                }`}
                                                        >
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="29" onClick={handleSous}>Salle Hotel</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="28" onClick={handleSous}>Traiteur de Event pro</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>)}
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div onClick={toggleDropdownSeminaire} className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <h1 className='text-md font-medium p-2 ' value="27" onClick={handleSub2} >Séminaire</h1>
                                                    </div>
                                                    <svg
                                                        className="w-6 h-6 transform rotate-90"
                                                        viewBox="0 0 64 64"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="#FFD700"
                                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isDropdownSeminaire && (
                                                <>
                                                    <div className='ml-6'>
                                                        <div
                                                            className={`overflow-hidden transition-height duration-300 ${isDropdownSeminaire ? 'h-auto' : 'h-0'
                                                                }`}
                                                        >
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="31" onClick={handleSous}>Salle Hotel</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-blue-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 12H2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M7 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M17 12V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                        <h1 className='text-md font-medium p-2 ' value="30" onClick={handleSous}>Traiteur de Seminaire</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>)}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div>
                                <div onClick={toggleDropdownFete} className='cursor-pointer flex justify-between items-center '>
                                    <div className='flex items-center'>
                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>
                                        <h1 className='text-lg font-medium p-4'>Fete de naissance</h1>
                                    </div>
                                    <svg
                                        className="w-6 h-6 transform rotate-90"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#FFD700"
                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                        />
                                    </svg>
                                </div>
                                {isDropdownFete && (
                                    <>
                                        <div>
                                            <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="13" onClick={handleSub}>Artiste ou animateur</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="14" onClick={handleSub}>Décorateur de fete</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="15" onClick={handleSub}>henné</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="16" onClick={handleSub}>lieu de reception</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="17" onClick={handleSub}>Location de materiel Patissier ou Boulanger</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div onClick={toggleDropdownMusique} className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="6" onClick={handleSub}>Musique</h1>
                                                    </div>
                                                    <svg
                                                        className="w-6 h-6 transform rotate-90"
                                                        viewBox="0 0 64 64"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="#FFD700"
                                                            d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isDropdownMusique && (
                                                <>
                                                    <div className='ml-6'>
                                                        <div
                                                            className={`overflow-hidden transition-height duration-300 ${isDropdownMusique ? 'h-auto' : 'h-0'
                                                                }`}
                                                        >
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                                        <h1 className='text-md font-medium p-2 ' value="9" onClick={handleSous}>amdah</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                                        <h1 className='text-md font-medium p-2 ' value="8" onClick={handleSous}>Awniyat</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                                        <h1 className='text-md font-medium p-2 ' value="6" onClick={handleSous}>DJ (animateur)</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                                        <h1 className='text-md font-medium p-2 ' value="7" onClick={handleSous}>Issawa/DQAYQYA</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className='flex flex-col p-4 overflow-y-auto' style={{ maxHeight: '30vh' }}>
                                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                                    <div className='flex justify-end items-center'>
                                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                                        <h1 className='text-md font-medium p-2 ' value="5" onClick={handleSous}>Orchestre Chaabi/Tarab</h1>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>)}
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4 ' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="5" onClick={handleSub}>Photograph et vidéograph</h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col p-4' style={{ maxHeight: '30vh' }}>
                                                <div className='cursor-pointer flex justify-between  items-center'>
                                                    <div className='flex justify-end items-center'>
                                                        <div className='bg-orange-200 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" /> </svg></div>

                                                        <h1 className='text-md font-medium p-2 ' value="19"  onClick={handleSub}>Traiteur pour sbouaa</h1>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </>
            )}
            <div className="fixed left-0 bottom-0 z-0 bg-white w-screen flex justify-end items-center h-18 px-10 py-2 shadow-md" style={{ boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)' }}>
                <button onClick={handleContinueClick} className='bg-yellow-600 text-white p-4 mr-24 rounded-lg' type='submit' to='/src/Components/AnnounceForm2.jsx'>CONTINUER</button>
            </div>

        </>
    );
};

export default AnnounceForm;