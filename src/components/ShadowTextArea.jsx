import React from 'react';
import { inputValidation } from '../store/validation/Validation';
import './css/ShadowTextArea.css';

/**
 * 影付きテキストエリアを表示するコンポーネント
 * auto_flgがtrueの場合、オートコンプリートをONにする
 *
 * @param {string}  	placeholder	- テキストエリアに表示するプレースホルダ
 * @param {boolean} 	auto_flg		- オートコンプリートを許可するか否かのフラグ
 * @param {string} 		value				- inputタグのnameに設定する値
 * @param {object} 		data_list		- オートコンプリートで表示するデータリスト
 * @param {function}	actions			- テキストエリアに入力されるたびに発火されるアクション
 */
export default function ShadowTextArea({
  placeholder,
  auto_flg = false,
  value,
  data_list,
  actions,
}) {
  if (auto_flg) {
    return (
      <div className="shadow-text-area">
        <input
          type="text"
          name={value}
          placeholder={placeholder}
          onChange={(e) => inputValidation({ value: e.target.value, name: e.target.name }, actions)}
          autoComplete="on"
          list="list"
        />
        <div className="shadow-underline"></div>
        <datalist id="list">
          {data_list.map((d, i) => (
            <option key={i}>{d[value]}</option>
          ))}
        </datalist>
      </div>
    );
  }
  return (
    <div className="shadow-text-area">
      <input type="text" placeholder={placeholder} onChange={(e) => actions(e.target.value)} />
      <div className="shadow-underline"></div>
    </div>
  );
}
