import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image priority src="/images/logo.webp" alt="logo" width={418} height={56}  />
                    </Link>
                </div>
                <div>
                    <ul className={styles.nav}>
                        {/* <Link href="/" className={styles.a}>Order Now</Link> */}
                        <Link href="/menu" className={styles.a}>Menu</Link>
                        <Link href="/#join" className={styles.a}>Join Rewards</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;