import React, { useEffect } from "react";

const PopularGames = ({ state, actions }) => {
  useEffect(() => {
    actions.getPopularGamesReq();
  }, []);

  console.log(state);
  return (
    <ol>
      {state.data.map((value, key) => (
        <li key={key}>{value.game_title}</li>
      ))}
    </ol>
  );
};

export default PopularGames;
