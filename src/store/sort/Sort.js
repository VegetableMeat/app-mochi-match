const dataSort = (a, b) => {
  let A = a.game_title.toUpperCase();
  let B = b.game_title.toUpperCase();
  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
};

export default dataSort;
