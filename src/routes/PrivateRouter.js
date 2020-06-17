import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const PrivateRoute = ({isAuthenticated,component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isAuthenticated ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};
const mapStatetoProps=state=>({
    isAuthenticated:!!state.user.token,
 
})
export default connect(mapStatetoProps)(PrivateRoute);
