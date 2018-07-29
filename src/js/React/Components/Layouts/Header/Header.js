import React from 'react';
import { NavLink } from 'react-router-dom';

import LinkComponent from './LinkComponent/LinkComponent'

const styles = require('./style.scss')

class InfoBox extends React.Component {

    render() {
        const urls = {
            main: {
                name: 'Strona domowa',
                url: '/',
                exact: true,
                key: 0
            },
            about: {
                name: 'Pogoda',
                url: '/weather',
                exact: false,
                key: 1
            },
        }
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome on my page!</h1>
                <div className={styles.flexContainer}>
                    {Object.values(urls).map((values =>
                        <div key={values.key}>
                            <LinkComponent
                                {...values}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default InfoBox;
