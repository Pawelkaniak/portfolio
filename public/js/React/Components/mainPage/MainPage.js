import React from 'react'
import {Link} from 'react-router-dom'

class MainPage extends React.Component {
    render() {
        return(
            <div>
                <h1>MainPage</h1>
                <Link to='/contact'> Go to contact! </Link>
            </div>
        );
    }
}

export default MainPage;