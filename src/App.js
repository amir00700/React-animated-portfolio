import React from 'react';
//import pages
import AboutUs from "./Pages/AboutUs";
import Nav from './Components/Nav'
//Global style
import GlobalStyle from './Components/GlobalStyle'
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import MovieDetail from './Pages/MovieDetail';
import {Switch, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyle/>
      <Switch>
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
      
      
    


    </div>
  );
}

export default App;
