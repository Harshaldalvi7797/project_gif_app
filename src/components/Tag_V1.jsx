/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");
  // why this?????
  //component did mount  ... first render
  const fetchGif = async tag => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url); //promise
    console.log(data);
    const imgsrc = data.data.images.downsized_large.url;
    setGif(imgsrc);
  };
  useEffect(() => {
    //effect callback prevent so new function create

    fetchGif(tag);
  }, [tag]);
  const handleClick = () => {
    fetchGif(tag);
  };
  return (
    <div>
      <h1>Random {tag}</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input
        value={tag}
        onChange={e => {
          setTag(e.target.value);
        }}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};
export default Tag;
