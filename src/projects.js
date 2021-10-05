import React from 'react';
import airbnb from './urls/airbnb.png'
import apple from './urls/apple.png'
import newsweek from './urls/newsweek.png'
import currency from './urls/currency.png'

const Project = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-12'>
                        <h2>
                            WebDev Projects
                        </h2>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <h4>HTML5 - CSS3</h4>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://eager-lamarr-f0647c.netlify.app/' target="_blank">
                            <img src={ apple } width='600px' height='auto' />
                            <h5>Apple Clone</h5>
                            <br/>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://romantic-raman-89cffe.netlify.app/' target="_blank">
                            <img src={ newsweek } width='600px' height='auto' />
                            <h5>Newsweek Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://optimistic-jepsen-9be5a6.netlify.app/' target="_blank">
                            <img src={ airbnb } width='600px' height='auto' /> 
                            <h5>AirBNB Newsroom Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>
                    <hr/>

                    <div className='col-12'>
                        <h4>JS - React.js</h4>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://jovial-jepsen-0d057e.netlify.app/' target="_blank">
                            <img src={ currency } width='600px' height='auto' />
                            <h5>React Currency Converter</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>
                    <br/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project
