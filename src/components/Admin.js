import React, { Component } from 'react';

export default class Admin extends Component {
    /**
     * 関数内（handleChangeとか）でthisが使えないのでバインドしてthisを使えるようにする
     */
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this)
		this.domCreate = this.domCreate.bind(this)
		this.insertText = this.insertText.bind(this)
	}

    /**
     * 画面ロード時にAPIを叩く
     */
	componentDidMount() {
		this.props.actions.adminGameTitleGetReq()
	}

    /**
     * クリックされたチェックボックスの値を格納する
     * @param {element} e - クリックされたDOM要素
     */
	handleChange(e) {
		if(e.target.name === "title") {
			this.props.actions.gameTitleCheck(e.target.value, e.target.checked)
		}
	}

    /**
     * APIから取得してきたデータを用いてチェックボックスを作成する、もし接続時にエラーが出ていたらエラー文を表示する
     * @param {obj} data - IDとゲームタイトルが入ってる
     * @param {string} error - エラーコード
     */
	domCreate(data, error) {
		if(data && !error) {
			return data.map((data, index) => (
				<div key={index}>
					<input type="checkbox" onChange={this.handleChange} value={data.id} name="title"/>{data.game_title}
				</div>
			))
		}
		return (
			<div>
				<font color="red">
					<b>{error}</b>
				</font>
			</div>
		)
	}

	/**
	 * テキストボックスの値を格納する（更新されるたびに実行される）
	 * @param {element} e - クリックされたDOM要素
	 */
	insertText(e) {
		if(e.target.name === "title") {
			this.props.actions.gameTitleText(e.target.value)
		}
	}

	result(result, error) {
		if(result && !error) {
			return (
				<div>
					<font color="green">
						<b>{result}</b>
					</font>
				</div>
			)
		}

		return (
			<div>
				<font color="red">
					<b>{error}</b>
				</font>
			</div>
		)
	}
	
	render() {
		const { data, error, result, text, checked } = this.props.state
		const { actions } = this.props
		console.log(this.props.state)
		const title_list = this.domCreate(data.title, error.get.title)
		const add_result = this.result(result.add.title, error.add.title)
		const delete_result = this.result(result.delete.title, error.delete.title)
		const update_result = this.result(result.update.title, error.update.title)

		return (
			<div id="admin">
				<input type="button" value="取得と言う名のReload" onClick={() => window.location.reload()} /><br />
				<input type="text" onChange={this.insertText} name="title"/>
				<input type="button" value="ゲームタイトルを追加" onClick={() => actions.adminGameTitleAddReq(text.title)} />
				<input type="button" value="削除" onClick={() => actions.adminGameTitleDeleteReq(checked.title)} />
				<input type="button" value="変更" onClick={() => actions.adminGameTitleUpdateReq(text.title, checked.title)} /><br />
				<input type="text" />
				<input type="button" value="ゲームハードを追加" />
				<input type="button" value="削除" />
				<input type="button" value="変更" /><br />
				<div className="wrapper">
					<div className="output-game-title">
						<h2>ゲームタイトル</h2>
						{add_result}
						{delete_result}
						{update_result}
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
