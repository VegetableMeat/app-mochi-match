import styles from "./index";
/**
 * オプションの作成
 */
export const option = () => {
  const options = [];
  for (let i = 2; i <= 20; i++) {
    options.push({ value: i, label: i });
  }
  return options;
};
/**
 * スタイルを設定する
 */
const selectStyles = () => {
  const style = [
    {
      key: "control",
      func: (base) => ({
        ...base,
        "&:hover": { borderColor: "#b6b6b6" },
        border: "1px solid #b6b6b6",
        boxShadow: "none",
      }),
    },
    {
      key: "singleValue",
      func: (base) => ({
        ...base,
        color: "#7d7d7d",
      }),
    },
    {
      key: "menu",
      func: (base) => ({
        ...base,
        margin: "4px 0px",
        color: "#7d7d7d",
      }),
    },
    {
      key: "option",
      func: (base, { isFocused, isSelected }) => ({
        ...base,
        color: isSelected || isFocused ? "#fff" : "#7d7d7d",
        backgroundColor: isSelected
          ? "darkgray"
          : isFocused
          ? "lightgray"
          : "#fff",
        "&:active": { color: "#fff", backgroundColor: "silver" },
      }),
    },
  ];

  return styles(style);
};

export default selectStyles;
