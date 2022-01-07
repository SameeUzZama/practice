import React, { useState } from "react";

export const ToggleClr = () => {
  const [clr, setClr] = useState("blue");
  return (
    <div style={{ background: clr }}>
      <button onClick={() => setClr(clr === "red" ? "blue" : "red")}>
        change color
      </button>
    </div>
  );
};
