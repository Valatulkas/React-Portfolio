import React from 'react';
import work from './work.JPG';
import Petunia from './petunia';
import Yapon from './yapon';
import Wuter from './wuter';

const Project = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>
                            HTML/CSS Projects
                        </h3>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <a>
                            <h5>Apple Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <a>
                            <h5>Newsweek Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <a>
                            <h5>AirBNB Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                            <h5>React Currency Converter</h5>
                    </div>
                    <div className='col-md-2'></div>
                    
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <img src={ work } alt='petunia1' width='300px' height='auto' />
                    </div>
                    <div className='col-md-4'>
                        <h4>Trials and tribulations of restoring an AWD van</h4>
                    </div>
                    <div className='col-md-2'></div>
                    <Yapon />
                    <Wuter />
                    <Petunia />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project
