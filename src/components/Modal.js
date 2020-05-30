import React from 'react';
import './css/Modal.css';

export default function Modal({ showFlag, category, data, actions }) {
	if(!showFlag) {
		return null;
	}

	const showModalMolding = (category, data) => {
		switch(category) {
			case 'TOP_ROOM_IN':
				return (
					<div className="modal-body">
						{data.name}のルームに参加しますか？
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
	
	return (
		<div className="backdrop">
			<div className="modal">
				{showModalMolding(category, data)}
				<div className="modal-footer">
					<button onClick={() => actions.showModalFalse()}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
