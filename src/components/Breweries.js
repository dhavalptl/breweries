import React, { useState, useEffect, useRef } from 'react';
import Brewery from './Brewery';
import Loading from './Loading';
import styles from './Breweries.module.css';

const Breweries = () => {
    const [breweries, setBreweries] = useState([]);
    const [loading, setLoading] = useState(false);
    let searchRef = useRef();
    const [query, setQuery] = useState('');

    useEffect(() => {
        async function fetchBreweries(query) {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`);
            const data = await response.json();
            setBreweries(data);
            setLoading(false);
        }
        if (query) {
            setLoading(true);
            fetchBreweries(query);
        }
    }, [query]);

    function searchBreweries(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            setQuery(searchRef.current.value);
        }
    }

    return (
        <div className={styles.breweries}>
            <div className={styles.header}>
                <input ref={searchRef} className={styles.searchbox} onKeyDown={searchBreweries} placeholder="Search Brewery"/>
                <div>Breweries ({breweries.length})</div>
            </div>
            {loading ? <Loading /> : breweries.map((brewery => <Brewery key={brewery.id} brewery={brewery}/>))}
        </div>
    );
};

export default Breweries;