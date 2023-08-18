import React, { useContext, useEffect } from "react";
import Gallery from "../Context_API/CreateContext";

function useCategoryUpdater(categoryName) {
  const { category, setCategory } = useContext(Gallery);
  useEffect(() => {
    if (category !== categoryName) {
      setCategory(categoryName);
    }
  }, [categoryName, category, setCategory]);
  return <>
  </>;
}
export default useCategoryUpdater;
