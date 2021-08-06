import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router';


const RoutesPrivates = (props: any) => useSelector((state: any)=>state.auth.signed) ? <Route {...props} /> : <Redirect to="/" />

export default RoutesPrivates;