import React, { Component } from 'react';

export default class PopularGames extends Component {
  componentDidMount() {
    this.props.actions.getPopularGamesReq()
  }
  render() {
    const { data, loadingFlag } = this.props.data
    {console.log(data)}
    return (
      <ol>
         {/* {data.popular.map((data, key) => (<li key={key}>{data}</li>))}  */}
          
      </ol>
    )
  }
}