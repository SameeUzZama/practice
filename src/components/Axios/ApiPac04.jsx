import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiPrac04 = () => {
  const [asd, setAsd] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setAsd(res.data);
      })
      .catch((error) => console.log("This is a Error", error));
  });
  return (
    <div>
      <h1>this is axios practice 04</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {asd.map((anything) => {
          return (
            <div
              style={{
                width: "400px",
                backgroundColor: "slategrey",
                margin: "20px",
              }}
            >
              <h1>{anything.id}</h1>
              <h1>{anything.title}</h1>
              <h1>{anything.body}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
