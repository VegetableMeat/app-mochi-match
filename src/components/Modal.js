import React from 'react';
import './css/Modal.css';
import ModalMold from './ModalMold';

export default function Modal({ state, actions }) {
	if(!state.showFlag) {
		return null;
	}
	
	return (
		<div className="backdrop">
			<div className="modal">
				<ModalMold state={state} actions={actions}/>
				<div className="modal-footer">
					<button onClick={() => actions.showModalFalse()}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
