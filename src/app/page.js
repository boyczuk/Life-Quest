import Image from "next/image";
import QuestGeneration from "./components/QuestGeneration";

export default function Home() {
  return (
    <div className="header">
      <h1>Skyrim-like Quests</h1>
      <div className="body">
        <p>Using GPT API to generate quests to make life easier!</p>
      </div>
      <QuestGeneration />
    </div>
  );
}
