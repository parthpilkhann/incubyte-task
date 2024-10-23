"use client";

import { add } from "@/helpers/client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>(0);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult(String(error));
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          String Calculator
        </h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
          className="w-full p-2 mb-4 text-black bg-gray-200 rounded"
        />
        <button
          onClick={handleCalculate}
          className="w-full p-2 mb-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Calculate
        </button>
        <p className="text-white text-lg">Result: {result}</p>
      </div>
    </div>
  );
}
