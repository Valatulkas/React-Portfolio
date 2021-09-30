import React from 'react';
import beach from './beach.JPG';
import rubber from './rubber.JPG';
import use from './use.JPG';
import surf from './surf.JPG';
import snow from './snow.JPG';


const Petunia = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ beach } alt="petunia1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ rubber } alt='petunia2' width='500px' height='auto'
                        />
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ use } alt='petunia3' width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ snow } alt="petunia4" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ surf } alt="petunia5" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Petunia