import React, { useEffect, useState } from 'react';
import logo from '/src/assets//logo.png'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


const Prestataires = () => {

    const [prestataires, setPrestataires] = useState([]);


    useEffect(() => {
        fetchAllPrestataires();
    }, []);

    const fetchAllPrestataires = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }

            const response = await fetch('http://api.mounassabat.ma/api/getAllPrestataires', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setPrestataires(data);
            } else {
                console.error('Failed to fetch Prestataires:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching Prestataires:', error);
        }
    }


    return (
<div class="flex">
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

                            <Link to="/Prestataires" className="flex items-center px-4 py-2 mt-5 text-yellow-600 transition-colors duration-300 transform rounded-lg hover:text-yellow-600" href="Prestataires">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Prestataires</span>
                            </Link>

                            <Link to="/Clients" className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Annonces">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Clients</span>
                            </Link>

                            <Link to="/Reclamations" className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Reclamations">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                                </svg>


                                <span className="mx-4 font-medium">Reclamations</span>
                            </Link>

                            <Link to="/Posts" className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Clients">
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

    <section class="p-5 bg-black w-full">
            <div class="flex gap-2 text-center items-center">
                <svg class="w-9 h-9 text-orange-500 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-center items-center mt-2 gap-2">
                    <h1 class="text-3xl text-white font-bold font-mono">Prestataires</h1>
                    <h1 class="text-sm text-gray-300 mt-2">135</h1>
                </div>

        </div>
        <div class="bg-white w-full h-[1px] mt-4"></div>

        <table class="w-full">
            <thead class="text-white text-sm">
                <th>ID</th>
                <th>NOM COMPLET</th>
                <th>ADRESS EMAIL</th>
                <th>TELEPHONE</th>
                <th>CREATED DATE</th>
                <th class="py-6">ACTION</th>
            </thead>
            <tbody class="text-white text-md text-center">
            {prestataires.map((prestataire) => (
                            <tr className="text-white" key={prestataire.id}>
                                <td className="text-white font-medium font-serif">{prestataire.id}</td>
                                <td className="text-white font-medium font-serif">{prestataire.user.firstName} {prestataire.user.lastName}</td>
                                <td className="text-white font-medium font-serif">{prestataire.user.email}</td>
                                <td className="text-white font-medium font-serif">{prestataire.user.phone}</td>
                                <td className="text-white font-medium font-serif">{format(new Date(prestataire.user.created_at), 'dd MMMM yyyy')}</td>
                                <td>
                                    <button className="text-white bg-red-600 font-medium font-serif px-5 py-1 rounded">BAN</button>
                                </td>
                            </tr>
                        ))}
            </tbody>



        </table>

    </section>
</div>
);
};

export default Prestataires;