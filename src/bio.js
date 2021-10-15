import React from 'react';
import subway from './images/snurf/subway.JPG'

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-4'>
                <div className='row'>
                    <div className='col-6' id="forecast">
                        <img src= { subway } alt='moi' width='600px' height='auto'></img>
                    </div>
                    <div className='col-6'>
                        <p>Aspiring full stack web developer</p>
                        <p>Finishing Altcademy full stack bootcamp</p>
                        <p>Aiming to progress local and global environmental movements</p>
                        <p>Specifically the production and distribution of slow foods and renewable energies</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio