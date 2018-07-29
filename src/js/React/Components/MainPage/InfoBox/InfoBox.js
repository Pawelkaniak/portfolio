import React from 'react';

const styles = require('./style.scss')

class InfoBox extends React.Component {


    
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>
                Some info
                </h1>
                <div className={styles.text} >
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default InfoBox;