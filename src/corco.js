import React from 'react';
import feesh from './images/corco/feesh.jpeg';

const Corco = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ feesh } alt="feesh" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>flying friend</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Corco