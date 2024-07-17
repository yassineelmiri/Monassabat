import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AnnonceContext = createContext();

export const AnnonceProvider = ({ children }) => {
    const [annonces, setAnnonces] = useState([]);

    const filterAnnonces = async (category, subCategory, sousCategory) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }

            let url = 'http://api.mounassabat.ma/api/getFiltredAnnonces';
            if (category) {
                url += `?category=${category}`;
                if (subCategory) {
                    url += `&subCategory=${subCategory}`;
                    if (sousCategory) {
                        url += `&sousCategory=${sousCategory}`;
                    }
                }
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data.annonces)) {
                    setAnnonces(data.annonces);
                } else {
                    console.error('Expected an array from API response:', data);
                }
            } else {
                console.error('Failed to fetch annonces:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching annonces:', error);
        }
    };

    return (
        <AnnonceContext.Provider value={{ annonces, filterAnnonces }}>
            {children}
        </AnnonceContext.Provider>
    );
};

AnnonceProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAnnonces = () => {
    return useContext(AnnonceContext);
};
