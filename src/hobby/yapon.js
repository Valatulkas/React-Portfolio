import React from 'react';
import yapon from '../images/yapon/yapon.JPG';
import blue from '../images/yapon/blue.JPG';
import board from '../images/yapon/board.JPG';
import car from '../images/yapon/car.JPG';
import colors from '../images/yapon/colors.JPG';
import drop from '../images/yapon/drop.JPG';
import lift from '../images/yapon/lift.JPG';
import ramen from '../images/yapon/ramen.JPG';
import snow from '../images/yapon/snow.JPG';
import tempura from '../images/yapon/tempura.JPG';

const Yapon = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ yapon } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>beatiful starting point</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ blue } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>who knows just how much snow</h5>
                    </div>
                    <div className='col-md-1'></div>
                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ lift } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>socked in</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ ramen } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>ramen where you least expect it</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ colors } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>grocery store distractions</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ car } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>someone taking advantage</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ board } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>toys and their terrain</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ drop } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>shocking amount of patience for a photo</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ tempura } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>Tokyo's culinary back alley</h5>
                    </div>
                    <div className='col-md-1'></div>

                    <hr className='my-3' />

                    <div className='col-md-1'></div>
                    <div className='col-md-8 my-3'>
                        <img src={ snow } alt="yapon1" width='500px' height='auto' />
                    </div>
                    <div className='col-md-2 my-3'>
                        <h5>Hokkaido magic</h5>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Yapon