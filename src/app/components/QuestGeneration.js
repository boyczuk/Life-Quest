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

  return (
    <div>
      <h2>Generated Quest</h2>
      <p>{response || "Waiting for quest generation..."}</p>
    </div>
  );
}
