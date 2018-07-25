import React from 'react'
import { connect } from 'react-redux';
import * as constants from '../../Constants'
import { TestAction } from '../../Actions/Actions'
import InfoBox from './InfoBox/InfoBox';

const styles = require('./mainPage.scss');

class MainPage extends React.Component {
    state = {
        isBoxVisible: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }

    onTest() {
        this.props.testClick();
        this.setState(prevState => ({
            isBoxVisible: !prevState.isBoxVisible
        }))
    }

    render() {
        return (
            <div>
                <h1 className={this.state.isBoxVisible ? styles.btnRed : styles.btnBlack }>MainPage</h1>
                <div>
                    <button onClick={this.onTest.bind(this)}>
                        ToggleButton
                    </button>
                    {
                        this.props.TestReducer.test ?
                            <InfoBox
                                text={this.state.text}
                            />
                            :
                            null
                    }
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
        testClick: () => {dispatch(TestAction(constants.EVENTS_TEST))}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

