import React from 'react';
import apiWeather from "../../../Api/apiWeather.json";

import Atribiutes from "./Atribiutes/Atribiutes";
import Form from "./Form/Form"


const styles = require('./style.scss');

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: `http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=${apiWeather.key}`,
            searchInput: ''
        }
        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    getData() {
        let url = this.state.url;
        fetch(url).then(function (res) {
            return res.json();
        }).then(function (data) {
            this.setState({
                error: '',
                location: data.name,
                country: data.sys.country,
                temp: Math.round(data.main.temp),
                pressure: data.main.pressure,
                decription: data.weather[0].description,
                icon: data.weather[0].icon,
                wind: data.wind.speed,
            });
        }.bind(this));
    }

    componentDidMount() {
        this.getData();
    }

    handleChange(event) {
        this.setState({
            searchInput: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchInput}&appid=${apiWeather.key}`
        }, () => {
            this.getData();
        });
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles.title}>Weather</div>
                    <div className={styles.wrapper}>
                        <Atribiutes
                            location={this.state.location}
                            country={this.state.country}
                            decription={this.state.decription}
                            pressure={this.state.pressure}
                            wind={this.state.wind}
                        />
                        <div className={styles.formWrapper}>
                            <Form
                                temp={this.state.temp}
                                searchInput={this.state.searchInput}
                                icon={this.state.icon}
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;