/** @format */

import React from "react";
import "./App.css";
import Random from "./components/Random_V1";
import Tag from "./components/Tag_V1";
import useGif from "./useGif";
export default function App() {
  return (
    <div>
      <h1>Random GIF Application</h1>
      <div className="main-container">
        {/* <Random />
        <Tag /> */}
        <useGif />
      </div>
    </div>
  );
}
