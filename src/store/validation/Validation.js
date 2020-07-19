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

export const inputValidation = (contents) => {
  switch (contents.name) {
    case "game_hard":
      return gameHardValidation(contents);
    case "rec_text":
      return recTextValidation(contents);
    default:
      return;
  }
};
