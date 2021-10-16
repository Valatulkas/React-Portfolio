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
                                <h4>aspiring full stack developer</h4>
                                <br/>
                                <h4>aiming to progress environmental agendas</h4>
                                <br/>
                                <h4>specifically slow food and renewable energies</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-0 col-md-1'></div>
                    <h3 id='synopsis' className='mt-5'>surfin in the NorthEastern USA in the meantime... might find me in waters off the Long Island coast</h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio