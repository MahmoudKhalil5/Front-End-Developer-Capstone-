import React from 'react'
import styles from './Nav.module.css'
function Nav(){
    return(
        <nav>
            <div className={styles.logo}>
                <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt="" />
            </div>
            <div className={styles.nav}>
                <ul>
                    <li ><a className={styles.a} href='/home'>Home</a></li>
                    <li ><a className={styles.a} href='/about'>About</a></li>
                    <li ><a className={styles.a} href='/Menu'>Menu</a></li>
                    <li ><a className={styles.a} href='/Reservations'>Reservations</a></li>
                    <li ><a className={styles.a} href='/Order Online'>Order Online</a></li>
                    <li ><a className={styles.a} href='/Login'>Login</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;