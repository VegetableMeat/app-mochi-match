import styles from "./index";
/**
 * オプションの作成
 */
export const capacityOption = () => {
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
        "&:hover": { borderColor: "rgba(168, 168, 168, 0.8)" },
        border: "1px solid rgba(168, 168, 168, 0.8)",
        boxShadow: "none",
      }),
    },
    {
      key: "indicatorSeparator",
      func: () => ({
        display: "none",
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
        fontSize: "14px",
        color: isSelected || isFocused ? "#fff" : "#7d7d7d",
        backgroundColor: isSelected
          ? "darkgray"
          : isFocused
          ? "lightgray"
          : "#fff",
        "&:active": { color: "#fff", backgroundColor: "silver" },
      }),
    },
    {
      key: "valueContainer",
      func: (base) => ({
        ...base,
        padding: "0px 8px",
        fontSize: "14px",
      }),
    },
  ];

  return styles(style);
};

export default selectStyles;
