import React, { Component } from 'react';

export default class FavoriteGames extends Component {
  render() {
    const { state } = this.props;
    return (
      <ul>
        {state.user.favorite_games.map((data) => (
          <li key={data.created_at}>{data.game_title}</li>
        ))}
      </ul>
    );
  }
}
