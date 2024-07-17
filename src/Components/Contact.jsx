import { useState } from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
const Contact = () => {

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/Login');
            return;
        }

        try {
            const response = await fetch('http://api.mounassabat.ma/api/reclamation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An error occurred');
            }

            const data = await response.json();
            console.log('Reclamation created successfully:', data);
            setMessage('');
            setError('');
        } catch (error) {
            if (error.message === 'Only clients can create reclamations.') {
                localStorage.removeItem('token');
                localStorage.removeItem('Role');
                navigate('/Login');
            } else {
                setError(error.message || 'Network Error');
            }
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
            <div className="w-[100%] mx-auto rounded-b-lg" style={{backgroundImage: `url(${backgroundQuiSommesNous})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '21vh'}}>
                <div className="w-[60%] mx-auto flex justify-between">
                    <div>
                        <h1 className="text-6xl text-white font-bold font-serif py-11">Contact</h1>
                        <div className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[50%]">
                            <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                            <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                            <p className="text-white font-bold font-serif text-md">Contact Us</p>
                        </div>
                        <div className="py-24 w-[70%]">
                            <h1 className="text-gray-500 font-serif font-medium">Un clic, vos événements bine yedik
                                Découvrons les meilleurs Prestatires des événements</h1>

                            <div className="flex gap-4  py-7">
                                <div
                                    className="border border-gray-400 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                    <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div
                                    className="border border-gray-400 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                    <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div
                                    className="border border-gray-400 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                    <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg w-[60%] mt-20 shadow-2xl">
                        <div className="w-[85%] mx-auto py-16 ">
                            <h1 className="text-3xl font-serif font-medium text-center">Send a Message</h1>
                            {error && <div className="text-red-500 text-center">{error}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="py-8">
                                    <textarea
                                        className="border-2 border-gray-400 py-5 px-5 placeholder:text-black placeholder:font-serif placeholder:text-lg  placeholder:py-4 "
                                        placeholder="Message *" name="message" id="message" cols="47" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                </div>

                                <div className="bg-yellow-600 w-[40%] py-2 mx-auto text-center cursor-pointer rounded">
                                    <button type="submit" className="text-white font-serif font-bold  text-lg text-center">Se connecter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer className="mt-28">
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default Contact;