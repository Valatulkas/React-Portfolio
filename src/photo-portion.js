import React from 'react';
import Bio from './bio';

const IntroDisplay = (props) => {
    return (
        <React.Fragment>
            <Bio />

            <div className='container main my-4 photo-background'>
                <div id='forecast'>
                    <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" /><div class="wf-width-cont surf-fc-widget"><div class="widget-container"><div class="external-cont"><iframe class="surf-fc-i" allowtransparency="true" src="//www.surf-forecast.com/breaks/Road-K/forecasts/widget/a" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe><div class="footer"><a class="logo" href="//www.surf-forecast.com/"><img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width="1" height="1" /></a><div class="about" id="cmt">More <a href="//www.surf-forecast.com/breaks/Road-K">Detailed Surf Conditions &amp; Webcams for&nbsp;Road K</a> <nobr>at&nbsp;<a href="//www.surf-forecast.com/">surf-forecast.com</a></nobr>.</div></div></div></div></div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default IntroDisplay