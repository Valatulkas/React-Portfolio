import React from 'react';
import yapon from './images/yapon/yapon.JPG';

const Yapon = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ yapon } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>beatiful starting point</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Yapon