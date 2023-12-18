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

    return (
        <div id="popup-overlay" className={styles.popup_overlay}>
            <div className={styles.popup}>
            <h1 className={styles.title}>LOYALTY PROGRAM</h1>
            <h2 className={styles.subtitle}>GET 30% OFF WHEN YOU JOIN OUR PROGRAM</h2>
            <p className={styles.p}>You will also receive newsletters, updates, exclusive rewards when you join. Get the best pizzas with extra perks.<br/>Enter your email to join the program.</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                     <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                    />
                    <button className={styles.submit} type="submit">Subscribe</button>
                </form>
                {message && <p className={styles.message}>{message}</p>}
                <button className={styles.close} onClick={onClose}>
                    {isSubscribed ? "Close" : "Maybe Later"}
                </button>
            </div>
        </div>
    );
};

export default Popup;