import React from "react";
import { withRouter } from "react-router";
import Loading from "./Loading";

const ModalMold = ({ state, actions, history }) => {
  const { modalState } = state;
  const { room } = modalState.data;

  const handleCheck = (e) => {
    actions.modalCheck(e.target.value, e.target.checked);
  };

  const handleRoomLeave = () => {
    actions.leaveRoomRequest(room, history);
    actions.showModalFalse();
  };

  const handleRoomBack = () => {
    history.push("/intheroom");
    actions.showModalFalse();
  };

  switch (modalState.category) {
    case "LOADING":
      return <Loading />;
    case "TOP_ROOM_IN":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            {room.name}のルームに参加しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.joinRoomRequest(room, history)}
            >
              参加する
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              キャンセル
            </button>
          </div>
          <button
            className="report-button color-yellow"
            onClick={() => actions.showModalFront("REPORT", "check", [])}
          >
            違反報告
          </button>
        </div>
      );
    case "ROOM_LEAVE":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            このルームから退室しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => handleRoomLeave()}
            >
              退室する
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              キャンセル
            </button>
          </div>
        </div>
      );
    case "ROOM_DELETION":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            このルームを解散しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.deleteRoomRequest(room, history)}
            >
              解散する
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              キャンセル
            </button>
          </div>
        </div>
      );
    case "ROOM_DELETION_AND_JOIN":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            既にルームが立てられています。
            <br />
            ルーム解散して参加しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.deleteRoomAndJoinRequest(room, history)}
            >
              参加する
            </button>
            <button
              className="join-button color-blue"
              onClick={() => handleRoomBack()}
            >
              ルームに戻る
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              キャンセル
            </button>
          </div>
        </div>
      );
    case "ROOM_DELETION_AND_CREATE":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            既にルームが立てられています。
            <br />
            以前のルームを解散してルーム作成しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.deleteRoomAndJoinRequest(room, history)}
            >
              作成する
            </button>
            <button
              className="join-button color-blue"
              onClick={() => handleRoomBack()}
            >
              ルームに戻る
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              キャンセル
            </button>
          </div>
        </div>
      );
    case "ROOM_LEAVE_AND_JOIN":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            既に入室しているルームがあります
            <br />
            ルーム退室をしてこちらに参加しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.leaveRoomAndJoinRequest(room, history)}
            >
              参加する
            </button>
            <button
              className="join-button color-blue"
              onClick={() => handleRoomBack()}
            >
              ルームに戻る
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              キャンセル
            </button>
          </div>
        </div>
      );
    case "REPORT":
      let check_box = [];
      modalState.report.forEach((text, key) => {
        check_box.push(
          <div key={key}>
            <input
              type="checkbox"
              value={key}
              onChange={handleCheck}
              defaultChecked={
                modalState.data.check.includes(key.toString()) ? true : false
              }
            />
            {text}
          </div>
        );
      });
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">どのような違反ですか？</div>
          {check_box}
          <div className="footer-button-area"></div>
          <input
            type="submit"
            onClick={() => actions.showModalFront("FINAL_CONFIRMATION")}
            value="違反報告"
          ></input>
        </div>
      );
    case "FINAL_CONFIRMATION":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            本当に下記の内容で報告しますか？
          </div>
          <div className="footer-button-area">
            <input
              type="button"
              onClick={() => actions.showModalFront("end_modal")}
              value="はい"
            ></input>
            <button
              className="cancel-button color-bulue"
              onClick={() => actions.showModalBack("REPORT")}
            >
              キャンセル
            </button>
          </div>
        </div>
      );
    case "end_modal":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            ご協力ありがとうございました！
          </div>
          <div className="footer-button-area">
            <input
              ype="button"
              onClick={() => window.location.reload()}
            ></input>
          </div>
        </div>
      );
    case "ROOM_CAPACITY_OVER":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            ルームの定員上限に達しています
            <br />
            しばらくして、もう一度お試し下さい
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.showModalFalse()}
            >
              OK
            </button>
          </div>
        </div>
      );
    case "SERVER_ERROR":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            サーバーでエラーが発生しています
            <br />
            もう一度お試し下さい
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.showModalFalse()}
            >
              OK
            </button>
          </div>
        </div>
      );
    case "POST_ROOM_ERROR":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            {modalState.data.room_creation_error.title}
          </div>
          {modalState.data.room_creation_error.msg.map((error, key) => (
            <div key={key}>{error}</div>
          ))}
          <div className="footer-button-area">
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              閉じる
            </button>
          </div>
        </div>
      );
    case "CANCEL":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">キャンセルしますか？</div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => document.location.reload()}
            >
              はい
            </button>
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              いいえ
            </button>
          </div>
        </div>
      );
    case "UPDATE_USER_PROFILE_ERROR":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            {modalState.data.user_profile_error.title}
          </div>
          {modalState.data.user_profile_error.msg.map((error, key) => (
            <div key={key}>{error}</div>
          ))}
          <div className="footer-button-area">
            <button
              className="cancel-button color-red"
              onClick={() => actions.showModalFalse()}
            >
              閉じる
            </button>
          </div>
        </div>
      );
    default:
      return "何もありません";
  }
};

export default withRouter(ModalMold);
