import React from 'react';
import etsyLogo from '../../assets/etsy-logo.png';

const FloatingEtsy = () => {
    return (
        <a
            href="https://azalinternational.etsy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-amber-500 transition-all transform hover:scale-110 active:scale-95 animate-pulse-amber group"
            title="Visit our Etsy Shop"
        >
            <img
                src={etsyLogo}
                alt="Etsy Shop"
                className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform"
            />
        </a>
    );
};

export default FloatingEtsy;
