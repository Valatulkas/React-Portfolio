import React from 'react';

const Structure = (props) => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg py-0'>
                <div className='container'>
                    <div className='col-12 col-md-6'>
                        <h1>JFerg</h1>
                    </div>
                    <div className='col-12 col-md-2'>
                        <h3>Projects</h3>
                    </div>
                    <div className='col-12 col-md-2'>
                        <h3>Photos</h3>
                    </div>
                    <div className='col-12 col-md-2'>
                        <h3>About</h3>
                    </div>
                </div>
            </nav>
            <div className='container' id='main-content'>
                {props.children}
            </div>
            <footer>
                <div>

                </div>
            </footer>
        </React.Fragment>
    )
}   

export default Structure