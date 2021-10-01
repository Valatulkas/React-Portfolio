import React from 'react';
import me from './me.png';

const Bio = (props) => {
    return (
        <React.Fragment>
            <div className='container main mt-4'>
                    <div className='col-12'>
                        <img src= { me } alt='moi' width='300px' height='auto'></img>
                    </div>
                    <div className='col-12'>
                        <p>Aspiring full stack web developer</p>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Bio