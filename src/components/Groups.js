import React, { useState } from "react";

function Groups({ group, setGroup, getGroup }) {
  const [test, setTest] = useState("");
  let resp = [
    { value: "b278f", id: "MA" },
    {
      value: "b2791",
      id: "Knoxville",
    },
  ];

  const set = (e) => {
    setGroup(e.target.value);
  };

  return (
    <>
      <select onChange={set}>
        <option value="1">Select Group From Below</option>
        {resp.map((resp, index) => (
          <option key={resp.value} value={resp.value}>
            {resp.id}
          </option>
        ))}
      </select>
      <button onClick={getGroup}>Group</button>
    </>
  );
}

export default Groups;
