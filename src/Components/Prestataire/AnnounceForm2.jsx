/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
/* eslint-disable react/no-unescaped-entities */
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
const AnnounceForm = () => {

    const category = localStorage.getItem("category");

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [formIncomplete, setFormIncomplete] = useState(false);
    const navigate = useNavigate();

    const handleContinueClick = () => {
        // Check if any required fields are empty
        if (!title || !price || !description) {
            setFormIncomplete(true);
            setTimeout(() => {
                setFormIncomplete(false);
            }, 3000);
        } else {

            setFormIncomplete(false);
            
            localStorage.setItem("title",title);
            localStorage.setItem("price",price);
            localStorage.setItem("description", description);// Make sure to set it to false if the conditions are met immediately     
            navigate('/AnnounceForm3');
        }
    };

    return (
        <>
            <div className='h-[115vh] bg-gray-100'>
                <div className="fixed bg-white w-screen flex justify-center gap-40 items-center h-18 px-10 py-2 shadow-gray shadow-md">
                    <div className="flex items-center">
                        <Link className='bg-yellow-500 text-white p-2 mr-24 rounded-lg' to='/AnnounceForm'><svg fill="#FFFFFF" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 21.984q0.032-0.8 0.608-1.376l4-4q0.448-0.48 1.056-0.576t1.12 0.128 0.864 0.736 0.352 1.12v1.984h18.016q0.8 0 1.408-0.576t0.576-1.408v-8q0-0.832-0.576-1.408t-1.408-0.608h-16q-0.736 0-1.248-0.416t-0.64-0.992 0-1.152 0.64-1.024 1.248-0.416h16q2.464 0 4.224 1.76t1.76 4.256v8q0 2.496-1.76 4.224t-4.224 1.76h-18.016v2.016q0 0.64-0.352 1.152t-0.896 0.704-1.12 0.096-1.024-0.544l-4-4q-0.64-0.608-0.608-1.44z"></path>
                        </svg>
                        </Link>
                        <div className='bg-green-500 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <svg width="20px" height="20px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD700" className="cls-1" d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z" /></svg>
                        <div className='bg-yellow-500 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20V22ZM12.4453 4.01216C12.9968 4.04235 13.4683 3.61979 13.4985 3.06833C13.5287 2.51687 13.1061 2.04535 12.5547 2.01515L12.4453 4.01216ZM11.7627 9.23726L11.0556 8.53015L11.7627 9.23726ZM17.411 3.58902L18.1181 4.29613L17.411 3.58902ZM9 15L8.01005 14.8586C7.96411 15.1802 8.07723 15.504 8.3134 15.727C8.54957 15.9501 8.87936 16.0445 9.19778 15.9802L9 15ZM9.04745 14.6678L8.0575 14.5264L8.0575 14.5264L9.04745 14.6678ZM9.48793 14.9016L9.29015 13.9213L9.48793 14.9016ZM12.8012 13.7247L12.2287 12.9048H12.2287L12.8012 13.7247ZM11.564 14.3882L11.9302 15.3187H11.9302L11.564 14.3882ZM10.1791 10.9786L9.34943 10.4203V10.4203L10.1791 10.9786ZM9.49029 12.3561L8.54586 12.0274V12.0274L9.49029 12.3561ZM16.7071 4.29289C16.3166 3.90237 15.6834 3.90237 15.2929 4.29289C14.9024 4.68342 14.9024 5.31658 15.2929 5.70711L16.7071 4.29289ZM18.1213 8.53553C18.5118 8.92606 19.145 8.92606 19.5355 8.53553C19.9261 8.14501 19.9261 7.51184 19.5355 7.12132L18.1213 8.53553ZM16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18V16ZM21.88 10.8011C21.7701 10.2598 21.2423 9.91012 20.701 10.02C20.1598 10.1299 19.8101 10.6577 19.92 11.1989L21.88 10.8011ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C12.1495 4 12.298 4.00409 12.4453 4.01216L12.5547 2.01515C12.371 2.00509 12.186 2 12 2V4ZM12.4698 9.94436L18.1181 4.29613L16.7039 2.88191L11.0556 8.53015L12.4698 9.94436ZM19.5323 5.71034L13.6703 11.5723L15.0845 12.9865L20.9465 7.12455L19.5323 5.71034ZM9.98995 15.1414L10.0374 14.8093L8.0575 14.5264L8.01005 14.8586L9.98995 15.1414ZM9.29015 13.9213L8.80222 14.0198L9.19778 15.9802L9.68571 15.8818L9.29015 13.9213ZM13.6703 11.5723C12.8844 12.3582 12.5736 12.664 12.2287 12.9048L13.3737 14.5447C13.8964 14.1797 14.3472 13.7239 15.0845 12.9865L13.6703 11.5723ZM9.68571 15.8818C10.7079 15.6755 11.3371 15.5522 11.9302 15.3187L11.1977 13.4577C10.8064 13.6118 10.3796 13.7015 9.29015 13.9213L9.68571 15.8818ZM12.2287 12.9048C11.9079 13.1288 11.5618 13.3144 11.1977 13.4577L11.9302 15.3187C12.44 15.1181 12.9245 14.8583 13.3737 14.5447L12.2287 12.9048ZM11.0556 8.53015C10.243 9.34283 9.74031 9.83942 9.34943 10.4203L11.0087 11.5369C11.2665 11.1538 11.6034 10.8108 12.4698 9.94436L11.0556 8.53015ZM10.0374 14.8093C10.2107 13.5963 10.2829 13.121 10.4347 12.6848L8.54586 12.0274C8.31572 12.6886 8.22004 13.3887 8.0575 14.5264L10.0374 14.8093ZM9.34943 10.4203C9.01364 10.9192 8.74356 11.4594 8.54586 12.0274L10.4347 12.6848C10.5759 12.2791 10.7688 11.8933 11.0087 11.5369L9.34943 10.4203ZM19.5323 4.29613C19.9228 4.68665 19.9228 5.31981 19.5323 5.71034L20.9465 7.12455C22.1181 5.95298 22.1181 4.05348 20.9465 2.88191L19.5323 4.29613ZM20.9465 2.88191C19.7749 1.71034 17.8754 1.71034 16.7039 2.88191L18.1181 4.29613C18.5086 3.9056 19.1418 3.9056 19.5323 4.29613L20.9465 2.88191ZM15.2929 5.70711L18.1213 8.53553L19.5355 7.12132L16.7071 4.29289L15.2929 5.70711ZM20 12C20 14.2091 18.2091 16 16 16V18C19.3137 18 22 15.3137 22 12H20ZM19.92 11.1989C19.9723 11.4569 20 11.7247 20 12H22C22 11.5903 21.9588 11.1893 21.88 10.8011L19.92 11.1989Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                        <div className='px-2'>
                            <h1 className='font-bold text-md text-yellow-500'>Détails de l’annonce</h1>
                            <p className='text-yellow-500'>Ajouter plus de détails de votre annonce</p>
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
                        <a href="">Quitter</a>
                    </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <section className="max-w-2xl p-6 bg-white rounded-xl shadow-md  mt-20">
                        <h1 className="text-2xl font-bold text-black capitalize ">Détails de l'annonce</h1>
                        <h4 className="text-md font-semibold capitalize text-gray-500">Ajouter plus de détails sur votre annonce pour un maximum de visbilité</h4>
                        <form>
                            <div className="flex-col gap-6 mt-4 ">
                                <div>
                                    <label className="text-md ml-3 font-medium" >Catégorie</label>
                                    <div>
                                        <div className="flex  ml-2 items-center justify-between w-full px-4 h-14 mb-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300  focus:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring">
                                            <div className="flex">

                                                <h1 className='m-2 text-black font-semibold text-md'>{category}</h1>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h1 className='font-semibold text-2xl'>Information de l'annonce</h1>
                                    <p className='text-gray-500 text-md py-5'>Une annonce avec un prix exacte et une description bien détaillé a 10 fois plus de visibilité </p>
                                </div>
                                <div className='w-[40rem]'>
                                <div className=' flex m-1 items-center ' >
                                    <div className='bg-gray-100 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <svg fill="#000000" width="20px" height="20px" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" ><path d="m13.842 11.52-4.389 4.388a1.112 1.112 0 0 1-1.567 0l-6.28-6.28a3.027 3.027 0 0 1-.771-1.892l.043-3.681A1.141 1.141 0 0 1 2 2.935L5.67 2.9a3.04 3.04 0 0 1 1.892.773l6.28 6.28a1.112 1.112 0 0 1 0 1.567zM3.826 5.133a.792.792 0 1 0-.792.792.792.792 0 0 0 .792-.792zm6.594 7.348a.554.554 0 0 0 0-.784l-.401-.401a2.53 2.53 0 0 0 .35-.83 1.565 1.565 0 0 0-.397-1.503 1.59 1.59 0 0 0-1.017-.46 2.14 2.14 0 0 0-.75.085h-.002a2.444 2.444 0 0 0-.59.277H7.61a2.677 2.677 0 0 0-.438.357 2.043 2.043 0 0 1-.259.22 1.29 1.29 0 0 1-.329.17h-.002a.835.835 0 0 1-.338.038h-.002a.53.53 0 0 1-.314-.136.539.539 0 0 1-.106-.534 1.54 1.54 0 0 1 .41-.71 1.632 1.632 0 0 1 .23-.165l.03-.019a1.783 1.783 0 0 1 .322-.155.942.942 0 0 1 .325-.06.554.554 0 0 0 0-1.108h-.001a2.058 2.058 0 0 0-.717.132 2.846 2.846 0 0 0-.529.26l-.01.006-.398-.4a.554.554 0 1 0-.784.785l.388.387a2.513 2.513 0 0 0-.347.803 1.644 1.644 0 0 0 .404 1.561 1.622 1.622 0 0 0 .983.456 1.922 1.922 0 0 0 .805-.089 2.372 2.372 0 0 0 .624-.319 3.142 3.142 0 0 0 .398-.339 1.569 1.569 0 0 1 .256-.208 1.381 1.381 0 0 1 .32-.151 1.023 1.023 0 0 1 .348-.038.485.485 0 0 1 .308.139c.05.049.165.165.097.488a1.558 1.558 0 0 1-.413.729 2.476 2.476 0 0 1-.28.219 1.727 1.727 0 0 1-.306.157.687.687 0 0 1-.32.042.554.554 0 1 0-.08 1.106c.052.004.103.005.152.005a1.723 1.723 0 0 0 .685-.134 2.678 2.678 0 0 0 .507-.27l.01-.007.397.398a.555.555 0 0 0 .783 0z" /></svg>
                                    </div>
                                    <label className="text-md font-medium" ><span className='text-red-500'>*</span>Prix(MAD)</label>
                                   
                                    </div>
                                    <div className="flex">

                                        <input placeholder='0' className='flex items-center justify-between w-full px-4 h-14  mb-3 py-2 mt-2 bg-white border border-gray-300 rounded-md    focus:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring m-2  text-black font-semibold text-md' 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} type="number" />
                                    </div>
                                     


                                </div>
                                <div className=' gap-2 items-center flex'>
                                    
                                    <div className='bg-gray-100 m-1 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <svg 
                                        width="26"
                                        height="26"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13 9H10V17H8V9H5V7H13V9ZM18 13H16V17H14V13H12V11H18V13Z"
                                            fill="#000000"
                                        />
                                        </svg>
                                    </div>
                                    <div>
                                        <label className="text-md font-medium" ><span className='text-red-500'>*</span>Titre de lannonce</label>
                                    </div>
                                </div><input id="title" type="text" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} className="block ml-2 w-full h-14 font-bold text-md py-2 px-2 mt-2  bg-white border border-gray-300 rounded-md  focus:border-yellow-500  focus:outline-none focus:ring" />

                                <div className=' gap-2 items-center flex'>
                                    <div className='bg-gray-100 m-1 rounded-full' style={{ width: '35px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M21,20H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,20,21,20z M10,4h11c0.6,0,1-0.4,1-1s-0.4-1-1-1H10C9.4,2,9,2.4,9,3S9.4,4,10,4z M21,16H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,16,21,16z M21,10H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,10,21,10z M21,6H3C2.4,6,2,6.4,2,7s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,6,21,6z"/></svg>
                                    </div>
                                    <div>
                                        <label className="text-md font-medium" ><span className='text-red-500'>*</span>Texte de l'annonce</label>
                                    </div>
                                </div>
                                <input id="description" 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} type="text" className="block ml-2 w-full h-64 font-bold text-md py-2 px-2 mt-2  bg-white border border-gray-300 rounded-md  focus:border-yellow-500  focus:outline-none focus:ring" />
                            </div>
                            {formIncomplete && (
                                    <div className="fixed bottom-24 left-0 z-10 w-full flex justify-center">
                                        <div className="bg-red-500 text-white py-2 px-4 rounded-lg">
                                            Veuillez remplir tous les champs obligatoires.
                                        </div>
                                    </div>
                                )}
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
                            <h1 className='font-bold text-md '>Comment décrire mon annonce</h1>
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
                                <p className='p-6 py-10 w-80 text-yellow-700 font-medium text-md ml-2'>    Choisir la marque et le modèle est important car cela fournit aux acheteurs potentiels des informations spécifiques sur l'article que vous vendez. Cela aide également à attirer le public cible qui recherche cette marque ou ce modèle spécifique.
                                    ainsi que toute autre information qui pourrait être pertinente.
                                    Fournir un prix et des informations détaillées sur l'article peut aider à attirer le public cible, construire la confiance avec les acheteurs potentiels et les aider à prendre une décision informée sur l'achat de l'article.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center underline' ><a className='flex justify-center items-center text-md py-3 font-bold text-gray-900' href="">Termes et conditions d’annonce</a>
                        </div>
                    </section>
                </div>

            </div>

            <div className="fixed left-0 bottom-0 z-0 bg-white w-screen flex justify-end items-center h-18 px-10 py-2 shadow-md" style={{ boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)' }}>
                <button onClick={handleContinueClick} className='bg-yellow-600 text-white p-4 mr-24 rounded-lg' type='submit' to='/AnnounceForm3'>CONTINUER</button>
            </div>

        </>
    );
};

export default AnnounceForm;