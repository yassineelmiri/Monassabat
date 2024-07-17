import React, { useEffect, useState } from 'react';
import logo from '/src/assets//logo.png';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


const Dashboard = () => {
    const [latestPrestataires, setLatestPrestataires] = useState([]);
    const [latestClients, setLatestClients] = useState([]);
    const [latestAnnonces, setLatestAnnonces] = useState([]);
    const [latestReclamations, setLatestReclamations] = useState([]);

    const [prestatairesCount, setPrestatairesCount] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);
    const [annoncesCount, setAnnoncesCount] = useState(0);
    const [reclamationsCount, setReclamationsCount] = useState(0);

    useEffect(() => {
        fetchCounts();
        fetchLatestData();
    }, []);

    const fetchCounts = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('JWT token not found in local storage');
            }

            const [prestatairesResponse, clientsResponse, annoncesResponse, reclamationsResponse] = await Promise.all([
                fetch('http://api.mounassabat.ma/api/countPrestataires', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }),
                fetch('http://api.mounassabat.ma/api/countClients', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }),
                fetch('http://api.mounassabat.ma/api/countAnnonces', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }),
                fetch('http://api.mounassabat.ma/api/countReclamations', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
            ]);

            if (!prestatairesResponse.ok) {
                throw new Error(`Failed to fetch Prestataires count: ${prestatairesResponse.statusText}`);
            }
            if (!clientsResponse.ok) {
                throw new Error(`Failed to fetch Clients count: ${clientsResponse.statusText}`);
            }
            if (!annoncesResponse.ok) {
                throw new Error(`Failed to fetch Annonces count: ${annoncesResponse.statusText}`);
            }
            if (!reclamationsResponse.ok) {
                throw new Error(`Failed to fetch Reclamations count: ${reclamationsResponse.statusText}`);
            }

            const prestatairesData = await prestatairesResponse.json();
            const clientsData = await clientsResponse.json();
            const annoncesData = await annoncesResponse.json();
            const reclamationsData = await reclamationsResponse.json();

            setPrestatairesCount(prestatairesData.count);
            setClientsCount(clientsData.count);
            setAnnoncesCount(annoncesData.count);
            setReclamationsCount(reclamationsData.count);
        } catch (error) {
            console.error('Error fetching counts:', error);
            // Handle error (e.g., show error message)
        }
    };

    const fetchLatestData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('JWT token not found in local storage');
            }

            const [prestatairesResponse, clientsResponse, annoncesResponse, reclamationsResponse] = await Promise.all([
                fetch('http://api.mounassabat.ma/api/getLatestPrestataires', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }),
                fetch('http://api.mounassabat.ma/api/getLatestClients', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }),
                fetch('http://api.mounassabat.ma/api/getLatestAnnonces', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }),
                fetch('http://api.mounassabat.ma/api/getLatestReclamations', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
            ]);

            if (!prestatairesResponse.ok) {
                throw new Error(`Failed to fetch latest Prestataires data: ${prestatairesResponse.statusText}`);
            }
            if (!clientsResponse.ok) {
                throw new Error(`Failed to fetch latest Clients data: ${clientsResponse.statusText}`);
            }
            if (!annoncesResponse.ok) {
                throw new Error(`Failed to fetch latest Annonces data: ${annoncesResponse.statusText}`);
            }
            if (!reclamationsResponse.ok) {
                throw new Error(`Failed to fetch latest Reclamations data: ${reclamationsResponse.statusText}`);
            }

            const prestatairesData = await prestatairesResponse.json();
            const clientsData = await clientsResponse.json();
            const annoncesData = await annoncesResponse.json();
            const reclamationsData = await reclamationsResponse.json();

            setLatestPrestataires(prestatairesData);
            setLatestClients(clientsData);
            setLatestAnnonces(annoncesData);
            setLatestReclamations(reclamationsData);
        } catch (error) {
            console.error('Error fetching latest data:', error);
            // Handle error (e.g., show error message)
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
                                    <Link to="/Dashboard" id="dashboard" className="flex items-center px-4 py-2 text-yellow-600 rounded-lg cursor-pointer">
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

                <section className="bg-black w-full px-5 py-2.5 overflow-y-hidden">
                    <div className="text-center flex gap-3 items-center">
                        <svg className="w-9 h-9 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                        </svg>
                        <h1 className="text-3xl text-white font-bold font-mono mt-1">Dashboard</h1>
                    </div>
                    <div className="w-full h-[1px] mt-5"></div>
                    <div className="flex flex-wrap items-center mt-6 gap-5">
                        <div className="border border-white rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-yellow-600 text-2xl font-medium font-serif">Prestataires</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="user-count" className="text-white font-medium text-2xl">{prestatairesCount}</h1>
                                    <svg className="w-8 h-8 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-yellow-600 text-2xl font-medium font-serif">Clients</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="cinema-count" className="text-white font-medium text-2xl">{clientsCount}</h1>
                                    <svg className="w-8 h-8 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-yellow-600 text-2xl font-medium font-serif">Annonces</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="category-count" className="text-white font-medium text-2xl">{annoncesCount}</h1>
                                    <svg className="w-8 h-8 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-yellow-600 text-2xl font-medium font-serif">Reclamations</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="movie-count" className="text-white font-medium text-2xl">{reclamationsCount}</h1>
                                    <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-5 py-6">

                        <div className="border border-white rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-6 h-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Prestataires</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] bg-white"></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-yellow-600 text-sm">
                                        <th>ID</th>
                                        <th>FULL NAME</th>
                                        <th>EMAIL</th>
                                        <th className="py-3">PHONE</th>
                                    </thead>


                                    <tbody id="latest-Prestataires" className="text-md text-white font-serif ">
                                    {latestPrestataires.map((prestataire) => (
                                            <tr key={prestataire.id}>
                                                <td className="py-2">{prestataire.id}</td>
                                                <td>{`${prestataire.user.firstName} ${prestataire.user.lastName}`}</td>
                                                <td>{prestataire.user.email}</td>
                                                <td>{prestataire.user.phone}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>


                        <div className="border border-white rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Reclamations</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] bg-white"></div>

                            <div className="py-5">
                                <table className="w-full text-center ">
                                    <thead className="text-yellow-600 text-sm">
                                        <th className="">ID</th>
                                        <th>CLIENT</th>
                                        <th>DATE</th>
                                    </thead>

                                    <tbody className="text-md text-white font-serif ">
                                    {latestReclamations.map((reclamation) => (
                                            <tr key={reclamation.id}>
                                                <td className="pt-[16px]">{reclamation.id}</td>
                                                <td className="pt-[16px]">{`${reclamation.user.firstName} ${reclamation.user.lastName}`}</td>
                                                <td className="pt-[16px]">{format(new Date(reclamation.created_at), 'dd MMMM yyyy')}</td>
                                            </tr>
                                        ))}
                                    </tbody>


                                </table>
                            </div>
                        </div>




                        <div className="border border-white  rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-6 h-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Clients</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] bg-white"></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-yellow-600 text-sm -b -gray-700">
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>ADDRESS</th>
                                        <th className="py-3">CREATED</th>
                                    </thead>

                                    <tbody id="latest-Clients" className="text-md text-white font-serif">
                                    {latestClients.map((client) => (
                                            <tr key={client.id}>
                                                <td className="py-2">{client.id}</td>
                                                <td>{`${client.user.firstName} ${client.user.lastName}`}</td>
                                                <td>{client.user.email}</td>
                                                <td>{client.user.phone}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>




                        <div className="border border-white  rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                <svg className="w-6 h-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Annonces</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] bg-white"></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-yellow-600 text-sm -b -gray-700">
                                        <th>ID</th>
                                        <th>TITRE</th>
                                        <th className="py-3">PRIX</th>
                                        <th className="py-3">CREE PAR</th>

                                    </thead>

                                    <tbody id="latest-Annonces" className="text-md text-white font-serif">
                                    {latestAnnonces.map((annonce) => (
                                            <tr key={annonce.id}>
                                                <td className="py-2">{annonce.id}</td>
                                                <td>{annonce.title}</td>
                                                <td>{annonce.price}</td>
                                                <td>{`${annonce.user.firstName} ${annonce.user.lastName}`}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>




                    </div>
                </section>
            </div>
        
    );
};

export default Dashboard;