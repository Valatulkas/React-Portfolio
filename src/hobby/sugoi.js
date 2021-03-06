import React from 'react';
import { Link } from 'react-router-dom'
import work from '../images/petunia/work.JPG';
import feesh from '../images/corco/feesh.jpeg';
import snowy from '../images/yapon/snowy.JPG';
import sneaky from '../images/snurf/sneaky.JPG';

const Sugoi = (props) => {
    return (
        <React.Fragment>
            <div className='container main sugoi'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3 className='sugoi-title my-4'>sugoi ~ photo ramblings</h3>
                    </div>

                    <div className='col-md-12 mb-4 py-3' id='borders'>
                        <div id='webdev-fun'>
                            <a>
                                <Link to='./corco'>
                                    <img src={ feesh } alt='feesh' width='400px' height='auto' />
                                    <h4>watery plains</h4>
                                </Link>
                            </a>
                        </div>
                    </div>
                
                    <div className='col-md-12 my-4 py-3' id='borders'>
                        <div id='webdev-fun'>
                            <a>
                                <Link to='./yapon'>
                                    <img src={ snowy } alt='snowy-japan' width='400px' height='auto' />
                                    <h4>hokkaido hospitality</h4>
                                </Link>
                            </a>
                        </div>
                    </div>


                    <div className='col-md-12 my-4 py-3' id='borders'>
                        <div id='webdev-fun'>
                            <a>
                                <Link to='./petunia'>
                                    <img src={ work } alt='petunia1' width='400px' height='auto' />
                                    <h4>Trials and tribulations of restoring an AWD van</h4>
                                </Link>
                            </a>
                        </div>
                    </div>
                
                    
                    <div className='col-md-12 my-4 py-3' id='borders'>
                        <div id='webdev-fun'>   
                            <a>
                                <Link to='./wuter'>
                                    <img src={ sneaky } alt='barrel' width='400px' height='auto' />
                                    <h4>sneaky</h4>
                                </Link>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </React.Fragment>
    )
}

export default Sugoi