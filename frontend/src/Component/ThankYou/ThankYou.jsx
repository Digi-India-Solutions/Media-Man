import React from 'react';
import './ThankYou.css';
import MetaTag from '../Meta/MetaTag';

const ThankYou = () => {
    return (
        <>
            <MetaTag
                title="Thank You - Media Man"
                description="Thank you for reaching out to Media Man. We have received your message and will get back to you shortly. Return to the homepage for more information about our services and solutions."
                keyword="Media Man, thank you, contact confirmation, customer service, return to home"
            />

            <div className="thank-you-container">
                <img src="https://mediaman.in/static/media/logo.94585481204bda4cb964.png" alt="Mediaman Logo" className="thank-you-logo" />
                <h1>Thank You!</h1>
                <p>Thank you for reaching out to Mediaman. We have received your message and will get back to you shortly.</p>
                <a href="https://mediaman.in" className="thank-you-button">Return to Home</a>
            </div>
        </>
    );
};

export default ThankYou;
