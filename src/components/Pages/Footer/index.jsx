import React from 'react';
import styles from './footer.module.css';
import logo from './logo.jpg';

function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.column}>
          <img src={logo} alt="Company Logo" className={styles.logo} />
        </div>
        <div className={styles.column}>
          <ul>
            <h5 className={styles.heading}>Contact</h5>
            <li>Phone:<a>+1 123-456-7890</a></li>
            <li>Email: <a>contact@company.com</a></li>
            <li>Address: <a>123 Main St, Anytown, USA</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <ul>
            <h5 className={styles.heading}>Social Media</h5>
            <li>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;