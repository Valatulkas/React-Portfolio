import React from 'react';
import currency from './images/urls/currency.png';
import mathgame from './images/urls/mathgame.png';

const Jsprojects = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='project-title my-4'><b>JS - React.js</b></h2>
                    </div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-4' id='webdev'>
                        <a href='https://jovial-jepsen-0d057e.netlify.app/' target="_blank">
                            <img src={ currency } width='688' height='auto' />
                            <h3>--- React Currency Converter ---</h3>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-4 my-3' id='webdev'>
                        <a href='https://peaceful-hoover-ec2589.netlify.app/' target="_blank">
                            <img src={ mathgame } width='388' height='auto' />
                            <h3>--- Simple Math Game ---</h3>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Jsprojects
