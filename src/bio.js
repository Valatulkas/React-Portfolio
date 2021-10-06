import React from 'react';
import me from './images/me.png';

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-4'>
                    <div className='col-12' id="forecast">
                        <img src= { me } alt='moi' width='280px' height='auto'></img>
                    </div>
                    <div className='col-12'>
                        <p>Aspiring full stack developer</p>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Bio