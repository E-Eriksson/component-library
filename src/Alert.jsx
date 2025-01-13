import "./Alert.css";
import { AiFillExclamationCircle, AiFillWarning } from "react-icons/ai";

const colors = {
  dark: "alertDark",
  light: "alertLight",
};

const icons = {
  exclamation: <AiFillExclamationCircle />,
  warning: <AiFillWarning />,
};

export default function Alert({
  color = "dark",
  icon = "exclamation",
  content = " Test text",
}) {
  return (
    <div className={colors[color] + " alert"}>
      {icons[icon]}
      {content}
    </div>
  );
}
