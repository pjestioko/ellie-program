import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Milestones from './components/pages/Milestones/Milestones';
// import Godparents from './components/pages/Godparents/Godparents';
import Thanks from './components/pages/Thanks/Thanks';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/milestones" exact component={Milestones} />
          {/* <Godparents /> */}
          <Route path="/thanks" exact component={Thanks} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
