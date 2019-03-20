import React, {Component} from 'react';
import * as PropTypes from 'prop-types';


class AdminDashboard extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                {/* navigation here */}
                <main>
                    {children}
                </main>
            </div>
        );
    }
}

AdminDashboard.propTypes = {
    
};

export default AdminDashboard;