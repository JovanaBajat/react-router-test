import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Courses from './Courses';
import Teachers from './Teachers';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path='/' component={Home} />
      <Route  path='/about' render={() => <About title='recoucou' />} />
      <Route  path='/courses' component={Courses} />
      <Route  path='/teachers' component={Teachers} />

    </div>
  </BrowserRouter>
);

export default App;
