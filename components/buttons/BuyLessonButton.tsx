"use client";

import React from "react";

const BuyLessonButton = ({ lesson }: { lesson: string }) => {
  return (
    <button
      type="button"
      className="py-2 px-6 bg-rose-500 text-white font-medium text-xl rounded-md hover:bg-rose-400 active:bg-rose-500"
    >
      Kupi Lekciju
    </button>
  );
};

export default BuyLessonButton;
