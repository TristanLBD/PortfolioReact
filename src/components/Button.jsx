import React from "react";

export default function Button({ text, color, onClick }) {
  let colorClass = "bg-blue-500";

  console.log(color)
  switch (color) {
    case "green":
      colorClass = "bg-green-500";
      break;
    case "red":
      colorClass = "bg-red-600";
      break;
    default:
      break;
  }

  return (
    <button
      className={`rounded-xl px-4 py-2 text-white font-black ${colorClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}