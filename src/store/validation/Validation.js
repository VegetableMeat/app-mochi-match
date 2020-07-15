// TODO バリデーションを後で追加
const gameTitleValidation = (value, action, list) => {
  let data = "入力されたゲームタイトルは存在しません";
  let error = true;
  const result = list.filter((data) => {
    return data.game_title === value;
  });
  if (result.length > 0) {
    data = result[0].id;
    error = false;
  }
  action({ text: value, data: data, error: error });
};

const gameHardValidation = (value, action, list) => {
  const result = list.filter((data) => {
    return data.id === value;
  });
  action(result[0].id);
};

const recTextValidation = (value, action) => {
  let error = true;
  if (value.length >= 1) {
    error = false;
  }
  action({ text: value, error: error });
};

/**
 *
 * @param {object} 	 value 	- DOMのvalueとnameが入る
 * @param {function} action - バリデーションが上手く通った場合、実行するアクションが入る
 * @param {array} 	 list 	- 配列が入ってくる、主にオートコンプリート用のデータリスト
 */
export const inputValidation = (value = null, action = null, list = null) => {
  switch (value.name) {
    case "game_title":
      return gameTitleValidation(value.value, action, list);
    case "game_hard":
      return gameHardValidation(value.value, action, list);
    case "rec_text":
      return recTextValidation(value.value, action);
    default:
      return;
  }
};
