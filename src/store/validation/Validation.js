// TODO バリデーションを後で追加
function gameTitleValidation(value, action) {
  // let data = '入力されたゲームタイトルは存在しません';
  // let error = true;
  // const result = state.filter((data) => {
  //   return data.game_title === pay;
  // });
  // if (result.length > 0) {
  //   data = result[0].id;
  //   error = false;
  //   return { data, error };
  // }
  // return { data, error };
}

function gameHardValidation(value) {
  return '';
}

export const inputValidation = (name = null, value = null, action = null) => {
  switch (name) {
    case 'game_title':
      return gameTitleValidation(value, action);
    case 'hard':
      return gameHardValidation(value, action);
    default:
      return;
  }
};
