import React, { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Loader from './Components/Loader';
import Nav from './Components/Nav'


const HomePage = lazy(() =>import  ( './Components/HomePage'));
const About = lazy(() =>import ('./Components/About'));
const ContactUs = lazy(() =>import ('./Components/ContactUs'));
const Footer = lazy(() =>import ('./Components/Footer'));
const NonWeddingPhotos = lazy(() =>import  ('./Components/NonWeddingPhotos'));
const WeddingVideos = lazy(() =>import ('./Components/WeddingVideos'));
const WeddingPhotos = lazy(() =>import ('./Components/WeddingPhotos'));
const NonWeddingVideos = lazy(() =>import ('./Components/NonWeddingVideos'));
const LoladeAndLanre = lazy(() =>import ('./Components/LoladeAndLanre'));
const Wemimo = lazy(() =>import ('./Components/WemmimoAndAyotunde'));
const LanreAndHenry = lazy(() =>import ('./Components/LanreAndHenry'));
const ChichiAndDavoloche = lazy(() =>import ('./Components/ChichiAndDavoloche'));
const weddingPhotography = lazy(() =>import ('./Components/weddingPhotography'));
const TeeChi = lazy(() =>import ('./Components/TeeChi'));
const Muse = lazy(() =>import ('./Components/Muse'));


function App() {
  return (
   <div>
      <Router>
        <Suspense fallback={<Loader />}>
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
            <Route path='/weddingPhotography' component={weddingPhotography}/>
            <Route path='/TeeChi' component={TeeChi}/>
            <Route path='/BridalBloom' component={Muse}/>
            <Route
              path="/Client"
              component={() => {
                global.window && (global.window.location.href = 'https://detrixstudios.pixieset.com/');
                return null;
                }}
            />
          </Switch>
        <Footer/>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
