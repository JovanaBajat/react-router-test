import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Css from './courses/CSS';
import Html from './courses/HTML';
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route path='/courses/html' component={Html}/>
    <Route path='/courses/css' component={Css}/>
    <Route path='/courses/JavaScript' component={JavaScript}/>


  </div>
);

export default Courses;
