import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Portfolio Loading/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText,onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center">
      {/* Typing text */}
      <div className="mb-4 text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r 
      from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>

      {/* Loading bar */}
      <div className="w-[200px] h-2 bg-gray-800 rounded relative overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-loading-bar">
        </div>
      </div>
    </div>
  );
};
