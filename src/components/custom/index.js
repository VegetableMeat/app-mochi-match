const styles = (style) => {
  let result = {};
  style.map((key) => [(result = { ...result, [key.key]: key.func })]);
  return result;
};

export default styles;
