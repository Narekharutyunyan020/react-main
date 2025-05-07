import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.top}>
            <div className={styles.icons}>
            <img src="Group 34.png" alt="" />
            <img src="Facebook.png" alt="" />
            <img src="Group 35.png" alt="" />
            <img src="Group 36.png" alt="" />
            <img src="Group 37.png" alt="" />
            <img src="Group 38.png" alt="" />
            <img src="Group 39.png" alt="" />
            </div>
        

            <div className={styles.final}>
                <p>@Start,2025 All rights reserverd.</p>
            </div>
        
        </footer>
    )
}

export default Footer