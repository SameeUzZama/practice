import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiPrac03 = () => {
  const [xyz, setXyz] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setXyz(res.data);
      })
      .catch((error) => console.log("this is a Error", error));
  });
  return (
    <div>
      <h1>this is api pract 03</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {xyz.map((anything) => {
          return (
            <div
              style={{
                width: "300px",
                backgroundColor: "seagreen",
                margin: "20px",
              }}
            >
              <h1>{anything.title}</h1>
              <h1>{anything.id}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
