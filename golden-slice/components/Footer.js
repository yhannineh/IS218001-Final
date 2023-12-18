import Link from 'next/link';
import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.all}>
            <div className={styles.first}>
                    <p className={styles.title}>Golden Slice</p>
            </div>
                <div className={styles.stay}>
                    <p className={styles.bold}>Stay Connected</p>
                    <div className={styles.fonts}>
                        <Link href="https://www.facebook.com/" target="_blank" ><i className="fa-brands fa-facebook"></i></Link>
                        <Link href="https://www.instagram.com/" target="_blank" ><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="https://www.tiktok.com/en/" target="_blank" ><i className="fa-brands fa-tiktok"></i></Link>
                    </div>
                </div>
                
            </div>
            <div className={styles.copySection}>
                    <p className={styles.copy}>&copy; 2023 Golden Slice</p>
            </div>
        </div>
    );
};

export default Footer;