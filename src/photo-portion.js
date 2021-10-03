import React from 'react';

const PhotoDisplay = (props) => {
    return (
        <React.Fragment>
            <div className='container main my-4 photo-background'>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-md-3'>
                        <h4>title</h4>
                    </div>
                    <div className='col-md-5'>
                        <img alt='title-photo'></img>
                    </div>
                    <div className='col-0 col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-md-5'>
                        <img alt='title-photo'></img>
                    </div>
                    <div className='col-md-3'>
                        <h4>title</h4>
                    </div>
                    <div className='col-0 col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-md-3'>
                        <h4>title</h4>
                    </div>
                    <div className='col-md-5'>
                        <img alt='title-photow'></img>
                    </div>
                    <div className='col-0 col-md-2'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PhotoDisplay