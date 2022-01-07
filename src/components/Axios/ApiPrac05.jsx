import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiPrac05 = () => {
  const [pqr, setPqr] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setPqr(res.data);
      })
      .catch((error) => console.log("this is error", error));
  }, []);

  return (
    <div>
      <h1>this is API practice 05</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pqr.map((anything) => {
          return (
            <div
              style={{
                width: "400px",
                backgroundColor: "turquoise",
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
