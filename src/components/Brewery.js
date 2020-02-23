import React from 'react';
import styles from './Brewery.module.css';
import { useHistory } from 'react-router-dom';

const Brewery = ({brewery}) => {
    let history = useHistory();
    return (
        <div className={styles.brewery} onClick={() => history.push(`/breweries/${brewery.id}`)}>
            <div>{brewery.name}</div>
            <div className={styles.country}>{brewery.state}, {brewery.country}</div>
        </div>
    );
};

export default Brewery;