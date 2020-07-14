import React from "react";

const FavoriteGames = ({ state }) => {
  const { favorite_games } = state.userState.user;

  let favoriteGames = [];
  for (let i in favorite_games) {
    favoriteGames.push(
      <li key={favorite_games[i].created_at}>{favorite_games[i].game_title}</li>
    );
  }

  return <ul>{favoriteGames}</ul>;
};

export default FavoriteGames;
