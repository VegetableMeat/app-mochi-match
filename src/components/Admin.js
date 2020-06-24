import React, { Component } from 'react';

export default class Admin extends React.Component {
    /**
     * 関数内でthisが使えないのでバインドしてthisを使えるようにする
     */
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this)
		this.domCreate = this.domCreate.bind(this)
	}

    /**
     * 画面ロード時にAPIを叩く
     */
	componentDidMount() {
		this.props.actions.adminGameTitleGetReq()
	}

    /**
     * クリックされたチェックボックスの値を格納する
     * @param {element} e 
     */
	handleChange(e) {
		if(e.target.name === "title") {
			this.props.actions.gameTitleCheck(e.target.value, e.target.checked)
		}
	}

    /**
     * APIから取得してきたデータを用いてチェックボックスを作成する、もし接続時にエラーが出ていたらエラー文を表示する
     * @param {obj} data 
     * @param {obj} err 
     */
	domCreate(data, err) {
		if(data && !err) {
			return data.map((data, index) => (
				<div key={index}>
					<input type="checkbox" onChange={this.handleChange} value={data.id} name="title"/>{data.game_title}
				</div>
			))
		}
		return (
			<div>
				<font color="red">
					<b>{err.toString()}</b>
				</font>
			</div>
		)
	}
	
	render() {
		const { data, error, result } = this.props.state
		const { actions } = this.props
		console.log(this.props.state)
		const title_list = this.domCreate(data.title, error.title)

		return (
			<div id="admin">
				<input type="text" />
				<input type="button" value="ゲームタイトルを追加" />
				<input type="button" value="削除" />
				<input type="button" value="取得" onClick={() => window.location.reload()} /><br />
				<input type="text" />
				<input type="button" value="ゲームハードを追加" />
				<input type="button" value="削除" />
				<input type="button" value="取得" /><br />
				<div className="wrapper">
					<div className="output-game-title">
						<h2>ゲームタイトル</h2>
						{title_list}
					</div>
					<div className="output-game-hard">
						<h2>ゲームハード</h2>
						<div>
							<b>何もないのって寂しいですよね</b>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
