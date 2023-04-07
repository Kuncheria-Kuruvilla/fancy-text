import { FC } from "react";

type FancyTextProps = { text: string };

const FancyText: FC<FancyTextProps> = ({ text }) => {
  const words = text.split(" ");
  return (
    <h1
      style={{
        marginTop: "0px",
        marginBottom: "8px",
        textShadow: "3px 3px #011627",
        fontFamily: "sans-serif",
        color: "#FFF",
      }}
    >
      {words.map((word) => (
        <span
          key={word}
          style={{
            display: "inline-block",
            backgroundSize: "100% 1.2em",
            backgroundPosition: "0.5em 0px",
            backgroundRepeat: "no-repeat space",
            paddingRight: ".8em",
            marginRight: "-0.5em",
            backgroundImage:
              "linear-gradient(transparent 55%,#EF5350 55%,#EF5350 95%,transparent 95%)",
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default FancyText;