import React, { useState } from 'react';
import styles from './Popup.module.css';

const Popup = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        });

        const data = await res.json();
        if (data.error) {
            setMessage("Error: " + data.error);
        } else {
            setMessage(data.message);
            if (data.message === "Subscription successful") {
                setTimeout(() => {
                    onClose();
                }, 2000);
            }
            setIsSubscribed(true);
        }
    };

        

    return 
};

export default Popup;