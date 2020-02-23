import React, { useEffect, useState } from 'react';
import styles from './BreweryDetails.module.css';
import { useHistory, useParams } from 'react-router-dom';
const BreweryDetails = () => {
    const [brewery, setBrewery] = useState({});
    const [loading, setLoading] = useState(false);
    let {id} = useParams();
    let history = useHistory();

    useEffect(() => {
        async function fetchBrewery(id) {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
            const data = await response.json();
            setBrewery(data);
            setLoading(false);
        }
        if (id) {
            setLoading(true);
            fetchBrewery(id);
        }
    }, [id]);
    return (
        <div className={styles.brewerydetails}>
            <h3>Brewery Details</h3>
            {loading ? <div>Loading...</div> : <div>
                <h1>{brewery.name}</h1>
                <div>
                    <p>{brewery.state}, {brewery.country}</p>
                    <a href={brewery.website_url} style={{color: '#FFF'}}target="_blank" rel="noreferrer noopener">{brewery.website_url}</a>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <button className="button" onClick={() => history.push('/breweries')}>
                        Breweries
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default BreweryDetails;