import React, { useEffect, useState } from "react";

function App() {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [meaning, setMeaning] = useState("");
  const [word, setWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const meaningObj = dictionary.filter((element) => {
      return element.word.toLowerCase() == word.toLowerCase();
    });

    if (meaningObj.length > 0) {
      setMeaning(meaningObj[0].meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        name="word"
        id="word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit">Search</button>
      <h3>Definition:</h3>
      <p>{meaning}</p>
    </form>
  );
}

export default App;
