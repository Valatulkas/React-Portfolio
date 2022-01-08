import React from 'react';
import subway from '../images/snurf/subway.JPG';
import backside from '../images/snurf/backside.jpg';
import left from '../images/snurf/left.JPG';
import right from '../images/snurf/right.JPG';
import oregon from '../images/snurf/oregon.JPG';
import undisclosed from '../images/snurf/undisclosed.JPG';
import santa from '../images/snurf/santa.JPG';

const Wuter = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row my-3'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ subway } alt="subway" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>underground to underwater</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ oregon } alt="oregon" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>rewarding recon</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ santa } alt="santacruz" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>santa cruz mountains</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                        <img src={ left } alt="left" width='500px' height='auto' />
                    </div>
                    <div className='col-md-5'>
                        <img src={ right } alt="right" width='500px' height='auto' />
                    </div>
                    <div className='col-md-1'></div>
                    <div><h5>big sur with its many offerings</h5></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ undisclosed } alt="oregon" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>this shall remain nameless</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ backside } alt="oregon" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>panamanian pleasures</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Wuter