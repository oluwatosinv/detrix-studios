import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";
import Nav from "./Components/Nav";
import Helmet from "react-helmet";

const HomePage = lazy(() => import("./Components/HomePage"));
const About = lazy(() => import("./Components/About"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const Footer = lazy(() => import("./Components/Footer"));
// const NonWeddingPhotos = lazy(() =>import  ('./Components/NonWeddingPhotos'));
const WeddingVideos = lazy(() => import("./Components/WeddingVideos"));
const WeddingPhotos = lazy(() => import("./Components/WeddingPhotos"));
const NonWeddingVideos = lazy(() => import("./Components/NonWeddingVideos"));
const LoladeAndLanre = lazy(() => import("./Components/LoladeAndLanre"));
const Wemimo = lazy(() => import("./Components/WemmimoAndAyotunde"));
const LanreAndHenry = lazy(() => import("./Components/LanreAndHenry"));
const ChichiAndDavoloche = lazy(() =>
  import("./Components/ChichiAndDavoloche")
);
const weddingPhotography = lazy(() =>
  import("./Components/weddingPhotography")
);
const TeeChi = lazy(() => import("./Components/TeeChi"));
const Muse = lazy(() => import("./Components/Muse"));

function App() {
  return (
    <div>
      <Helmet>

        {/* <!-- HTML Meta Tags --> */}
        <title>Detrix Studios Best nigerian videographers and photographers</title>
        <meta 
          name="description" 
          content="we are a young and vibrant team of professional Photographers and Cinematographers in Lagos, Nigeria with specialty in documenting weddings, events , portrait and documentary."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemprop="name"
          content="Detrix Studios Best nigerian videographers and photographers"
        />
        <meta 
          itemprop="description" 
          content="we are a young and vibrant team of professional Photographers and Cinematographers in Lagos, Nigeria with a specialty in documenting weddings, events, portraits and documentaries."
        />
        <meta 
          itemprop="image" 
          content="https://res.cloudinary.com/tosin/image/upload/v1625480950/detrix/screencapture-detrixstudios-2021-07-05-11_20_53.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta 
          property="og:url" 
          content="https://www.detrixstudios.com"
        />
        <meta 
          property="og:type" 
          content="website"
        />
        <meta 
          property="og:title" 
          content="Detrix Studios Best nigerian videographers and photographers"
        />
        <meta 
          property="og:description" 
          content="we are a young and vibrant team of professional Photographers and Cinematographers in Lagos, Nigeria with a specialty in documenting weddings, events, portraits and documentaries."
        />
        <meta 
          property="og:image" 
          content="https://res.cloudinary.com/tosin/image/upload/v1625480950/detrix/screencapture-detrixstudios-2021-07-05-11_20_53.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta 
          name="twitter:card" 
          content="summary_large_image"
        />
        <meta 
          name="twitter:title"
          content="Detrix Studios Best nigerian videographers and photographers"
        />
        <meta
          name="twitter:description" 
          content="we are a young and vibrant team of professional Photographers and Cinematographers in Lagos, Nigeria with a specialty in documenting weddings, events, portraits and documentaries."
        />
        <meta 
          name="twitter:image" 
          content="https://res.cloudinary.com/tosin/image/upload/v1625480950/detrix/screencapture-detrixstudios-2021-07-05-11_20_53.png"
        />

        {/* <!-- Meta Tags Generated via http://heymeta.com --> */}

      </Helmet>
      <Router>
        <Suspense fallback={<Loader />}>
          <Nav />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            {/* <Route path='/NonWeddingPhotos' component={NonWeddingPhotos}/> */}
            <Route path='/WeddingPhotos' component={WeddingPhotos} />
            <Route path='/NonWeddingVideos' component={NonWeddingVideos} />
            <Route path='/WeddingVideos' component={WeddingVideos} />
            <Route path='/ContactUs' component={ContactUs} />
            <Route path='/Lolade' component={LoladeAndLanre} />
            <Route path='/Lanre' component={LanreAndHenry} />
            <Route path='/Wemimo' component={Wemimo} />
            <Route path='/Chichi' component={ChichiAndDavoloche} />
            <Route path='/weddingPhotography' component={weddingPhotography} />
            <Route path='/TeeChi' component={TeeChi} />
            <Route path='/BridalBloom' component={Muse} />
            <Route
              path='/Client'
              component={() => {
                global.window &&
                  (global.window.location.href =
                    "https://detrixstudios.pixieset.com/");
                return null;
              }}
            />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
