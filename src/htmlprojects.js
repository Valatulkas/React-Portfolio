import React from 'react';
import airbnb from './images/urls/airbnb.png';
import apple from './images/urls/apple.png';
import newsweek from './images/urls/newsweek.png';

const Htmlprojects = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 my-4'>
                        <h2 className='project-title'><b>Static Clone Sites</b></h2>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-2' id='webdev'>
                        <a href='https://eager-lamarr-f0647c.netlify.app/' target="_blank">
                            <img src={ apple } width='788px' height='auto' />
                            <h3>--- Apple ---</h3>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-2 mt-4' id='webdev'>
                        <a href='https://romantic-raman-89cffe.netlify.app/' target="_blank">
                            <img src={ newsweek } width='788px' height='auto' />
                            <h3>--- Newsweek ---</h3>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-2 my-4' id='webdev'>
                        <a href='https://optimistic-jepsen-9be5a6.netlify.app/' target="_blank">
                            <img src={ airbnb } width='788' height='auto' /> 
                            <h3>--- AirBNB Newsroom ---</h3>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Htmlprojects
