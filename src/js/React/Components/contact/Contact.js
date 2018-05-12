import React from 'react';
import {Link} from 'react-router-dom'


class Contact extends React.Component {
    render() {
        return(
            <div>
                <h1>Contact page!</h1>
                <Link to='/'>Back to Main Page! </Link>
            </div>
        );
    }
}

export default Contact;