import React from 'react';
import subway from './images/snurf/subway.JPG';

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
                </div>
            </div>
        </React.Fragment>
    )
}

export default Wuter