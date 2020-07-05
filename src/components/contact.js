import React from 'react';
import styles from './contact.module.scss';
import {FiMail,FiLink} from 'react-icons/fi';
import {GiSmartphone} from 'react-icons/gi'
const Contactus = ({mobile}) =>{
    return (
        <div>
        <div className={styles.contactIntro}>
            <a href="https://moonsitesolutions.herokuapp.com">Moonsite Solutions</a>
            <p>This blog is maintained by the team of Moonsite Solutions</p>
        </div>
        <div className={styles.contactInfo}>
            <p>For any development work or assistance you can contact us</p>
            <div className={styles.social}>
            
            <p><FiMail/> Moonsitesolutions@gmail.com</p>
            <a href="https://moonsitesolutions.herokuapp.com"><FiLink/> moonsitesolutions.com</a>
            <p><GiSmartphone/> 8964896547 | 7000608234</p> 
            </div>
        </div>

        </div>
    )
}

export default Contactus;
