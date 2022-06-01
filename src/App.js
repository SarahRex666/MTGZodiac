import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [search, setSearch] = useState("");
  const [zodiacData, setZodiacData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards/")
      .then((r) => r.json())
      .then((data) => setZodiacData(data));
  }, []);

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
      <Card zodiacData={zodiacData} search={search} setSearch={setSearch} />
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter Your Zodiac Sign"
          name="searchbar"
          onChange={inputHandler}
        />
        <input type="date" value="Submit" />
      </form>
    </div>
  );
}

export default App;
