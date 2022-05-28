import "./App.css";
import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [search, setSearch] = useState("");

  function inputHandler(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  function submitHandler(event) {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search);
  }

  return (
    <div className="App">
      <Card search={search} setSearch={setSearch} />
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter Your Zodiac Sign"
          name="searchbar"
          onChange={inputHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
