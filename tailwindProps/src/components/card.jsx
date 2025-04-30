import React from "react";

function Card() {
  return (
    <div className="p-5 border rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold">Class Warfare</h2>
      <p className="font-light text-lg">The Anti-Patterns</p>
      <div className="flex justify-center gap-1 text-sm text-gray-600 mt-2">
        <span>No. 4</span>
        <span>·</span>
        <span>2025</span>
      </div>
      <img
        className="size-48 shadow-xl rounded-md mt-4"
        alt=""
        src="/img/cover.png"
      />
    </div>
  );
}

export default Card;
