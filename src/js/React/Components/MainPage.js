import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import * as constants from '../Constants'
import { TestAction } from '../Actions/Actions'


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onTest() {
        this.props.testClick();
    }
    render() {
        console.log(this.props.TestReducer.test)
        return (
            <div>
                <h1>MainPage</h1>
                <div>
                    <button onClick={this.onTest.bind(this)}>
                        Testujemy
                    </button>
                </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => { dispatch(TestAction(constants.EVENTS_TEST)) }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

