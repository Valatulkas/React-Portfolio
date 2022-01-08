import React from 'react';
import todolist from '../images/urls/todolist.png';
import twitter from '../images/urls/twitter.png';

const Railsprojects = () => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8'>
                        <br/>
                        <h1 className='project-title my-4'><b>Ruby on Rails</b></h1>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 pt-5 mb-3' id='webdev'>
                        <a href='https://jf-fullstack-ruby-todo-list.herokuapp.com/' target="_blank">
                            <img src={ todolist } width='64%' height='auto' />
                            <h2 id='reveal'>Full Stack To Do List</h2>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>

                    <div className='col-0 col-md-2'></div>
                    <div className='col-12 col-md-8 py-5 mb-3' id='webdev'>
                        <a href='https://rails-fs-twitter-clone.herokuapp.com/' target="_blank">
                            <img src={ twitter } width='64%' height='auto' />
                            <h2 id='reveal'>Ruby in Rails Twitter Clone <br/> <small>Raect frontend</small></h2>
                            <br/>
                        </a>
                    </div>
                    <div className='col-0 col-md-2'></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Railsprojects