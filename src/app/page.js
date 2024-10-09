"use client";

import { useState } from "react";
import QuestGeneration from "./components/QuestGeneration";
import "./App.css";

export default function Home() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="container">
      <h1 className="title">Skyrim-like Quests</h1>
      <div className="description">
        <p>Using GPT API to generate quests to make life easier!</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput(e.target.userInput.value);
        }}
        className="quest-form"
      >
        <input
          id="userInput"
          type="text"
          placeholder="Enter your quest here..."
          className="quest-input"
        />
        <button type="submit" className="quest-button">Generate Quest</button>
      </form>
      {userInput && <QuestGeneration userInput={userInput} />}
    </div>
  );
}