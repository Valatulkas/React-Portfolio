import React from 'react';
import airbnb from './images/urls/airbnb.png';
import apple from './images/urls/apple.png';
import newsweek from './images/urls/newsweek.png';
import currency from './images/urls/currency.png';
import mathgame from './images/urls/mathgame.png';

const Project = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>
                            WebDev Projects
                        </h2>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <h4>HTML - CSS3 Clone Sites</h4>
                    </div>

                    <div className='col-md-12' id='webdev'>
                        <a href='https://eager-lamarr-f0647c.netlify.app/' target="_blank">
                            <img src={ apple } width='788px' height='auto' />
                            <h5>Apple</h5>
                            <br/>
                        </a>
                    </div>

                    <div className='col-md-12' id='webdev'>
                        <a href='https://romantic-raman-89cffe.netlify.app/' target="_blank">
                            <img src={ newsweek } width='788px' height='auto' />
                            <h5>Newsweek</h5>
                            <br/>
                        </a>
                    </div>

                    <div className='col-md-12' id='webdev'>
                        <a href='https://optimistic-jepsen-9be5a6.netlify.app/' target="_blank">
                            <img src={ airbnb } width='788' height='auto' /> 
                            <h5>AirBNB Newsroom</h5>
                            <br/>
                        </a>
                    </div>

                    <hr/>

                    <div className='col-12'>
                        <h4>JS - React.js</h4>
                    </div>
                    <div className='col-md-12' id='webdev'>
                        <a href='https://jovial-jepsen-0d057e.netlify.app/' target="_blank">
                            <img src={ currency } width='688' height='auto' />
                            <h5>React Currency Converter</h5>
                            <br/>
                        </a>
                    </div>
                    <br/>

                    <div className='col-md-12' id='webdev'>
                        <a href='https://peaceful-hoover-ec2589.netlify.app/' target="_blank">
                            <img src={ mathgame } width='388' height='auto' />
                            <h5>Simple Math Game</h5>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project
