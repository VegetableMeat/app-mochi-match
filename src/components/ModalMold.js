import React from 'react';
import { final } from '../store/common/Action';

export default function ModalMold({ state, actions }) {
	switch (state.category) {
		case 'TOP_ROOM_IN':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						{state.data.name}のルームに参加しますか？
					</div>
					<div className="footer-button-area">
						<button className="join-button color-blue">
							参加する
						</button>
						<button className="cancel-button color-red" onClick={() => actions.showModalFalse()}>
							キャンセル
						</button>
					</div>
					<button className="report-button color-yellow" onClick={() => actions.showModalReport('report')}>
						違反報告
					</button>
				</div>
			);
		case 'report':
			return (
				<form action="" method="post">
					<div className="modal-body">
						<div className="modal-text modal-header">
							どのような違反ですか？
					</div>
						<input type="checkbox" name="checkbox1" value="1" />性的な表現がされている<br />
						<input type="checkbox" name="checkbox2" value="2" />出会い,異性交際を希望している<br />
						<input type="checkbox" name="checkbox3" value="3" />各種法令違反している<br />
						<input type="checkbox" name="checkbox4" value="4" />差別、罵倒、誹謗中傷などしている<br />
						<input type="checkbox" name="checkbox5" value="5" />その他<br />
						<div className="footer-button-area"></div>
						<input type="submit" onClick={() => actions.final_confirmation('final_confirmation')} value="違反報告" ></input>
					</div>
				</form>
			);
		case 'final_confirmation':
			return (
				<form >
					<div className="modal-body">
						<div className="modal-text modal-header">
							本当に下記の内容で報告しますか？
						</div>
						
						<div className="footer-button-area">
							<input type="button" onClick={() => actions.end_modal('end_modal')} value="はい"></input>
							<button className="cancel-button color-bulue" onClick={() => actions.showModalFalse()}>
								キャンセル
						</button>
						</div>
					</div>
				</form>
			);
		case 'end_modal':
			return (
				<div className="modal-body">
					<div className="modal-text modal-header">
						ご協力ありがとうございました！
					</div>
					<div className="footer-button-area">
						<input type="button" onClick={() => actions.colse()}></input>
					</div>
				</div>

			)

		default:
			return '何もありません';
	}
}
