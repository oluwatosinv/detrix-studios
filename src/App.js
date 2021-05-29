import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Nav from './Components/Nav'


import HomePage from './Components/HomePage';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import NonWeddingPhotos from './Components/NonWeddingPhotos';
import NonWeddingVideos from './Components/NonWeddingVideos';
import WeddingVideos from './Components/WeddingVideos';
import WeddingPhotos from './Components/WeddingPhotos';
import LoladeAndLanre from './Components/LoladeAndLanre'
import Wemimo from './Components/WemmimoAndAyotunde';
import LanreAndHenry from './Components/LanreAndHenry';
import ChichiAndDavoloche from './Components/ChichiAndDavoloche';


function App() {
  return (
   <div>
      <Router>
        <Nav />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/about" component={About}/>
            <Route path='/NonWeddingPhotos' component={NonWeddingPhotos}/>
            <Route path='/WeddingPhotos' component={WeddingPhotos}/>
            <Route path='/NonWeddingVideos' component={NonWeddingVideos}/>
            <Route path='/WeddingVideos' component={WeddingVideos}/>
            <Route path='/ContactUs' component={ContactUs}/>
            <Route path='/Lolade' component={LoladeAndLanre}/>
            <Route path='/Lanre' component={LanreAndHenry}/>
            <Route path='/Wemimo' component={Wemimo}/>
            <Route path='/Chichi' component={ChichiAndDavoloche}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
