import React from 'react';
import { Link } from 'react-router-dom'
import work from './images/petunia/work.JPG';
import feesh from './images/corco/feesh.jpeg';
import yapon from './images/yapon/yapon.JPG';
import subway from './images/snurf/subway.JPG';

const Sugoi = (props) => {
    return (
        <React.Fragment>
            <div className='container main sugoi'>
                <div className='row py-4'>
                    <div className='col-md-12'>
                        <h3 className='sugoi-title'>sugoi (japanese) translates to awesome</h3>
                        <br/>
                    </div>

                    <div className='col-md-7'>
                        <img src={ work } alt='petunia1' width='300px' height='auto' />
                    </div>
                    <div className='col-md-5' id='webdev-fun'>
                        <a>
                            <Link to='./petunia'>
                                <h4>Trials and tribulations of restoring an AWD van</h4>
                            </Link>
                        </a>
                    </div>
                    
                    <hr className='my-3' />

                    <div className='col-md-7'>
                        <img src={ feesh } alt='feesh' width='300px' height='auto' />
                    </div>
                    <div className='col-md-5' id='webdev-fun'>
                        <a>
                        <Link to='./corco'>
                            <h4>watery plains</h4>
                        </Link>
                        </a>
                    </div>

                    <hr className='my-3' />
                
                    <div className='col-md-7'>
                        <img src={ yapon } alt='feesh' width='300px' height='auto' />
                    </div>
                    <div className='col-md-5' id='webdev-fun'>
                        <a>
                        <Link to='./yapon'>
                            <h4>hokkaido hospitality</h4>
                        </Link>
                        </a>
                    </div>

                    <hr className='my-3' />
                    
                    <div className='col-md-7'>
                        <img src={ subway } alt='feesh' width='300px' height='auto' />
                    </div>
                    <div className='col-md-5' id='webdev-fun'>
                        <a>
                        <Link to='./wuter'>
                            <h4>subway surfin</h4>
                        </Link>
                        </a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Sugoi