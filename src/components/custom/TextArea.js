import styles from "./index";
/**
 * スタイルを設定する
 */
const textAreaStyles = () => {
  const style = [
    {
      key: "container",
      func: (base) => ({
        ...base,
        minHeight: "30px",
        border: "none",
        borderRadius: "0px",
        borderBottom: "1px solid rgba(168, 168, 168, 0.8)",
        boxShadow: "0px 6px 5px -5px rgba(168, 168, 168, 0.8)",
      }),
    },
    {
      key: "control",
      func: (base) => ({
        ...base,
        minHeight: "30px",
        border: "none",
        borderRadius: "0px",
        "&:hover": { cursor: "text" },
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
      key: "dropdownIndicator",
      func: () => ({
        display: "none",
      }),
    },
    {
      key: "singleValue",
      func: (base) => ({
        ...base,
        color: "-internal-light-dark(black, white)",
      }),
    },
    {
      key: "menu",
      func: (base) => ({
        ...base,
        margin: "4px 0px",
        color: "-internal-light-dark(black, white)",
      }),
    },
    {
      key: "option",
      func: (base, { isFocused, isSelected }) => ({
        ...base,
        fontSize: "16px",
        color:
          isSelected || isFocused
            ? "#fff"
            : "-internal-light-dark(black, white)",
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
        fontSize: "16px",
      }),
    },
  ];

  return styles(style);
};

export default textAreaStyles;
