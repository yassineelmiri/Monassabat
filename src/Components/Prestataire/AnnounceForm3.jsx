/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AnnounceForm = () => {
    const [images, setImages] = useState([]);
    const [formIncomplete, setFormIncomplete] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    
    const handleFileChange = (event) => {
        const fileList = event.target.files;
        const totalImages = images.length + fileList.length;

        if (totalImages > 5) {
            setFormIncomplete(true);
            setTimeout(() => {
                setFormIncomplete(false);
            }, 3000);
            return;
        }
        
        const imageArray = Array.from(fileList).map((file) => ({
            url: URL.createObjectURL(file),
            file: file,
        }));
        setImages((prevImages) => [...prevImages, ...imageArray]);
    };

    const handleDelete = (index, event) => {
        event.preventDefault();
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    const handleContinueClick = async () => {
        if (images.length === 0) {
            setFormIncomplete(true);
            setTimeout(() => {
                setFormIncomplete(false);
            }, 3000);
        } else {
            setFormIncomplete(false);
            try {
                const token = localStorage.getItem('token');
                const title = localStorage.getItem('title');
                const description = localStorage.getItem('description');
                const location = localStorage.getItem('location');
                const sub_category_id = localStorage.getItem('sub_category_id');
                const sous_category_id = localStorage.getItem('sous_category_id');
                const price = localStorage.getItem('price');

                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', description);
                formData.append('location', location);
                formData.append('sub_category_id', sub_category_id);
                formData.append('sous_category_id', sous_category_id);
                formData.append('price', price);
                images.forEach((image) => {
                    formData.append('image[]', image.file);
                });
                

                const response = await fetch('http://api.mounassabat.ma/api/annonce/create', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Failed to create announce');
                }

                const data = await response.json();
                console.log(data);
                setSuccessMessage('Annonce created successfully!');
                setTimeout(() => {
                    navigate('/Annonces'); // Redirect after showing success message
                }, 3000);
            } catch (error) {
                console.error('Error creating announce:', error);
            }
        }
    };
  
    return (
        <>
            <div className='h-[123vh] bg-gray-100'>
                <div className="fixed bg-white w-screen flex justify-center gap-40 items-center h-18 px-10 py-2 shadow-gray shadow-md">
                    <div className="flex items-center">
                        <Link className='bg-yellow-500 text-white p-2 mr-24 rounded-lg' to='/AnnounceForm2'><svg fill="#FFFFFF" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 21.984q0.032-0.8 0.608-1.376l4-4q0.448-0.48 1.056-0.576t1.12 0.128 0.864 0.736 0.352 1.12v1.984h18.016q0.8 0 1.408-0.576t0.576-1.408v-8q0-0.832-0.576-1.408t-1.408-0.608h-16q-0.736 0-1.248-0.416t-0.64-0.992 0-1.152 0.64-1.024 1.248-0.416h16q2.464 0 4.224 1.76t1.76 4.256v8q0 2.496-1.76 4.224t-4.224 1.76h-18.016v2.016q0 0.64-0.352 1.152t-0.896 0.704-1.12 0.096-1.024-0.544l-4-4q-0.64-0.608-0.608-1.44z"></path>
                        </svg>
                        </Link>
                        <div className='bg-green-500 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-green-500 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-yellow-500 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg fill="#FFFFFF" width="20px" height="20px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" /></svg>
                        </div>
                        <div className='px-2'>
                            <h1 className='font-bold text-md text-yellow-500'>Photos de l’annonce</h1>
                            <p className='text-yellow-500'>Ajouter des photos de bonne qualité</p>
                        </div>
                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-gray-300 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <a href="">Quitter</a>
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <section className="w-[42rem] p-6 bg-white rounded-xl shadow-md  mt-20">
                        <h1 className="text-2xl font-bold text-black capitalize ">Photos de l’annonce</h1>
                        <h4 className="text-md font-semibold capitalize text-gray-500">Ajouter des photos sur votre annonce pour un maximum de visbilité</h4>
                        <form>
                <div className="flex-col ml-12 justify-center gap-6 mt-4">
                    <div className="flex items-center ml-9 mt-5 mb-3 justify-center w-96">
                        <div className="flex ml-12 items-center justify-center">
                            <label className="flex flex-col items-center justify-center w-[30rem] h-64 border-2 border-yellow-300 border-dashed rounded-lg cursor-pointer bg-yellow-50 -800 hover:bg-yellow-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                    <p className="mb-2 text-sm text-yellow-500 dark:text-yellow-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-yellow-500 dark:text-yellow-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    multiple // Allow multiple file selection
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex w-[31rem] mb-2 ml-6 flex-wrap gap-2">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={image.url} alt={`Image ${index + 1}`} className="max-w-22 rounded-md max-h-36" />
                                <button
                                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                    onClick={(event) => handleDelete(index, event)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    {formIncomplete && (
                        <div className="fixed bottom-24 left-0 z-10 w-full flex justify-center">
                            <div className="bg-red-500 text-white py-2 px-4 rounded-lg">
                                Maximum number of photos allowed is 5.
                            </div>
                        </div>
                    )}
                    <div className='bg-yellow-100 p-6 w-96 rounded-lg' style={{ width: '500px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                            <p className='p-6 py-10 w-96 text-yellow-700 font-medium text-sm ml-2'>Réorganisez les photos pour modifier la couverture.</p>
                        </div>
                    </div>
                </div>
               
                {formIncomplete && (
                    <div className="fixed bottom-24 left-0 z-10 w-full flex justify-center">
                        <div className="bg-red-500 text-white py-2 px-4 rounded-lg">
                            Veuillez remplir tous les champs obligatoires.
                        </div>
                    </div>
                )}
                {successMessage && (
                <div className="fixed bottom-24 left-0 z-10 w-full flex justify-center">
                    <div className="bg-green-500 text-white py-2 px-4 rounded-lg">
                        {successMessage}
                    </div>
                </div>
            )}
            </form>
                    </section>
                    <section className="w-[28rem] p-6  bg-white rounded-xl shadow-md  mt-20">
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
                            <h1 className='font-bold text-md '>Comment joindre la photo et la vidéo sur mon annonce.</h1>
                        </div>
                        <div className='bg-yellow-100 p-6 w-auto rounded-lg' style={{ width: '400px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                                <p className='p-6 py-10 w-80 text-yellow-700 font-medium text-md ml-2'>Fournir de bonnes photos du produit est également important, cela peut aider à donner à l'acheteur potentiel une idée claire de l'état et de l'apparence du produit.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center underline' ><a className='flex justify-center items-center text-md py-3 font-bold text-gray-900' href="">Termes et conditions d’annonce</a>
                        </div>
                    </section>
                </div>

            </div>
            <div className="fixed left-0 bottom-0 z-0 bg-white w-screen flex justify-end items-center h-18 px-10 py-2 shadow-md" style={{ boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)' }}>
                <button onClick={handleContinueClick} className='bg-yellow-600 text-white p-4 mr-24 rounded-lg' type='submit'>CONTINUER</button>
            </div>


        </>
    );
};

export default AnnounceForm;