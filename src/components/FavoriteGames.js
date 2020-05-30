import React, { Component } from 'react';

export default class FavoriteGames extends Component {
  componentDidMount() {
    this.props.actions.getFavoriteGamesReq()
  }
  render() {
    const { data, loadingFlag } = this.props
    console.log(data)
    return (
      <ul>
        {data.map((value, key) => (<li key={key}>{value.favorite}</li>))}
      </ul>
    )
  }
}