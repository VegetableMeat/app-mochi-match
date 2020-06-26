import React, { Component } from 'react';

export default class FavoriteGames extends Component {
  componentDidMount() {
    this.props.actions.getFavoriteGamesReq();
  }
  render() {
    const { state } = this.props;
    return (
      <ul>
        {state.data.map((value, key) => (
          <li key={key}>{value.favorite}</li>
        ))}
      </ul>
    );
  }
}
