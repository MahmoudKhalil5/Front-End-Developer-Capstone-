import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';



function Nav() {
    const location = useLocation(); // Getting the current route

    return (
        <nav className={styles.navbar} aria-label="Main Navigation"> {/* Adding aria-label for accessibility */}
            <div className={styles.logo}>
                <img
                    src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png"
                    alt="Little Lemon Restaurant Logo"
                />
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <Link 
                            className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`} 
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`${styles.link} ${location.pathname === '/about' ? styles.active : ''}`} 
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`${styles.link} ${location.pathname === '/menu' ? styles.active : ''}`} 
                            to="/menu"
                        >
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`${styles.link} ${location.pathname === '/booking' ? styles.active : ''}`} 
                            to="/booking"
                        >
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`${styles.link} ${location.pathname === '/orderonline' ? styles.active : ''}`} 
                            to="/orderonline"
                        >
                            Order Online
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`${styles.link} ${location.pathname === '/login' ? styles.active : ''}`} 
                            to="/login"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;