import React, { useContext } from "react";
import Gallery from "../Context_API/CreateContext";
import "./ImagesRender.css";

export default function ImagesRender() {
  const { category, Images } = useContext(Gallery);

  return (
    <div>
      <div className="Heading">{category && <h1>{category} Pictures</h1>}</div>

      <div className="img-container">
        {Images.map((imgs) => {
          return (
            <img
              key={imgs.id}
              src={`${process.env.REACT_APP_IMG_RENDER}/${imgs.server}/${imgs.id}_${imgs.secret}.jpg`}
              alt="logo"
            />
          );
        })}
      </div>
    </div>
  );
}

