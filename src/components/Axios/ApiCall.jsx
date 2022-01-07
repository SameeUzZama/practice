import React, { useState, useEffect } from "react"; //(1)
import axios from "axios"; //(4)

//(2)
export const ApiCall = () => {
  //(4)
  const [album, setAlbum] = useState([]);
  //(5)z
  useEffect(() => {
    //(6)
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      //(7)(9)
      .then((res) => {
        console.log(res.data);
        setAlbum(res.data);
        //(8) catch is use for when we dont want to breake app like password
      })
      .catch((error) => console.log("are you understand", error));
  }, []);
  //(3)
  return (
    <div>
      <h2>Fatching Data From API</h2>
      <h2>Welcome Data!</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* /(10) */}
        {album.map((anything) => {
          return (
            //(11)
            <div
              style={{
                width: "200px",
                backgroundColor: "salmon",
                margin: "10px",
              }}
            >
              <h4>{anything.title}</h4>
              <p>{anything.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
