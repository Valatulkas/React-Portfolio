import React from 'react';
import subway from './images/snurf/subway.JPG'

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-4'>
                <div className='row'>
                    <div className='col-0 col-md-1'></div>
                    <div className='col-12 col-md-10' id='bio' style={{backgroundImage: `url(${ subway })`}}>
                        <div className='bio1-parent'>
                            <div id='bio1'>
                                <h4>ASPIRING FULL STACK WEB DEVELOPER</h4>
                                <h4>FINISHING FULL STACK BOOTCAMP THROUGH ALTCADEMY</h4>
                                <h4>AIMING TO PROGRESS ENVIRONMENTAL AGENDAS</h4>
                                <h4>SPECIFICALLY SLOW FOODS AND RENEWABLE ENERGIES</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-0 col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio