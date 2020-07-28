const gameHardValidation = (contents) => {
  const result = contents.list.filter((data) => {
    return data.id === contents.value;
  });
  contents.action(result[0].id);
};

const recTextValidation = (contents) => {
  let error = true;
  if (contents.value.length >= 1) {
    error = false;
  }
  contents.action({ text: contents.value, error: error });
};

const userNameValidation = (contents) => {
  let error = true;
  let msg = "ユーザ名が入力されていません";
  if (contents.value.length >= 1) {
    error = false;
  }
  contents.action({ text: contents.value, error: error, msg: msg });
};

const userIconValidation = (contents) => {
  const result = contents.list.filter((data) => {
    return data.value === contents.value;
  });
  contents.action(result[0].value);
};

export const inputValidation = (contents) => {
  switch (contents.name) {
    case "game_hard":
      return gameHardValidation(contents);
    case "rec_text":
      return recTextValidation(contents);
    case "user_name":
      return userNameValidation(contents);
    case "user_icon":
      return userIconValidation(contents);
    default:
      return;
  }
};
