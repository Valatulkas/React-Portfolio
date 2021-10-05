import React from 'react';
import { Route } from 'react-router-dom';
import Yapon from './yapon';


const HostPage = () => {
    return (
        <React.Fragment>
            <Route path='/yapon' component={Yapon} />
        </React.Fragment>
    )
}

export default HostPage