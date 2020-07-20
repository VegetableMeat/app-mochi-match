import React from "react";
import { withRouter } from "react-router";
import GameNamePlate from "./GameNamePlate";
import UserIcon from "./UserIcon";
import UserName from "./UserName";

const ModalMold = ({ state, actions, history }) => {
  const { modalState } = state;
  const { room } = modalState.data;

  const handleCheck = (e) => {
    actions.modalCheck(e.target.value, e.target.checked);
  };

  const callback = () => history.push("/intheroom");

  switch (modalState.category) {
    case "TOP_ROOM_IN":
      return (
        <div className="modal-body">
          <div className="modal-text modal-header">
            {room.name}のルームに参加しますか？
          </div>
          <div className="footer-button-area">
            <button
              className="join-button color-blue"
              onClick={() => actions.joinRoomRequest(room, callback)}
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
              onClick={() => actions.deleteRoomRequest(room, history)}
            >
              解散して参加する
            </button>
            <button
              className="join-button color-blue"
              onClick={() => actions.deleteRoomRequest(room, history)}
            >
              以前のルームに戻る
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
              onClick={() => actions.deleteRoomRequest(room, history)}
            >
              退室して参加する
            </button>
            <button
              className="join-button color-blue"
              onClick={() => actions.deleteRoomRequest(room, history)}
            >
              以前のルームに戻る
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
    case "USER_DETAILS":
      console.log(state.modalState.data.data);
      const user = state.modalState.data.data;
      let favorite_games_print = "";
      if (user.favorite_games) {
        favorite_games_print = user.favorite_games.map((data) => (
          <GameNamePlate title={data.game_title} />
        ));
      } else {
        favorite_games_print = <p>なし</p>;
      }
      return (
        <div className="modal-body">
          <div className="user-head">
            <UserIcon icon={user.icon} />
            <UserName name={user.user_name} />
          </div>
          <div className="modal-text .modal-header-s">お気に入りゲーム</div>
          {favorite_games_print}
          <div className="favorite-games-area"></div>
          <div className="footer-button-area">
            <button
              className="report-button color-yellow"
              onClick={() => actions.showModalFront("REPORT", "check", [])}
            >
              違反報告
            </button>
          </div>
        </div>
      );
    default:
      return "何もありません";
  }
};

export default withRouter(ModalMold);
