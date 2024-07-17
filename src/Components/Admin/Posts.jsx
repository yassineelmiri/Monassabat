import React, { useEffect, useState } from 'react';
import logo from '/src/assets//logo.png'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


const Posts = () => {
    const [annonces, setAnnonces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [message, setMessage] = useState('');
    const [DeleteMessage, setDeletedMessage] = useState('');



    useEffect(() => {
        fetchAllAnnonces(currentPage);
    }, [currentPage]);

    const fetchAllAnnonces = async (page) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }

            const response = await fetch(`http://api.mounassabat.ma/api/getAllAnnonces?page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setAnnonces(data.data);
                setTotalPages(data.last_page);
            } else {
                console.error('Failed to fetch Reclamations:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching Reclamations:', error);
        }
    }

    const deleteAnnonce = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }
            const response = await fetch(`http://api.mounassabat.ma/api/deleteAnnonces/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setAnnonces(annonces.filter(annonce => annonce.id !== id));
            setDeletedMessage('Annonce deleted successfully');

            setTimeout(() => {
                setDeletedMessage('');
            }, 3000);
            } catch (error) {
            console.error('Error deleting annonce:', error);
            setMessage('Failed to delete annonce');
        }
    };

    const acceptAnnonce = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }
            const response = await fetch(`http://api.mounassabat.ma/api/acceptAnnonce/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to accept annonce');
            }

            // Update annonces state to reflect the change
            const updatedAnnonces = annonces.map(annonce => {
                if (annonce.id === id) {
                    return { ...annonce, accepted_at: data.accepted_at };
                }
                return annonce;
            });
            setAnnonces(updatedAnnonces);

            // Set success message
            setMessage(data.message || 'Annonce accepted successfully');

            // Clear message after 3 seconds
            setTimeout(() => {
                setMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error accepting annonce:', error);
            // Optionally, set an error message if needed
            setMessage(error.message || 'Failed to accept annonce');
        }
    };



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
    <div className="flex">
               <aside className="flex flex-col w-[320px] h-screen overflow-x-hidden overflow-y-auto  -r rtl:-r-0 rtl:-l  dark:bg-black">
                            <a href="#" className="mx-auto">
                                <img className="w-32 h-28 py-2" src={logo} alt="" />
                            </a>
                            <div className="w-full h-[1px] bg-white"></div>
        
                            <div className="flex flex-col items-center mt-6 -mx-2">
                                <img className="object-cover w-16 h-16 mx-2 rounded-full"  alt="avatar" />
                                <h4 className="mx-2 mt-2 font-bold text-black ">RAJI OTHMANE</h4>
                            </div>
        
                            <div className="w-full h-[1px] mt-5 bg-white"></div>
        
                            <div className="flex flex-col justify-between flex-1 mt-6">
                                <nav>
                                    <Link to="/Dashboard" id="dashboard" className="flex items-center px-4 py-2 text-gray-300 rounded-lg cursor-pointer">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                                        </svg>
        
        
                                        <span className="mx-4 font-medium">Dashboard</span>
                                    </Link>
        
                                    <Link to="/Prestataires" className="flex items-center px-4 py-2 mt-5 text-gray-300 transition-colors duration-300 transform rounded-lg hover:text-yellow-600" href="Prestataires">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
        
                                        <span className="mx-4 font-medium">Prestataires</span>
                                    </Link>
        
                                    <Link to="/Clients" className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Annonces">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
        
                                        <span className="mx-4 font-medium">Clients</span>
                                    </Link>
        
                                    <Link to="/Reclamations" className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Reclamations">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
        
        
                                        <span className="mx-4 font-medium">Reclamations</span>
                                    </Link>
        
                                    <Link to="/Posts" className="flex items-center px-4 py-2 mt-5 text-yellow-600 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Clients">
                                        <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                        </svg>
        
        
                                        <span className="mx-4 font-medium">Annonces</span>
                                    </Link>
        
                                    
        
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="login">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                        </svg>
        
        
                                        <span className="mx-4 font-medium">Log out</span>
                                    </a>
                                </nav>
                            </div>
                        </aside>
                        <div className="bg-white h-screen w-[1px]"></div>
                        <section class="relative p-5 bg-black w-full">
                            <div class="flex gap-2 text-center items-center">
                                <svg class="w-9 h-9 text-orange-500 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="flex text-center items-center mt-2 gap-2">
                                    <h1 class="text-3xl text-white font-bold font-mono">Annonces</h1>
                                    <h1 class="text-sm text-gray-300 mt-2">135</h1>
                                </div>
                            </div>
                            <div class="bg-white w-full h-[1px] mt-4"></div>



                                <div className="flex justify-center py-5">
                                    {message && <p className="text-white text-lg px-5 py-2 text-center font-bold font-serif bg-green-500 rounded-sm">{message}</p>}
                                    {DeleteMessage && <p className="text-white text-lg px-5 py-2 text-center font-bold font-serif bg-red-500 rounded-sm">{DeleteMessage}</p>}
                                </div>

                                <div className="flex flex-wrap px-2 py-5 gap-5">
                                {annonces.map((annonce) => (
                                   <div key={annonce.id} className="w-[25%] h-[20%]">
                                       <div className="w-full h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                           <img className="object-cover object-center w-full h-32" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                           
                                           <div className="flex items-center px-6 py-3 bg-gray-900">
                                               <svg aria-label="headphones icon" className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path fillRule="evenodd" clipRule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
                                               </svg>
                           
                                               <h1 className="mx-3 text-lg font-semibold text-white">{annonce.title}</h1>
                                           </div>
                           
                                           <div className="px-6 py-2 w-full">
                                               <p className="text-gray-700 dark:text-gray-400">{annonce.description}</p>
                           
                                               <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                   <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                       <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
                                                       <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
                                                       <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                                                   </svg>
                                                   <h1 className="px-2 text-sm">{annonce.price}</h1>
                                               </div>
                           
                                               <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                                   <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                       <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                   </svg>
                                                   <h1 className="px-2 text-sm">{annonce.user.id}: {annonce.user.firstName} {annonce.user.lastName}</h1>
                                               </div>

                                               <div className="flex justify-center py-5 gap-2 ">
                                                    <button id="accepte" onClick={() => acceptAnnonce(annonce.id)} className="bg-blue-500 hover:bg-blue-600 duration-500 px-2 py-2 rounded-full">
                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                                                        </svg>
                                                    </button>
                                                    <button id="delete" onClick={() => deleteAnnonce(annonce.id)} className="bg-red-500 hover:bg-red-600 duration-500 px-2 py-2 rounded-full">
                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                                        </svg>
                                                    </button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               ))}
                           </div>
                                    
                                <div className="flex w-[90%] mx-auto gap-96 justify-center absolute mt-5">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className={`px-8 py-3 mx-2 text-sm font-medium text-white bg-yellow-600 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}>
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className={`px-8 py-3 mx-2 text-sm font-medium text-white bg-yellow-600 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}>
                                        Next
                                    </button>
                                </div>
                        </section>

                        </div>
    );
}

export default Posts;