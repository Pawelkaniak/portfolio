import React from 'react';

const styles = require('./style.scss');


class Form extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.tempWrapper}>
                    <h2 className={styles.temp}>{this.props.temp}
                        <span> &deg; C</span>
                    </h2>
                    <img
                        src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
                        alt={`weather_icon`} />
                </div>
                <form>
                    <input className={styles.inputField} type="text"
                        placeholder="Write name of your City"
                        value={this.props.searchInput}
                        onChange={this.props.onChange}
                    >
                    </input>
                    <div>
                        <button type="submit" className={styles.submitBtn} onClick={this.props.onSubmit}>
                            Check your weather
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;