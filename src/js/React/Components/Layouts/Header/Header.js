import React from 'react';
import {NavLink} from 'react-router-dom';

const styles = require('./style.scss')

class InfoBox extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome on my page!</h1>
                <ul>
                    <li>
                        <NavLink exact to="/" activeStyle={{ fontWeight: 'bolder' }}>Strona domowa</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{ fontWeight: 'bolder' }}>O stronie</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default InfoBox;