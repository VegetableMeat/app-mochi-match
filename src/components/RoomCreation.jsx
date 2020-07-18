import React, { useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Sction from "./Section";
import HeadLine1 from "./HeadLine1";
import HeadLine2 from "./HeadLine2";
import OneColumnBody from "./OneColumnBody";
import InnerSection from "./InnerSection";
import GameSelectArea from "./GameSelectArea";
import GameNamePlate from "./GameNamePlate";
import UnderLineInput from "./UnderLineInput";
import BreakUnderLine from "./BreakUnderLine";
import HardSelectArea from "./HardSelectArea";
import HardIcon from "./HardIcon";
import OtherButton from "./OtherButton";
import InlineArea from "./InlineArea";
import ShadowTextArea from "./ShadowTextArea";
import CenterMainBody from "./CenterMainBody";
import BodyHeader from "./BodyHeader";
import Modal from "../containers/ModalContainer";
import Error from "./Error";

import { inputValidation } from "../store/validation/Validation";

import "./css/RoomCreation.css";
import selectStyles, { option } from "./custom/Select";
import { roomCreationSaga } from "../store/room/Saga";
import { selectStartDate, postRoomCreationReq } from "../store/room/Action";

export default function RoomCreation({ state, actions, history }) {
  useEffect(() => {
    actions.getGameTitleReq();
    actions.getGameHardReq();
  }, [actions]);

  const { get_data, error, select } = state.roomCreationState.data;
  const { favorite_games } = state.userState.user;

  return (
    <div id="room-creation">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>ルーム作成</BodyHeader>
          <div className="section">
            <div
              className={[
                "section-inner-wrapper",
                error.input_title ? "error-background" : "",
              ].join(" ")}
            >
              <HeadLine1>ゲーム選択</HeadLine1>
              <HeadLine2>お気に入りゲーム</HeadLine2>
              <div className="favorite-games-area">
                {favorite_games &&
                  favorite_games.map((d) => (
                    <GameNamePlate
                      title={d.game_title}
                      value={d.game_id}
                      click={actions.clickSelectGameTitle}
                    />
                  ))}
              </div>
              <HeadLine2>その他</HeadLine2>
              <ShadowTextArea
                placeholder="ゲームタイトル"
                auto_flg={true}
                name="game_title"
                data_list={get_data.title}
                actions={actions.inputSelectGameTitle}
                value={select.input_title}
              />
              {error.input_title ? <Error text={select.title} /> : null}
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <div
              className={[
                "section-inner-wrapper",
                error.input_hard ? "error-background" : "",
              ].join(" ")}
            >
              <HeadLine1>ハード選択</HeadLine1>
              <HardSelectArea>
                {get_data.hard &&
                  get_data.hard.map((d) =>
                    d.id === select.hard ? (
                      <HardIcon id={d.id} select_flg={true} />
                    ) : (
                      <HardIcon
                        id={d.id}
                        actions={actions.selectGameHard}
                        data={get_data.hard}
                        name="game_hard"
                      />
                    )
                  )}
              </HardSelectArea>
              {error.input_hard ? <Error text={select.hard} /> : null}
            </div>

            <div className="section-inner-wrapper">
              <HeadLine1>定員選択</HeadLine1>
              <Select
                options={option()}
                defaultValue={{
                  value: select.capacity,
                  label: select.capacity,
                }}
                styles={selectStyles()}
                onChange={(e) => actions.selectCapacity(e.value)}
              />
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <div
              className={[
                "section-inner-wrapper",
                (select.start && error.input_date) ||
                (select.start && error.input_time)
                  ? "error-background"
                  : "",
              ].join(" ")}
            >
              <HeadLine1>開始時間選択</HeadLine1>
              <div className="radio">
                <div>
                  <input
                    type="radio"
                    name="time"
                    defaultChecked={!select.start}
                    onClick={() => actions.selectStart(false)}
                  ></input>
                  <label>即時</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="time"
                    defaultChecked={select.start}
                    onClick={() => actions.selectStart(true)}
                  ></input>
                  <label>時間指定</label>
                </div>
              </div>
              <div className="time-designation-area">
                {!select.start ? (
                  <div className="select-start-time">
                    <input
                      className="select-date"
                      name="date"
                      type="date"
                      disabled={!select.start}
                    />
                    <input
                      className="select-time"
                      name="time"
                      type="time"
                      disabled={!select.start}
                    />
                  </div>
                ) : (
                  <div className="select-start-time">
                    <input
                      className="select-date"
                      name="date"
                      type="date"
                      onChange={(e) => actions.selectStartDate(e.target.value)}
                    />
                    <input
                      className="select-time"
                      name="time"
                      type="time"
                      onChange={(e) => actions.selectStartTime(e.target.value)}
                    />
                  </div>
                )}
              </div>
              {select.start && error.input_date ? (
                <Error text={select.date} />
              ) : null}
              {select.start && error.input_time ? (
                <Error text={select.time} />
              ) : null}
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <div
              className={[
                "section-inner-wrapper",
                error.input_text ? "error-background" : "",
              ].join(" ")}
            >
              <HeadLine1>募集テキスト</HeadLine1>
              <textarea
                className="textarea"
                value={select.text}
                onChange={(e) =>
                  inputValidation(
                    { value: e.target.value, name: "rec_text" },
                    actions.inputText
                  )
                }
              />
              {error.input_text ? <Error text={error.text_msg} /> : null}
            </div>
          </div>

          <div className="footer-button-area">
            <button
              className="color-blue"
              onClick={() =>
                actions.postRoomCreationReq({
                  select: select,
                  error: error,
                  push: history.push,
                })
              }
            >
              ルーム作成
            </button>
            <button className="color-red">キャンセル</button>
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
}
