import styles from "./index";
/**
 * スタイルを設定する
 */
const inputAreaStyles = () => {
  const style = [
    {
      key: "container",
      func: (base) => ({
        ...base,
        borderBottom: "1px solid rgba(168, 168, 168, 0.8)",
        "box-shadow": "0px 5px 5px -5px rgba(168, 168, 168, 0.8)",
      }),
    },
    {
      key: "control",
      func: (base) => ({
        ...base,
        "min-height": "30px",
        "border-radius": "0",
        border: "none",
        boxShadow: "none",
        "&:hover": { cursor: "text" },
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
