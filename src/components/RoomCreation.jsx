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
  componentDidMount() {
    this.props.actions.getGameTitleReq();
  }

  gameNamePlateCreate(title, action) {
    return title.map((d) => <GameNamePlate title={d.game_title} click={action} />);
  }

  gameHardIconCreate(hard, action, select) {
    return hard.map((d) => {
      if (d.hard_icon === select) {
        return <HardIcon id={d.hard_icon} select_flg={true} />;
      }
      return <HardIcon id={d.hard_icon} click={action} />;
    });
  }

  render() {
    const { actions } = this.props;
    const { get_data, error, select } = this.props.state.data;
    console.log(this.props.state.data);
    const title = this.gameNamePlateCreate(get_data.title, actions.selectGameTitle);
    const hard = this.gameHardIconCreate(get_data.hard, actions.selectGameHard, select.hard);
    const title_error = error.in_title ? select.title : null;
    const hard_error = error.in_hard ? select.hard : null;
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
                <div className="favorite-games-area">{title}</div>
                <HeadLine2>その他</HeadLine2>
                <ShadowTextArea
                  placeholder="ゲームタイトル"
                  auto_flg={true}
                  value="game_title"
                  data_list={get_data.title}
                  actions={actions.selectGameTitle}
                />
              </div>
              <div className="title-error">{title_error}</div>
            </div>
            <BreakUnderLine />

            <div className="section">
              <HeadLine1>ハード選択</HeadLine1>
              <div className="section-inner-wrapper">
                <HardSelectArea>{hard}</HardSelectArea>
              </div>
              <div className="hard-error">{hard_error}</div>
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
