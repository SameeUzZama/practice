import axios from "axios";
import React, { useState, useEffect } from "react";

export const ApiCallPractice = () => {
  const [pho, setPho] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setPho(res.data);
      })
      .catch((error) => console.log("this is error", error));
  });
  return (
    <div>
      <h1>This is Fake API</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pho.map((anything) => {
          return (
            <div
              style={{
                width: "400px",
                backgroundColor: "silver",
                margin: "20px",
              }}
            >
              <h3>{anything.id}</h3>
              <h3>{anything.title}</h3>
              <h3>{anything.url}</h3>
              <h3>{anything.thumbnailUrl}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
