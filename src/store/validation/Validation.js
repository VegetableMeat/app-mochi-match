// TODO バリデーションを後で追加
function gameTitleValidation(value) {
  let data = '入力されたゲームタイトルは存在しません';
  let error = true;
  const result = state.filter((data) => {
    return data.game_title === pay;
  });

  if (result.length > 0) {
    data = result[0].id;
    error = false;
    return { data, error };
  }
  return { data, error };
}

function gameHardValidation(value) {
  return '';
}

export const inputValidation = (key, value) => {
  switch (key) {
    case 'title':
      return gameTitleValidation(value);
    case 'hard':
      return gameHardValidation(value);
  }
};
