import React from 'react';

export default function ModalMold({ state, actions }) {
	switch(state.category) {
		case 'TOP_ROOM_IN':
			return (
				<div className="modal-body">
					{state.data.name}のルームに参加しますか？
					<button>
						参加する
					</button>
					<button onClick={() => actions.showModalFalse()}>
						キャンセル
					</button>
				</div>
			);
		default:
			return '何もありません';
	}
}