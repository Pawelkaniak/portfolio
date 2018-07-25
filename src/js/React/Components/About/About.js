import React from 'react';

class About extends React.Component {
    state = {
        isFajno: 'ano jest'
    }

    render() {
        console.log(this.state.isFajno)
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}

export default About;