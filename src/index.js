import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

import ReactPixel from 'react-facebook-pixel';

const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init('224820726147826', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.fbq('track', 'PageView');
// ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
// ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
// ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
// ReactPixel.trackSingleCustom('PixelId', event, data); // For tracking custom events.

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
