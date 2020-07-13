import React from "react";

const FavoriteGames = ({ state }) => {
  const { favorite_games } = state.userState.user;

  return (
    <ul>
      {favorite_games.map((data) => (
        <li key={data.created_at}>{data.game_title}</li>
      ))}
    </ul>
  );
};

export default FavoriteGames;
