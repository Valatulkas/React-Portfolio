import React from 'react';

const Structure = (props) => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg'>
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
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <a href='https://github.com/Valatulkas'>
                                <img src='./images/github-seeklogo.com.svg' alt='github' className='mb-4'></img>
                            </a>
                        </div>
                        <div className='col-12 col-md-4'>
                            <a href="mailto:jfergie93@gmail.com">
                                <h4 className='mb-4'>email</h4>
                            </a>
                        </div>
                        <div className='col-12 col-md-4'>
                            <a href='https://www.chess.com'>
                                <h4 className='mb-4'>chess</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}   

export default Structure