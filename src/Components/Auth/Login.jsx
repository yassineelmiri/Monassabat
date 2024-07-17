import { useState } from 'react';
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import backgroundQuiSommesNous from "../../assets/QuiSommeNous1.jpg";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const submit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://api.mounassabat.ma/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An error occurred');
            }

            const data = await response.json();
            const { token, role } = data;

            localStorage.setItem('token', token);
            localStorage.setItem('Role', role);

            switch (role) {
                case 'admin':
                    navigate('/Dashboard');
                    break;
                case 'client':
                    navigate('/');
                    break;
                case 'prestataire':
                    navigate('/Annonces');
                    break;
                default:
                    console.log('No role matched, redirecting to default path');
                    navigate('/');
                    break;
            }
        } catch (error) {
            setError(error.message || 'Network Error');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <div className="w-[100%] mx-auto " style={{
                backgroundImage: `url(${backgroundQuiSommesNous})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '71vh'
            }}>
                <div className="py-16">
                    <div className="w-[27%]  mx-auto bg-white">
                        <div className="py-14">
                            <div className="px-12">
                                <div className="flex gap-5 items-center text-center mb-4 bg-white shadow-xl px-10 py-4">
                                    <img className="h-8 w-8" src={facebook} alt="" />
                                    <h1 className="text-black font-serif font-medium text-lg">Continuer avec Facebook</h1>
                                </div>
                                <div className="flex gap-5 items-center text-center bg-white shadow-xl px-10 py-4 ">
                                    <img className="h-8 w-8" src={google} alt="" />
                                    <h1 className="text-black font-serif font-medium text-lg">Continue avec Google</h1>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 items-center py-7">
                                <div className="border-2 w-full border-dashed border-gray-400"></div>
                                <h1>ou</h1>
                                <div className="border-2 w-full border-dashed border-gray-400"></div>
                            </div>
                            <div className="px-12 my-2 ">
                                <form onSubmit={submit}>
                                    <div className="relative flex  items-center text-black ">
                                        <span className="absolute">
                                            <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Email ou nom d'utilisateur"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="relative flex  items-center text-black py-3">
                                        <span className="absolute">
                                            <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="password"
                                            placeholder="Mot de passe"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="flex justify-between mb-6">
                                        <div className="flex gap-2">
                                            <Link to="/ClientRegister" className="font-serif font-medium text-black text-lg hover:underline cursor:pointer">Créer un nouveau compte</Link>
                                        </div>
                                        <h1 className="font-serif font-medium text-yellow-500 text-lg cursor-pointer hover:underline">Mot de passe oublié ?</h1>
                                    </div>

                                    {error && <p className="text-red-500 mb-4">{error}</p>}

                                    <div className="bg-yellow-600 w-full p-4 flex justify-center cursor-pointer rounded">
                                        <button type="submit" className="text-white font-serif font-bold  text-lg text-center">Se connecter</button>
                                    </div>
                                </form>
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

export default Login;
