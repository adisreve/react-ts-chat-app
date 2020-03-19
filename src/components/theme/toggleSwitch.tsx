import React, { useState } from 'react'
import styles from './toggleSwitch.module.scss';

interface ToggleProps {
    toggleTheme: (event: React.MouseEvent<HTMLInputElement>) => void
}

const getDefaultTheme = () => {
    return localStorage.getItem('theme') === 'dark' ? true : false;
 }

export const ToggleSwitch = (Props: ToggleProps) => {
    const [checked, setChecked] = useState(getDefaultTheme);

    const handleClick = () => setChecked(!checked);

    return (
            <div className={styles.outerSwitch}>
                <input type="checkbox" className={`${styles.switch} active${checked}`} id="switch" defaultChecked={checked} onClick={(e) => { handleClick(); Props.toggleTheme(e) }} /> 
                <label htmlFor="switch" className={styles.switchLabel}>

                    <div className={styles.toggle}></div>
                </label>
            </div>      
    )
}