import React from "react";
import GameNamePlate from "./GameNamePlate";
import dataSort from "../store/sort/Sort";

const FavoriteGames = ({ state, action }) => {
  const { favorite_games } = state.userState.user;

  let favoriteGames = [];
  for (let i in favorite_games) {
    let gameName = favorite_games[i].game_title;
    if (gameName.length > 25) {
      gameName = gameName.slice(0, 24) + "...";
    }

    favoriteGames.push(
      <GameNamePlate
        key={favorite_games[i].created_at}
        title={gameName}
        value={favorite_games[i].game_title}
        isAction={true}
        action={action}
      />
    );
  }
  return <div className="favorite-games-area">{favoriteGames}</div>;
};

export default FavoriteGames;
