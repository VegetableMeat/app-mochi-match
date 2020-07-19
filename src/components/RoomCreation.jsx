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
import CenterMainBody from "./CenterMainBody";
import BodyHeader from "./BodyHeader";
import Modal from "../containers/ModalContainer";
import Error from "./Error";

import { inputValidation } from "../store/validation/Validation";

import "./css/RoomCreation.css";
import selectStyles, { capacityOption } from "./custom/Select";
import TextAreaStyles from "./custom/TextArea";
import { roomCreationSaga } from "../store/room/Saga";
import { selectStartDate, postRoomCreationReq } from "../store/room/Action";

export default function RoomCreation({ state, actions, history }) {
  useEffect(() => {
    actions.getGameTitleReq();
    actions.getGameHardReq();
  }, [actions]);

  const { get_data, error, select } = state.roomCreationState.data;
  const { favorite_games } = state.userState.user;
  console.log(select);
  return (
    <div id="room-creation">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>ルーム作成</BodyHeader>
          <div
            className={[
              "section",
              error.input_title ? "error-background" : "",
            ].join(" ")}
          >
            <HeadLine1>ゲーム選択</HeadLine1>
            <div className="section-inner-wrapper">
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
              <Select
                placeholder="文字入力で検索できます"
                options={
                  get_data.title
                    ? get_data.title.map((data) => ({
                        value: data.game_title,
                        label: data.game_title,
                      }))
                    : {
                        value: "取得に失敗しました",
                        label: "取得に失敗しました",
                      }
                }
                styles={TextAreaStyles()}
                onChange={(e) =>
                  actions.inputSelectGameTitle({
                    text: e.label,
                    data: e.label,
                    error: false,
                  })
                }
              />
              {error.input_title ? <Error text={select.title} /> : null}
            </div>
          </div>
          <BreakUnderLine />

          <div
            className={[
              "section",
              error.input_hard ? "error-background" : "",
            ].join(" ")}
          >
            <HeadLine1>ハード選択</HeadLine1>
            <div className="section-inner-wrapper">
              <HardSelectArea>
                {get_data.hard &&
                  get_data.hard.map((d) =>
                    d.id === select.hard ? (
                      <HardIcon id={d.id} isSelect={true} />
                    ) : (
                      <HardIcon
                        name="game_hard"
                        id={d.id}
                        actions={actions.selectGameHard}
                        isValidate={true}
                        list={get_data.hard}
                      />
                    )
                  )}
              </HardSelectArea>
              {error.input_hard ? <Error text={select.hard} /> : null}
            </div>
          </div>
          <div className="section">
            <HeadLine1>定員選択</HeadLine1>
            <div className="section-inner-wrapper">
              <Select
                options={capacityOption()}
                defaultValue={{
                  value: select.capacity,
                  label: select.capacity,
                }}
                styles={selectStyles()}
                onChange={(e) => actions.selectCapacity(e.value)}
                isSearchable={false}
              />
            </div>
          </div>
          <BreakUnderLine />

          <div
            className={[
              "section",
              (select.start && error.input_date) ||
              (select.start && error.input_time)
                ? "error-background"
                : "",
            ].join(" ")}
          >
            <HeadLine1>開始時間選択</HeadLine1>
            <div className="section-inner-wrapper">
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

          <div
            className={[
              "section",
              error.input_text ? "error-background" : "",
            ].join(" ")}
          >
            <HeadLine1>募集テキスト</HeadLine1>
            <div className="section-inner-wrapper">
              <textarea
                className="textarea"
                value={select.text}
                onChange={(e) =>
                  inputValidation({
                    value: e.target.value,
                    name: "rec_text",
                    action: actions.inputText,
                    list: [],
                  })
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
