import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

//YouTube API key
const API_KEY = "AIzaSyB06grBaZDce5H3xBSr0JHFOwC1lpz2s7w";

// create a new component. This component
// should produce some HTML
const App = () => {
  return (
    //this is a functional conmponent because it doesn't have any concept of state
    <div>
      <SearchBar />
    </div>
  );
};
// takes this components generated HTML
// and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
