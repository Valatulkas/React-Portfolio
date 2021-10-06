import React from 'react';
import beach from './images/petunia/beach.JPG';
import rubber from './images/petunia/rubber.JPG';
import use from './images/petunia/use.JPG';
import surf from './images/petunia/surf.JPG';
import snow from './images/petunia/snow.JPG';


const Petunia = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 mt-3'>
                        <img src={ beach } alt="petunia1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>beatiful starting point</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ rubber } alt='petunia2' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>brought her down to a blank slate</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ use } alt='petunia3' width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>rebuilt to enjoy</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ snow } alt="petunia4" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>enjoy like this</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 mb-3'>
                        <img src={ surf } alt="petunia5" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>and even like this</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Petunia