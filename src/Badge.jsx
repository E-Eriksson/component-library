import "./Badge.css";
import { AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai";

const colors = {
  dark: "badgeDark",
  light: "badgeLight",
};

const icons = {
  clock: <AiOutlineClockCircle />,
  check: <AiOutlineCheckCircle />,
};

const sizes = {
  large: "badgeLarge",
  small: "badgeSmall",
};

export default function Alert({
  color = "dark",
  icon = "check",
  content = "Test",
  size = "large",
}) {
  const combinedClasses = sizes[size] + " " + colors[color] + " badge";
  return (
    <div className={combinedClasses}>
      {icons[icon]}
      {content}
    </div>
  );
}
