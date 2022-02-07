import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetDate from './getDate';
import GetError from './getError';
import GetFlags from './getFlags';
import GetPays from './getPays';
import GetPaysDate from './getPaysDate';


class GetRoutes extends Component {
  render() {
    return (
    <Router>
<Routes>
<Route exact path="/" element={<GetFlags/>}/>

<Route exact path="/!#" element={<GetFlags/>} />

<Route exact path="/!" element={<GetFlags/>} />

<Route exact path="/covid/byCountry/:pays" element={<GetPays/>}/>

<Route exact path="/covid/:pays/:date" element={<GetPaysDate/>}/>

<Route exact path="/covid/byDate/:date" element={<GetDate/>}/>

<Route exact path="/404" element={<GetError/>}/>



</Routes>
</Router>
    );
  }
}

export default GetRoutes;
