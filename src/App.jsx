import React from "react";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import styled from 'styled-components'
const title = "Slideshow App";

const App = () => {
  return (
      <><Navbar></Navbar>

      <Slides />
    </>
  );
};

export default App;


