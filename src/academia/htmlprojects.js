import React from 'react';
import airbnb from '../images/urls/airbnb.png';
import apple from '../images/urls/apple.png';
import newsweek from '../images/urls/newsweek.png';

const Htmlprojects = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8'>
                        <br/>
                        <h1 className='project-title my-4'><b>Static Clone Sites</b></h1>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 py-5' id='webdev'>
                        <a href='https://eager-lamarr-f0647c.netlify.app/' target="_blank">
                            <img src={ apple } width='64%' height='auto' />
                            <h2>Apple</h2>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 py-5 mt-2' id='webdev'>
                        <a href='https://romantic-raman-89cffe.netlify.app/' target="_blank">
                            <img src={ newsweek } width='64%' height='auto' />
                            <h2>Newsweek</h2>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 py-5 my-2' id='webdev'>
                        <a href='https://optimistic-jepsen-9be5a6.netlify.app/' target="_blank">
                            <img src={ airbnb } width='64%' height='auto' /> 
                            <h2 id='reveal'>AirBNB Newsroom</h2>
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
