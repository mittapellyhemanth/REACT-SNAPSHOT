import React from "react";
import { Route, Routes } from "react-router-dom";

import Categories from "./Categories";
import Mountains from "../Pages/Mountains";
import Beachs from "../Pages/Beachs";
import Birds from "../Pages/Birds";
import Food from "../Pages/Food";

export default function ImgRouters() {
  return (
    <Routes>
      <Route path="/" element={<Categories />}>
        <Route path="/Search" element />
        <Route path="/Mountains" element={<Mountains />} />
        <Route path="/Beachs" element={<Beachs />} />
        <Route path="/Birds" element={<Birds />} />
        <Route path="/Food" element={<Food />} />
      </Route>
    </Routes>
  );
}
