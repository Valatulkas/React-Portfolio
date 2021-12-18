import React from 'react';
import { NavLink } from 'react-router-dom';

const Structure = (props) => {
    
    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg'>
                <div className='container'>
                    <div className='col-12 col-md-2'>
                        <a className='navbar-link'>
                            <NavLink to='/'>
                                <h1 className='label'>JFerg</h1>
                            </NavLink>
                        </a>
                    </div>

                    <div className='col-12 col-md-2'>
                        <a className='navbar-link'>
                            <NavLink to='/htmlprojects'>
                                <h4>HTML-CSS</h4>
                            </NavLink>
                        </a>
                    </div>

                    <div className='col-12 col-md-2'>
                        <a className='navbar-link'>
                            <NavLink to='/jsprojects'>
                                <h4>JS-React</h4>
                            </NavLink>
                        </a>
                    </div>

                    <div className='col-12 col-md-2'>
                        <a className='navbar-link'>
                            <NavLink to='/railsprojects'>
                                <h4>Rails</h4>
                            </NavLink>
                        </a>
                    </div>

                    <div className='col-12 col-md-2'>
                        <a className='navbar-link'>
                            <NavLink to='/snake'>
                                <h4>Games</h4>
                            </NavLink>
                        </a>
                    </div>
                    
                    <div className='col-12 col-md-2'>
                        <a className='navbar-link'>
                            <NavLink to='/sugoi'>
                                <h2 className='label'>Sugoi</h2>
                            </NavLink>
                        </a>
                    </div>
                </div>
            </nav>
            <div className='container' id='main-content'>
                {props.children}
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row mt-3'>
                        <div className='col-12 col-md-4'>
                            <a href='https://github.com/Valatulkas' target="_blank">
                                <h4 className='mb-4'>github</h4>
                            </a>
                        </div>
                        <div className='col-12 col-md-4'>
                            <a href="mailto:jfergie93@gmail.com" target="_blank">
                                <h4 className='mb-4'>email</h4>
                            </a>
                        </div>
                        <div className='col-12 col-md-4'>
                            <a href='https://www.chess.com' target="_blank">
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