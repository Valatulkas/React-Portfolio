import React from 'react';
import currency from '../images/urls/currency.png';
import mathgame from '../images/urls/mathgame.png';
import dash from '../images/urls/dash.png'

const Jsprojects = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-12'>
                    <br/>
                        <h1 className='project-title my-4'><b>JS - React.js</b></h1>
                    </div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-5' id='webdev'>
                        <a href='https://currency-exchange-react-app-jf.herokuapp.com/' target="_blank">
                            <img src={ currency } width='64%' height='auto' />
                            <div className='reveal'>
                                <h2>React Currency Converter</h2>
                            </div>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-5' id='webdev'>
                        <a href='https://github.com/Valatulkas/c-dashboard' target="_blank">
                            <img src={ dash } width='64%' height='auto' />
                            <div className='reveal'>
                                <h2>DeFi Dashboard</h2>
                                <h4>demonstrative purposes, need to download repo and run node backend per ReadMe</h4>
                            </div>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-5 my-3' id='webdev'>
                        <a href='https://peaceful-hoover-ec2589.netlify.app/' target="_blank">
                            <img src={ mathgame } width='64%' height='auto' />
                            <div className='reveal'>
                                <h2>Math Game</h2>
                            </div>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Jsprojects
