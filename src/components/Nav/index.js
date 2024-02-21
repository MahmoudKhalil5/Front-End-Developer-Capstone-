import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';


function Nav(){
    return(
        <nav>
            <div className={styles.logo}>
                <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt="Little Lemon Restaurant Logo" />
            </div>
            <div className={styles.nav}>
                <ul>
                    <li><Link className={styles.a} to="/">Home</Link></li>
                    <li><Link className={styles.a} to="/about">About</Link></li>
                    <li><Link className={styles.a} to="/Menu">Menu</Link></li>
                    <li><Link className={styles.a} to="/Reservations">Reservations</Link></li>
                    <li><Link className={styles.a} to="/OrderOnline">Order Online</Link></li>
                    <li><Link className={styles.a} to="/Login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;