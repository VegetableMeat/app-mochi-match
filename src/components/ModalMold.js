import React from 'react';

export default function ModalMold({ state, actions }) {
	switch(state.category) {
		case 'TOP_ROOM_IN':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						{state.data.name}のルームに参加しますか？
					</div>
					<div className="footer-button-area">
						<button className="join-button">
							参加する
						</button>
						<button className="cancel-button" onClick={() => actions.showModalFalse()}>
							キャンセル
						</button>
					</div>
				</div>
			);
		default:
			return '何もありません';
	}
}