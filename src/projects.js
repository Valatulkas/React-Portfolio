import React from 'react';

const Project = (props) => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-12'>
                        <h3>
                            WebDev Projects
                        </h3>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://eager-lamarr-f0647c.netlify.app/'>
                            <h5>Apple Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://romantic-raman-89cffe.netlify.app/'>
                            <h5>Newsweek Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://optimistic-jepsen-9be5a6.netlify.app/'>
                            <h5>AirBNB Newsroom Clone</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>

                    <div className='col-md-2'></div>
                    <div className='col-md-8' id='webdev'>
                        <a href='https://jovial-jepsen-0d057e.netlify.app/'>
                            <h5>React Currency Converter</h5>
                        </a>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project
