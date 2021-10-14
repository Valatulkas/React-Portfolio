import React from 'react';
import feesh from './images/corco/feesh.jpeg';
import dry from './images/corco/dry.jpeg';
import exhausted from './images/corco/exhausted.JPG';
import mahi from './images/corco/mahi.jpeg';
import night from './images/corco/night.jpeg';
import sanblas from './images/corco/sanblas.jpeg';
import tilt from './images/corco/tilt.jpeg';
import wow from './images/corco/wow.jpeg';

const Corco = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 mt-3'>
                        <img src={ wow } alt="wing-on-wing" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 mt-3'>
                        <h5>flying main and gennaker wing on wing</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ feesh } alt='flying-fish' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>unfortunate casuality in the open ocean</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ sanblas } alt='petunia2' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>early rewards in remote corners</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ exhausted } alt='exhuasted' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>too many sleepless nights and sleep-filled mornings</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ night } alt='petunia2' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>enjoying nights in a marina</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ mahi } alt='petunia2' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>enjoying oceanic sacrifices</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 mb-3'>
                        <img src={ tilt } alt='petunia2' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2 mb-3'>
                        <h5>many many hours of life at an angle</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 mb-3'>
                        <img src={ dry } alt='dry' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2 mb-3'>
                        <h5>dryings everything out at our final destination</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Corco