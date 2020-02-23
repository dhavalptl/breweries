import React from 'react';
import styles from './Home.module.css';
const Home = () => {
    return (
        <div className={styles.home}>
            <h3>
                Welcome to knowing more about breweries
            </h3>
            <h4>This application covers below points using React</h4>
            <ul className={styles.list}>
                <li>Display Data</li>
                <li>Style</li>
                <li>Route</li>
                <li>Lazy loading Route</li>
                <li>Http</li>
                <li>Protected Route</li>
                <li>React Hooks</li>
            </ul>
        </div>
    );
};

export default Home;