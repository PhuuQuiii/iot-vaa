"use client";
import React, { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Page = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");

  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  useEffect(() => {
    recognition.onstart = () => {
      console.log("Voice recognition started");
    };

    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setSpokenText(transcript);
    };

    recognition.onend = () => {
      console.log("Voice recognition ended");
      setIsListening(false);
    };
  }, []);

  useEffect(() => {
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [isListening]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-4xl font-bold mb-8">{spokenText}</p>
      <button
        onClick={toggleListening}
        className={`rounded-full p-4 mb-12 ${
          isListening ? "bg-blue-500" : "bg-white"
        }`}
        style={{ marginTop: "calc(100vh / 3)" }}
      >
        <img
          src="/microphone.png"
          alt="Microphone"
          style={{ width: 150, height: 150 }}
        />
      </button>
    </div>
  );
};

export default Page;
