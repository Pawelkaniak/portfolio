import React from 'react';
import { connect } from 'react-redux';

class MainPage extends React.Component {
    

    onTest() {
        console.log('test1');
    }
    render() {
        console.log(this.props.TestReducer.test)
        return(
            <div>
                <div> 
                    <button onClick={this.onTest.bind(this)}>
                        Testujemy
                    </button>
                </div>
                MainPage
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
     
    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

