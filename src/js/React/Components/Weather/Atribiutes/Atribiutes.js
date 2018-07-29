import React from 'react';

const styles = require('./style.scss');

class Atribiutes extends React.Component {
    render() {
        return (
            <div className={styles.container}>
            <h2 className={styles.city}>{this.props.location}</h2>
            <p>Country: {this.props.country}</p>
            <p>Description: {this.props.decription}</p>
            <p>Pressure: {this.props.pressure} hpa</p>
            <p>Wind: {this.props.wind} m/s</p>
        </div>
        )
    }
}

export default Atribiutes;