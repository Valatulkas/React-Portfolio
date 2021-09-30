import React from 'react';
import early from './early.jpg';


const Petunia = (props) => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src={ early } alt="Logo" />;
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <img src=""/>
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <h4>photo1</h4>
                    </div>
                    <div className='col-md-2'>
                        <h5>description</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <h4>photo1</h4>
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