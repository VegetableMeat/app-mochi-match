import React, { Component } from 'react';

export default class PopularGames extends Component {
  componentDidMount() {
    this.props.actions.getPopularGamesReq()
  }
  render() {
    const { state } = this.props
    return (
      <ol>
        {state.data.map((value, key) => (<li key={key}>{value.popular}</li>))}
      </ol>
    )
  }
}