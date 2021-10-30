import React from 'react';
import todolist from './images/urls/todolist.png';

const Railsprojects = () => {
    return (
        <React.Fragment>
            <div className='container main'>
                <div className='row'>
                    <div className='col-0 col-md-2'></div>
                        <div className='col-12 col-md-8'>
                            <br/>
                            <h1 className='project-title my-4'><b>Full Stack Rails Projects</b></h1>
                        </div>
                        <div className='col-0 col-md-2'></div>

                        <div className='col-0 col-md-2'></div>
                        <div className='col-12 col-md-8 pt-2' id='webdev'>
                            <a href='https://jf-fullstack-ruby-todo-list.herokuapp.com/' target="_blank">
                                <img src={ todolist } width='788px' height='auto' />
                                <h2 id='reveal'>To Do List</h2>
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