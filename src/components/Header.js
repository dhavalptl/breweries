import React, { useContext } from 'react';
import styles from './Header.module.css';
import {
    NavLink,
    Link,
    useHistory
} from "react-router-dom";
import { AuthContext } from '../AuthContext';
const Header = () => {
    let history = useHistory();
    const { isLogin, dispatch } = useContext(AuthContext);
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <Link className={styles.menuitem} to="/">KnowBreweries</Link>
            </div>
            <nav className={styles.menu}>
                <NavLink className={styles.menuitem} activeClassName={styles.activemenu} to="/breweries">Breweries</NavLink>
                <NavLink className={styles.menuitem} activeClassName={styles.activemenu} to="/admin">Admin</NavLink>
                {isLogin ? <button className="button" onClick={() => {
                    dispatch({
                        type: 'logout'
                    });
                    history.push('/');
                }}>Logout</button> : <button className="button" onClick={() => {
                    dispatch({
                        type: 'login'
                    });
                }}>Login</button>}
            </nav>
        </header>
    );
};

export default Header;