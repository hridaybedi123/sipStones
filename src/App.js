import './App.css';
import Home from './Home';
import Scholarships from './Scholarships';
import Contact from './Contact';
import Login from './Login';
import SignUp from './SignUp';
import Error from './Error';
import React from 'react';
import About from './About';
import PostSecondary from './PostSecondary';
import ClassChat from './ClassChat';
import Assignments from './Assignments';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Scholarships" element={<Scholarships />} />
          <Route path="/ClassChat" element={<ClassChat />} />
          <Route path="/PostSecondary" element={<PostSecondary />} />
          <Route path="/Assignments" element={<Assignments />} />
          <Route path="*" element={<Error />}/>
        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;
/**
 * <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
 */