import React from 'react';
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

export default function RoomCreation() {
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
                <GameNamePlate title="タイトル" />
                <GameNamePlate title="タイトル" />
                <GameNamePlate title="タイトル" />
                <GameNamePlate title="タイトル" />
              </div>
              <HeadLine2>その他</HeadLine2>
              <ShadowTextArea placeholder="ゲームタイトル" />
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <HeadLine1>定員選択</HeadLine1>
            <div className="section-inner-wrapper">
              <div class="selectdiv">
                <label>
                  <select>
                    <option selected>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <HeadLine1>ハード選択</HeadLine1>
            <div className="section-inner-wrapper">
              <HardSelectArea>
                <HardIcon />
                <HardIcon selectFlg="true" />
                <HardIcon />
                <HardIcon />
              </HardSelectArea>
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
              </div>
              <div className="time-designation-area">
                <div class="select-start-time">
                  <input class="select-date" name="date" type="date" />
                  <input class="select-time" name="time" type="time" />
                </div>
              </div>
            </div>
          </div>
          <BreakUnderLine />

          <div className="section">
            <HeadLine1>募集テキスト</HeadLine1>
            <div className="section-inner-wrapper">
              <textarea className="textarea"></textarea>
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
