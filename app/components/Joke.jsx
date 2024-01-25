import React from "react";

const Joke = ({ joke }) => {
  return (
    <div className="p-4 mt-8 max-w-full overflow-x-scroll bg-gray-200">
      <pre>{joke}</pre>
    </div>
  );
};

export default Joke;
