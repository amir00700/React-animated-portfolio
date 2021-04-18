import React from 'react';
//import pages
import AboutUs from "./Pages/AboutUs";
import Nav from './Components/Nav'
//Global style
import GlobalStyle from './Components/GlobalStyle'



function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyle/>
      <AboutUs/>

    </div>
  );
}

export default App;
