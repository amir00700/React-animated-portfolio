import React from 'react';
//import pages
import AboutUs from "./Pages/AboutUs";
import Nav from './Components/Nav'
//Global style
import GlobalStyle from './Components/GlobalStyle'
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import MovieDetail from './Pages/MovieDetail';
import {Switch, Route,useLocation} from "react-router-dom";

//animation
import {AnimatePresence,} from "framer-motion";



function App() {
  const location=useLocation();
  console.log(location)
  return (
    <div className="App">
      
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
        <AboutUs/>
      </Route>
      <Route path="/work" exact>
        <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetail/>
      </Route>
      <Route path="/contact">
        <ContactUs/>
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
