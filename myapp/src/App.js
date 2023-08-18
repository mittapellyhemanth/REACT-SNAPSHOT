import React from "react";
import ImgRouters from "./Routers/ImgRouters";
import ContextAPI from "./Context_API/ContextAPI";
import ImagesRender from "./ImagesRender/ImagesRender";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ContextAPI>
        
            <h1 className="title">Snapshot</h1>
          
          <ImgRouters />
          <ImagesRender />
        </ContextAPI>
      </BrowserRouter>
    </div>
  );
}

export default App;
