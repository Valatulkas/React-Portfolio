import React from 'react';
import feens from './images/snurf/feens.jpg'

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-4'>
                <div className='row'>
                    <div className='col-0 col-md-1'></div>
                    <div className='col-12 col-md-10' id='bio' style={{backgroundImage: `url(${ feens })`}}>
                            <div id='bio1' className='mt-5 pt-5'>
                                <h1>aspiring full stack developer</h1>
                                <hr/>
                                <h1>aiming to progress environmental agendas</h1>
                                <hr/>
                                <h1>specifically slow food and renewable energies</h1>
                                <hr/>
                                <h1>surfin in the NorthEastern USA in the meantime</h1>
                                <hr/>
                                <h2>(might find me in the waters of Long Island pending the below..)</h2>
                            </div>
                    </div>
                    <div className='col-0 col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio