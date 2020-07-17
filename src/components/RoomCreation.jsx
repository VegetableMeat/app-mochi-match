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

import { inputValidation } from "../store/validation/Validation";

import "./css/RoomCreation.css";
import { roomCreationSaga } from "../store/room/Saga";
import { selectStartDate, postRoomCreationReq } from "../store/room/Action";

export default function RoomCreation({ state, actions }) {
  useEffect(() => {
    actions.getGameTitleReq();
    actions.getGameHardReq();
  }, [actions]);

  const { get_data, error, select } = state.roomCreationState.data;
  const { favorite_games } = state.userState.user;
  const options = [];

  for (let i = 2; i <= 200; i++) {
    options.push({ value: i, label: i });
  }
  // console.log(favorite_games);
  return (
    <div id="room-creation">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>ルーム作成</BodyHeader>
          <div className="section">
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
              <ShadowTextArea
                placeholder="ゲームタイトル"
                auto_flg={true}
                name="game_title"
                data_list={get_data.title}
                actions={actions.inputSelectGameTitle}
                value={select.input_title}
              />
            </div>
            <div className="error">
              {error.input_title ? select.title : null}
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <HeadLine1>ハード選択</HeadLine1>
            <div className="section-inner-wrapper">
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
            </div>
            <div className="error">{error.input_hard ? select.hard : null}</div>

            <HeadLine1>定員選択</HeadLine1>
            <div className="section-inner-wrapper">
              {/* TODO: 後で消す */}
              {/* <div class="selectdiv">
                <label>
                  <select>
                    <option selected>2</option>
                    {capacity}
                  </select>
                </label>
              </div> */}
              <Select
                options={options}
                defaultValue={{
                  value: select.capacity,
                  label: select.capacity,
                }}
                onChange={(e) => actions.selectCapacity(e.value)}
              />
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
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
                      // onChange={(e) => actions.selectStartDate(e.target.value)}
                      disabled={!select.start}
                    />
                    <input
                      className="select-time"
                      name="time"
                      type="time"
                      // onChange={(e) => actions.selectStartTime(e.target.value)}
                      disabled={!select.start}
                    />
                  </div>
                ) : (
                  <div className="select-start-time">
                    <input
                      className="select-date"
                      name="date"
                      type="date"
                      // value={select.date}
                      onChange={(e) => actions.selectStartDate(e.target.value)}
                    />
                    <input
                      className="select-time"
                      name="time"
                      type="time"
                      // value={select.time}
                      onChange={(e) => actions.selectStartTime(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="error">
              {select.start && error.input_date ? select.date : null}
            </div>
            <div className="error">
              {select.start && error.input_time ? select.time : null}
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <HeadLine1>募集テキスト</HeadLine1>
            <div className="section-inner-wrapper">
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
            </div>
            <div className="error">
              {error.input_text ? error.rec_text_msg : null}
            </div>
          </div>

          <div className="footer-button-area">
            <button
              className="color-blue"
              onClick={() =>
                actions.postRoomCreationReq({ select: select, error: error })
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
