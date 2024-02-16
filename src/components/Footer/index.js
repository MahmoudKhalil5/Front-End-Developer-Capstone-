import React from 'react';
import Styles from './Footer.module.css';
import LogoImage from './logo.jpg';

function Footer(){
    return(
        <footer className={Styles.Footer}>
            <div className={Styles.columnOne}>
                <img src={LogoImage} alt=""/>
            </div>

            <div className={Styles.columnTwo}>
                <ul>
                    <h4>Navigation</h4>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Oder Online</li>
                    <li>Login</li>
                </ul>
            </div>

            <div className={Styles.columnThree}>
                <ul>
                    <h4>Contact</h4>
                    <li>Phone Number</li>
                    <li>Email</li>
                    <li>Address</li>
                </ul>
            </div>

            <div className={Styles.columnfour}>
                <ul>
                    <h4>Social Media</h4>
                    <li>instaram</li>
                    <li>Linkedin</li>
                </ul>
            </div>

        </footer>
    );
}
export default Footer;