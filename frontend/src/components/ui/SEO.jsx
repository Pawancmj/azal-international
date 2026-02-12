import React from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
    const location = useLocation();
    const siteName = "AZAL International";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Premium Carpets & Flooring`;

    React.useEffect(() => {
        document.title = fullTitle;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description || "AZAL International offers luxury carpets, designer flooring, and premium rugs for hospitality, residential, and commercial projects worldwide.";

        // Update Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || "luxury carpets, premium flooring, designer rugs, hospitality flooring, commercial carpets, Azal International";

    }, [fullTitle, description, keywords, location]);

    return null;
};

export default SEO;
