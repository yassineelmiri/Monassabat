import React from 'react';
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import backgroundQuiSommesNous from "../../assets/QuiSommeNous1.jpg";

const validate = (formData) => {
    let errors = {};
    const nameRegex = /^[A-Za-z]{1,30}$/;

    if (!formData.firstName) {
        errors.firstName = "First Name is required";
    } else if (!nameRegex.test(formData.firstName)) {
        errors.firstName = "First Name must be only letters and max 30 characters";
    }

    if (!formData.lastName) {
        errors.lastName = "Last Name is required";
    } else if (!nameRegex.test(formData.lastName)) {
        errors.lastName = "Last Name must be only letters and max 30 characters";
    }

    if (!formData.phone) {
        errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone Number must be 10 digits";
    }

    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email address is invalid";
    }

    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
};

const ClientRegister = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        role: 'client', 
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        try {
            const response = await fetch('http://api.mounassabat.ma/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            navigate('/login');
        } catch (error) {
            console.error('Error adding user:', error);
        }
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
                <div className="w-[50%]  mx-auto bg-white">
                    <div className="py-14">
                        <div className="px-12 ">
                        <div className="w-full">
                            <h1 className="text-3xl font-serif font-bold tracking-wider text-black capitalize">
                                SIGN UP QUE CLIENT
                            </h1>
                            <div>
                                <div className=" flex justify-end mt-3 md:flex md:items-center md:-mx-2">
                                    <Link to="/PrestataireRegister" className="flex justify-center font-serif font-medium w-full px-6 py-3 mt-4 text-white border bg-black cursor-pointer rounded-lg md:mt-0 md:w-auto md:mx-2 hover:bg-yellow-600 hover:text-white  duration-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        <span className="mx-2">OU PRESTATAIRE</span>
                                    </Link>
                                </div>
                            </div>

                            <div  className=" w-full">
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">
                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif ">PRENOM</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`block w-full px-5 py-3 border ${errors.firstName ? 'border-red-500' : 'border-black'} mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-lg focus:border-yellow-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}/>
                                        {errors.firstName && <p className="text-red-500 font-serif font-medium  text-xs mt-1">{errors.firstName}</p>}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif ">NOM</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`block w-full px-5 py-3 border ${errors.lastName ? 'border-red-500' : 'border-black'} mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-lg focus:border-yellow-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}/>
                                        {errors.lastName && <p className="text-red-500 text-xs font-serif font-medium mt-1">{errors.lastName}</p>}
                                    </div> 

                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif">NOMBRE DE TELEPHONE</label>
                                        <input type="number" name="phone" value={formData.phone} onChange={handleChange} className={`block w-full px-5 py-3 border ${errors.phone ? 'border-red-500' : 'border-black'} mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-lg focus:border-yellow-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}/>
                                        {errors.phone && <p className="text-red-500 font-serif font-medium text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif">ADDRESS EMAIL </label>
                                        <input type="text" name="email" value={formData.email} onChange={handleChange} className={`block w-full px-5 py-3 border ${errors.email ? 'border-red-500' : 'border-black'} mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-lg focus:border-yellow-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}/>
                                        {errors.email && <p className="text-red-500 font-serif font-medium text-xs mt-1">{errors.email}</p>}
                                    </div>
                                  

                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif">MOT DE PASS</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange}  className={`block w-full px-5 py-3 border ${errors.password ? 'border-red-500' : 'border-black'} mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-lg focus:border-yellow-600 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}/>
                                        {errors.password && <p className="text-red-500 font-serif font-medium text-xs mt-1">{errors.password}</p>}
                                    </div>
                           
                                    <input type="hidden" name="role" value={formData.role} />

                                    <button type="submit"
                                            className="flex items-center justify-between w-full px-6 h-12 mt-7 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        <span>Sign Up </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
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

export default ClientRegister;