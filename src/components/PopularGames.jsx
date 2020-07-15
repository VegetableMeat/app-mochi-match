import React from "react";

const PopularGames = ({ state }) => {
  return (
    <ol>
      {state.data.map((value, key) => (
        <li key={key}>{value.popular}</li>
      ))}
    </ol>
  );
};

export default PopularGames;
