"use client";
import React, { useState } from "react";
import { askRecife } from "../utils/askRecife";
import { DNA } from "react-loader-spinner";
import Note from "./Note";
import Joke from "./Joke";
import Loading from "./Loading";

const AskRecife = () => {
  const [jokeMessage, setJokeMessage] = useState("");
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await askRecife(jokeMessage);
      setJoke(response);
    } catch (error) {
      setJoke(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" w-full">
      <form
        onSubmit={handleSubmit}
        className=" flex py-8 px-2 border rounded-lg items-center flex-col gap-4"
      >
        <h1 className=" capitalize text-center text-base sm:text-2xl text-blue-600 font-bold">
          Ask programming jokes 😍
        </h1>
        <input
          type="text"
          value={jokeMessage}
          required
          className=" bg-blue-100 w-full sm:w-[400px] focus:ring-2 focus:ring-blue-400 px-4 py-1.5 outline-none rounded-lg"
          onChange={(e) => setJokeMessage(e.target.value)}
        />
        <button
          disabled={loading}
          className={`${
            !loading && "active:scale-90 "
          } disabled:cursor-not-allowed disabled:opacity-60 duration-300 w-[200px] py-1 rounded-lg text-white capitalize bg-blue-600`}
        >
          ask
        </button>
        <Note />
      </form>
      {joke && <Joke joke={joke} />}
      {loading && <Loading />}
    </div>
  );
};

export default AskRecife;
