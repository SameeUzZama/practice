import axios from "axios";
import React, { useState, useEffect } from "react";

export const ApiPrac02 = () => {
  const [abc, setAbc] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setAbc(res.data);
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  });
  return (
    <div>
      <h1>This is Axios pactice 02</h1>
      <div>
        {abc.map((anything) => {
          return (
            <div>
              <h1>{anything.title}</h1>
              <h1>{anything.id}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
