import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
class ModalMold extends Component {
	constructor() {
		super();
		this.check = this.check.bind(this);
	}

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	check(e) {
		this.props.actions.modalCheck(e.target.value, e.target.checked);
	}

	callback = () => {
		this.props.history.push("/intheroom")
	}

	render() {
		const { state, actions } = this.props;
		switch (state.category) {
			case 'TOP_ROOM_IN':
				return (
					<div className="modal-body">
						<div className="modal-text modal-header">
							{state.data.room.name}のルームに参加しますか？
						</div>
						<div className="footer-button-area">
							<button className="join-button color-blue" onClick={() => actions.joinRoomRequest(state.data.room, this.callback)}>
								参加する
							</button>
							<button className="cancel-button color-red" onClick={() => actions.showModalFalse()}>
								キャンセル
							</button>
						</div>
						<button className="report-button color-yellow" onClick={() => actions.showModalFront("REPORT", "check", [])}>
							違反報告
						</button>
					</div>
				);
			case 'TOP_ROM_IN':
				return (
					<div className="modal-body">
						<div className="modal-text modal-header">
							{state.data.room.name}のルームに参加しますか？
							</div>
						<div className="footer-button-area">
							<button className="join-button color-blue" onClick={() => actions.joinRoomRequest(state.data.room, this.callback)}>
								参加する
								</button>
							<button className="cancel-button color-red" onClick={() => actions.showModalFalse()}>
								キャンセル
								</button>
						</div>
						<button className="report-button color-yellow" onClick={() => actions.showModalFront("REPORT", "check", [])}>
							違反報告
							</button>
					</div>
				);
			case 'REPORT':
				let check_box = [];
				state.report.forEach((text, key) => {
					check_box.push(<div key={key}><input type="checkbox" value={key} onChange={this.check} defaultChecked={state.data.check.includes(key.toString()) ? true : false} />{text}</div>);
				});

				return (
					<div className="modal-body">
						<div className="modal-text modal-header">
							どのような違反ですか？
						</div>
						{check_box}
						<div className="footer-button-area"></div>
						<input type="submit" onClick={() => actions.showModalFront("FINAL_CONFIRMATION")} value="違反報告" ></input>
					</div>
				);
			case 'FINAL_CONFIRMATION':
				return (
					<div className="modal-body">
						<div className="modal-text modal-header">
							本当に下記の内容で報告しますか？
						</div>

						<div className="footer-button-area">
							<input type="button" onClick={() => actions.showModalFront("end_modal")} value="はい"></input>
							<button className="cancel-button color-bulue" onClick={() => actions.showModalBack("REPORT")}>
								キャンセル
							</button>
						</div>
					</div>

				);
			case 'end_modal':
				return (
					<div className="modal-body">
						<div className="modal-text modal-header">
							ご協力ありがとうございました！
						</div>
						<div className="footer-button-area">
							<input type="button" onClick={() => window.location.reload()}></input>
						</div>
					</div>
				)
			default:
				return '何もありません';
		};
	};
};

export default withRouter(ModalMold);
