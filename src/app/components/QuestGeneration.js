"use client";

import { useEffect, useState } from "react";

export default function QuestGeneration({ userInput }) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchCompletion = async () => {
      if (!userInput) return;

      try {
        const res = await fetch("/api/generateQuest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: userInput }),
        });
        const data = await res.json();
        if (res.ok) {
          setResponse(data.response);
        } else {
          console.error("Error:", data.error);
        }
      } catch (error) {
        console.error("Error fetching quest:", error);
      }
    };

    fetchCompletion();
  }, [userInput]);

  // Split response into title and steps
  const [title, ...steps] = response.split("\n").filter(line => line.trim() !== "");

  return (
    <div className="generated-quest">
      <h3 className="generated-quest-title">{title}</h3>
      {steps.map((step, index) => (
        <p key={index} className="generated-quest-step">{step}</p>
      ))}
    </div>
  );
}
