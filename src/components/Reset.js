import React from "react";

function Reset() {
  const wipe = (e) => {
    e.preventDefault();
    localStorage.removeItem("group");
    window.location.reload();
    console.log("reset");
  };
  return (
    <button className="buttonsmall" onClick={wipe}>
      Reset
    </button>
  );
}

export default Reset;
