"use client";

import { useEffect, useState } from "react";

export default function QuestGeneration() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchCompletion = async () => {
      try {
        const res = await fetch("/api/generateQuest");
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
  }, []);

  return (
    <div>
      <h2>Generated Quest</h2>
      <p>{response}</p>
    </div>
  );
}
