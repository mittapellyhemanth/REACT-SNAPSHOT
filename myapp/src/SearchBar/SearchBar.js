import React, { useContext, useEffect } from "react";
import Gallery from "../Context_API/CreateContext";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  // taken from contextAPI
  const { input, setInput, setCategory } = useContext(Gallery);
  //created searchParams
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInput = searchParams.get("text") || "";
  useEffect(() => {
    if (searchInput) {
      setCategory(searchInput);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  const handler = (e) => {
    e.preventDefault();
    setCategory(input);
    setSearchParams({ text: `${input}` });
  };

  return (
    <div>
      <div className="Search-container">
        <form method="GET" onSubmit={handler}>
          <div>
            <Link to={"/Search"}>
              <input
                type="text"
                placeholder="Search...."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="input-box"
              />
            </Link>{" "}
          </div>
          <button className="btn-search" type="submit">
            <span>
              <FaSearch />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
