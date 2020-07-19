import styles from "./index";
/**
 * スタイルを設定する
 */
const inputAreaStyles = () => {
  const style = [
    {
      key: "control",
      func: (base) => ({
        ...base,
        "border-radius": "0",
        "border-top": "0",
        "border-bottom": "1px solid rgba(168, 168, 168, 0.8)",
        "border-left": "0",
        "border-right": "0",
        "&:hover": {
          "border-bottom": "1px solid rgba(168, 168, 168, 0.8)",
          cursor: "text",
        },
        // border: "1px solid #b6b6b6",
        filter: "drop-shadow(1px 4px 2px gray)",
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
      key: "indicatorsContainer",
      func: () => ({
        display: "none",
      }),
    },
    {
      key: "indicatorSeparator",
      func: () => ({
        display: "none",
      }),
    },
    {
      key: "menu",
      func: () => ({
        display: "none",
      }),
    },
    {
      key: "placeholder",
      func: () => ({
        display: "none",
      }),
    },
  ];

  return styles(style);
};

export default inputAreaStyles;
