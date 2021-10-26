import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/about';
import Home from './Pages/index';
import Contact from './Pages/contact';
import Resume from './Pages/resume';
import Portfolio from './Pages/portfolio';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="page-contanier">
         <div className="page-wrap">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component={Home} />
        <Route path='/about' exact component={About} /> 
        <Route path='/portfolio'exact component={Portfolio} />
        <Route path='/contact'exact component={Contact} />
        <Route path='/resume'exact component={Resume} />
      </Switch>
    </Router>
     </div>
    <Footer/>
   </div>
  );
}

export default App;
