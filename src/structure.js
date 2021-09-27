import React from 'react';
import { NavLink } from 'react-router-dom';

const structure = (props) => {
    return (
        <React.Fragment>
            <nav>
                
            </nav>
            <div className='container' id='main-content'>
                {props.children}
            </div>
            <footer>

            </footer>
        </React.Fragment>
    )
}