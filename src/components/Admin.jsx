import React, { useEffect } from "react";

const Admin = ({ state, actions }) => {
  /**
   * 画面ロード時にAPIを叩く
   */
  useEffect(() => {
    actions.adminGameTitleGetReq();
    actions.adminGameHardGetReq();
  }, []);

  /**
   * クリックされたチェックボックスの値を格納する
   * @param {element} e - クリックされたDOM要素
   */
  const handleChange = (e) => {
    if (e.target.name === "title") {
      actions.gameTitleCheck(e.target.value, e.target.checked);
    } else if (e.target.name === "hard") {
      actions.gameHardCheck(e.target.value, e.target.checked);
    }
  };

  /**
   * APIから取得してきたデータを用いてチェックボックスを作成する、もし接続時にエラーが出ていたらエラー文を表示する
   * @param {obj} data - IDとゲームタイトルが入ってる
   * @param {string} error - エラーコード
   */
  const domCreate = (data, error) => {
    if (data && !error) {
      return data.map((data, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={handleChange}
            value={data.id}
            name="title"
          />
          {data.game_title}
        </div>
      ));
    }
    return (
      <div>
        <font color="red">
          <b>{error}</b>
        </font>
      </div>
    );
  };

  const domCreate_Hard = (data, error) => {
    if (data && !error) {
      return data.map((data, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={handleChange}
            value={data.id}
            name="hard"
          />
          {data.hard_name}
        </div>
      ));
    }
    return (
      <div>
        <font color="red">
          <b>{error}</b>
        </font>
      </div>
    );
  };

  /**
   * テキストボックスの値を格納する（更新されるたびに実行される）
   * @param {element} e - クリックされたDOM要素
   */
  const insertText = (e) => {
    if (e.target.name === "title") {
      actions.gameTitleText(e.target.value);
    } else if (e.target.name === "hard") {
      console.log(e.target.value);
      actions.gameHardText(e.target.value);
    }
  };

  const resultFunc = (result, error) => {
    if (result && !error) {
      return (
        <div>
          <font color="green">
            <b>{result}</b>
          </font>
        </div>
      );
    }

    return (
      <div>
        <font color="red">
          <b>{error}</b>
        </font>
      </div>
    );
  };

  const { adminState } = state;
  const { data, error, result, text, checked } = adminState;

  const title_list = domCreate(data.title, error.get.title);
  const add_result = resultFunc(result.add.title, error.add.title);
  const delete_result = resultFunc(result.delete.title, error.delete.title);
  const update_result = resultFunc(result.update.title, error.update.title);
  const hard_list = domCreate_Hard(data.hard, error.get.hard);
  const add_hard_result = resultFunc(result.add.hard, error.add.hard);
  const delete_hard_result = resultFunc(result.delete.hard, error.delete.hard);
  const update_hard_result = resultFunc(result.update.hard, error.update.hard);

  return (
    <div id="admin">
      <input
        type="button"
        value="取得と言う名のReload"
        onClick={() => window.location.reload()}
      />
      <br />
      <input type="text" onChange={insertText} name="title" />
      <input
        type="button"
        value="ゲームタイトルを追加"
        onClick={() => actions.adminGameTitleAddReq(text.title)}
      />
      <input
        type="button"
        value="削除"
        onClick={() => actions.adminGameTitleDeleteReq(checked.title)}
      />
      <input
        type="button"
        value="変更"
        onClick={() =>
          actions.adminGameTitleUpdateReq(text.title, checked.title)
        }
      />
      <br />

      <input type="text" onChange={insertText} name="hard" />
      <input
        type="button"
        value="ゲームハードを追加"
        onClick={() => actions.adminGameHardAddReq(text.hard)}
      />

      <input
        type="button"
        value="削除"
        onClick={() => actions.adminGameHardDeleteReq(checked.hard)}
      />
      <input
        type="button"
        value="変更"
        onClick={() => actions.adminGameHardUpdateReq(text.hard, checked.hard)}
      />
      <br />
      <div className="wrapper">
        <div className="output-game-title">
          <h2>ゲームタイトル</h2>
          {add_result}
          {delete_result}
          {update_result}
          {title_list}
        </div>
        <div className="output-game-hard">
          <h2>ゲームハード</h2>
          {hard_list}
          {add_hard_result}
          {delete_hard_result}
          {update_hard_result}
        </div>
      </div>
    </div>
  );
};

export default Admin;
