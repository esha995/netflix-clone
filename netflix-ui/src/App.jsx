import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" elements={<Login/>} />
      <Route exact path="/signup" elements={<Signup/>} />
      <Route exact path="/netflix" elements={<Netflix/>} />
    </Routes>
    </BrowserRouter>
  );
}
