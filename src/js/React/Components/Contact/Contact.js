import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CounterAction } from '../../Actions/Actions'


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        this.props.testClick();
    }


    render() {
        console.log(this.props.counter)
        return (
            <div>
                <h1>Contact page!</h1>
                <Link to='/'>Back to Main Page!</Link>
                <h2>Counting: {this.props.counter}</h2>
                <button onClick={this.click.bind(this)}> Click it! </button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => dispatch(CounterAction("Add"))
    }
}

const DefaultApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)

export default DefaultApp;