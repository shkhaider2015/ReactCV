import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { HomeComp } from "./Components/Home";

function App() {

  return <BrowserRouter >
        <HomeComp />
  </BrowserRouter>
}

export default App;
