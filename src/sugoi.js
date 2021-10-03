import React from 'react';
import { Link } from 'react-router-dom'
import work from './work.JPG';
import feesh from './feesh.jpeg';
import yapon from './yapon.JPG';
import subway from './subway.JPG';

const Sugoi = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>

                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <img src={ work } alt='petunia1' width='300px' height='auto' />
                    </div>
                    <div className='col-md-4'>
                        <Link to='./petunia'>
                            <h4>Trials and tribulations of restoring an AWD van</h4>
                        </Link>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                    <img src={ feesh } alt='feesh' width='300px' height='auto' />
                    </div>
                    <div className='col-md-4'>
                        <Link to='./corco'>
                            <h4>watery plains</h4>
                        </Link>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                    <img src={ yapon } alt='feesh' width='300px' height='auto' />
                    </div>
                    <div className='col-md-4'>
                        <Link to='./yapon'>
                            <h4>hokkaido hospitality</h4>
                        </Link>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                    <img src={ subway } alt='feesh' width='300px' height='auto' />
                    </div>
                    <div className='col-md-4'>
                        <Link to='./wuter'>
                            <h4>subway surfin</h4>
                        </Link>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                </div>

        </React.Fragment>
    )
}

export default Sugoi