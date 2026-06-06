"use client";

import { useState } from "react";

export default function ChatInput() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!question.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      setAnswer(data.response);
    } catch (error) {
      console.error(error);
      setAnswer("Erro ao consultar a IA.");
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Pergunte algo sobre seu coelho..."
        className="border rounded-xl p-3"
      />

      <button
        onClick={handleSend}
        className="bg-purple-600 text-white rounded-xl p-3"
      >
        {loading ? "Consultando..." : "Enviar"}
      </button>

      {answer && (
        <div className="border rounded-xl p-4 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
}