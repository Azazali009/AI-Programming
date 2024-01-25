import React from "react";
import { DNA } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className=" flex gap-4 items-center">
      <p className=" text-2xl bg-gray-200 w-14 h-14 flex items-center justify-center rounded-full">
        😁
      </p>
      <DNA />
    </div>
  );
};

export default Loading;
