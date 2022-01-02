import React from 'react';
import me from './images/me.png'

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-5 pt-4'>
                <div className='row' id='bio'>
                    <div className='col-0 col-md-1'></div>
                    <div className='col-12 col-md-4 mt-4' id='bio'>
                        <a href='/snake'>
                            <img src={ me } alt='jferg' width='320px' height='auto' id='me'/>
                        </a>
                    </div>
                    <div className='col-12 col-md-6'>
                                <h3>aspiring full stack developer</h3>
                                <hr/>
                                <h3>aiming to progress environmental agendas</h3>
                                <hr/>
                                <h3>specifically slow food and renewable energies</h3>
                                <hr/>
                                <h3>surfin in the NorthEastern USA in the meantime</h3>
                                <hr/>
                                <h3>(might find me in the waters of Long Island pending the below..)</h3>
                            </div>
                    <div className='col-0 col-md-1'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio