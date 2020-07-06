import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Sction from './Section';
import HeadLine1 from './HeadLine1';
import HeadLine2 from './HeadLine2';
import OneColumnBody from './OneColumnBody';
import InnerSection from './InnerSection';
import GameSelectArea from './GameSelectArea';
import GameNamePlate from './GameNamePlate';
import UnderLineInput from './UnderLineInput';
import BreakUnderLine from './BreakUnderLine';
import HardSelectArea from './HardSelectArea';
import HardIcon from './HardIcon';
import OtherButton from './OtherButton';
import InlineArea from './InlineArea';
import ShadowTextArea from './ShadowTextArea';
import CenterMainBody from './CenterMainBody';
import BodyHeader from './BodyHeader';

import './css/RoomCreation.css';

export default class RoomCreation extends Component {
  render() {
    const { actions } = this.props;
    const { data } = this.props.state;
    const hard = data.hard_list.map((d) => {
      if (d.hard_icon === data.select_hard) {
        return <HardIcon id={d.hard_icon} click={actions.selectGameHard} select_flg={true} />;
      }
      return <HardIcon id={d.hard_icon} click={actions.selectGameHard} />;
    });
    console.log(data.select_hard_flg);
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
                  <GameNamePlate title="タイトル" click={actions.selectGameTitle} />
                </div>
                <HeadLine2>その他</HeadLine2>
                <ShadowTextArea placeholder="ゲームタイトル" actions={actions.selectGameTitle} />
              </div>
            </div>
            <BreakUnderLine />

            <div className="section">
              <HeadLine1>ハード選択</HeadLine1>
              <div className="section-inner-wrapper">
                <HardSelectArea>{hard}</HardSelectArea>
              </div>
            </div>
            <BreakUnderLine />

            <div className="section">
              <HeadLine1>開始時間選択</HeadLine1>
              <div className="section-inner-wrapper">
                <div class="radio">
                  <div>
                    <input type="radio" name="time"></input>
                    <label>即時</label>
                  </div>
                  <div>
                    <input type="radio" name="time"></input>
                    <label>時間指定</label>
                  </div>
                  <div>
                    <input type="radio" name="time"></input>
                    <label>未定</label>
                  </div>
                </div>
                <div className="time-designation-area">
                  <ShadowTextArea placeholder="日付" />
                  <ShadowTextArea placeholder="時間" />
                </div>
              </div>
            </div>
            <BreakUnderLine />

            <div className="section">
              <HeadLine1>募集テキスト</HeadLine1>
              <div className="section-inner-wrapper">
                <textarea
                  className="textarea"
                  onChange={(e) => actions.inputText(e.target.value)}
                />
              </div>
            </div>

            <div className="footer-button-area">
              <button className="color-blue">ルーム作成</button>
              <button className="color-red">キャンセル</button>
            </div>
          </CenterMainBody>
        </Body>
        <Footer />
      </div>
    );
  }
}
