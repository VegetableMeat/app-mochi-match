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
      func: () => ({
        display: "none",
      }),
    },
  ];

  return styles(style);
};

export default inputAreaStyles;
