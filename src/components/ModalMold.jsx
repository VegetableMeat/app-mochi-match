import React from 'react';
import { withRouter } from 'react-router'

const ModalMold = ({ state, actions, history }) => {

	const { modalState } = state;

	const handleCheck = (e) => {
		actions.modalCheck(e.target.value, e.target.checked);
	};

	const callback = () => {
		history.push("/intheroom")
	};

	switch (modalState.category) {
		case 'TOP_ROOM_IN':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						{modalState.data.room.name}のルームに参加しますか？
					</div>
					<div className="footer-button-area">
						<button
							className="join-button color-blue"
							onClick={() => actions.joinRoomRequest(modalState.data.room, callback)}>
							参加する
						</button>
						<button
							className="cancel-button color-red"
							onClick={() => actions.showModalFalse()}>
							キャンセル
						</button>
					</div>
					<button
						className="report-button color-yellow"
						onClick={() => actions.showModalFront("REPORT", "check", [])}>
						違反報告
					</button>
				</div>
			);
		case 'ROOM_DELETION':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						このルームを解散しますか？
					</div>
					<div className="footer-button-area">
						<button
							className="join-button color-blue"
							onClick={() => actions.deleteRoomRequest(modalState.data.room, history)}>
							解散する
						</button>
						<button
							className="cancel-button color-red"
							onClick={() => actions.showModalFalse()}>
							キャンセル
						</button>
					</div>
				</div>
			);
		case 'ROOM_DELETION_AND_JOIN':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						既にルームが立てられています。<br />
						ルーム解散して参加しますか？
					</div>
					<div className="footer-button-area">
						<button
							className="join-button color-blue"
							onClick={() => actions.deleteRoomRequest(modalState.data.room, history)}>
							解散して参加する
						</button>
						<button
							className="join-button color-blue"
							onClick={() => actions.deleteRoomRequest(modalState.data.room, history)}>
							以前のルームに戻る
						</button>
						<button
							className="cancel-button color-red"
							onClick={() => actions.showModalFalse()}>
							キャンセル
						</button>
					</div>
				</div>
			);
		case 'test2':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						既に入室しているルームがあります。<br />
						ルーム退室をしてこちらに参加しますか？
					</div>
					<div className="footer-button-area">
						<button
							className="join-button color-blue"
							onClick={() => actions.deleteRoomRequest(modalState.data.room, history)}>
							退室して参加する
						</button>
						<button
							className="join-button color-blue"
							onClick={() => actions.deleteRoomRequest(modalState.data.room, history)}>
							以前のルームに戻る
						</button>
						<button
							className="cancel-button color-red"
							onClick={() => actions.showModalFalse()}>
							キャンセル
						</button>
					</div>
				</div>
			);
		case 'REPORT':
			let check_box = [];
			modalState.report.forEach((text, key) => {
				check_box.push(
					<div key={key}>
						<input
							type="checkbox"
							value={key}
							onChange={handleCheck}
							defaultChecked={modalState.data.check.includes(key.toString()) ? true : false}
						/>{text}
					</div>);
			});
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						どのような違反ですか？
						</div>
					{check_box}
					<div className="footer-button-area"></div>
					<input
						type="submit"
						onClick={() => actions.showModalFront("FINAL_CONFIRMATION")}
						value="違反報告" >
					</input>
				</div>
			);
		case 'FINAL_CONFIRMATION':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						本当に下記の内容で報告しますか？
					</div>
					<div className="footer-button-area">
						<input
							type="button"
							onClick={() => actions.showModalFront("end_modal")}
							value="はい"></input>
						<button
							className="cancel-button color-bulue"
							onClick={() => actions.showModalBack("REPORT")}>
							キャンセル
						</button>
					</div>
				</div >
			);
		case 'end_modal':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						ご協力ありがとうございました！
					</div>
					<div className="footer-button-area">
						<input
							ype="button"
							onClick={() => window.location.reload()}>
						</input>
					</div>
				</div>
			);
		default:
			return '何もありません';
	};

};

export default withRouter(ModalMold);
