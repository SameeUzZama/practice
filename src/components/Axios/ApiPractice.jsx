import axios from "axios";
import React, { useState, useEffect } from "react";

export const ApiPractice = () => {
  const [pract, setPract] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((elem) => {
        setPract(elem.data);
      })
      .catch((error) => console.log("i think its error"));
  }, []);
  return (
    <div>
      <h1>This is Api Practice</h1>
      <h2>Welcome to My Document</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pract.map((mydata) => {
          return (
            <div
              style={{
                width: "400px",
                height: "300px",
                backgroundColor: "sandybrown",
                margin: "24px",
              }}
            >
              <h3>{mydata.id}</h3>
              <h3>{mydata.name}</h3>
              <h3>{mydata.email}</h3>
              <h3>{mydata.body}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
