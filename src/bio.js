import React from 'react';
import me from './images/me.png';

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-4'>
                <div className='row'>
                    <div className='col-6' id="forecast">
                        <img src= { me } alt='moi' width='280px' height='auto'></img>
                    </div>
                    <div className='col-6'>
                        <p>Aspiring full stack web developer</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio