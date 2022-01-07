import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiPrac01 = () => {
  const [horse, setHorse] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setHorse(res.data);
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  });
  return (
    <div>
      <h1>this is API Prac 01</h1>
      <div>
        {horse.map((anything) => {
          return (
            <div>
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
