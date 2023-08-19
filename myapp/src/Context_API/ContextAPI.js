import { useEffect, useState } from "react";
import Gallery from "./CreateContext";
import axios from "axios";

export default function ContextAPI({ children }) {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState("Mountains");
  const [Images, setImages] = useState([]);

  async function fetchImages(category) {
    const params = {
      method: process.env.REACT_APP_METHOD,
      api_key: process.env.REACT_APP_SECRET_KEY,
      tags: category,
      per_page: 100,
      format: "json",
      nojsoncallback: 1,
    };
    const Parameters = new URLSearchParams(params);
    const url = `${process.env.REACT_APP_URL}${Parameters}`;

    try {
      const res = await axios.get(url);
      if (res.data.photos && res.data.photos.photo) {
        setImages(res.data.photos.photo);
        setInput("");
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  }

  useEffect(() => {
    if (category) {
      fetchImages(category);
    }
    // eslint-disable-next-line
  }, [category]);

  const contextValue = {
    Images,
    input,
    setInput,
    toggle,
    setToggle,
    category,
    setCategory,
  };

  return <Gallery.Provider value={contextValue}>{children}</Gallery.Provider>;
}
