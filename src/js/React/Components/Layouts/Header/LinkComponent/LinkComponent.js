import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = require('./style.scss')

class LinkComponent extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                {this.props.exact ?
                    <NavLink className={styles.link} exact to={this.props.url} activeStyle={{ fontWeight: 'bolder' }}>
                        {this.props.name}
                     </NavLink>
                    :
                    <NavLink className={styles.link} to={this.props.url} activeStyle={{ fontWeight: 'bolder' }}>
                       {this.props.name}
                    </NavLink>
                }
            </div>
        )
    }
}

export default LinkComponent;