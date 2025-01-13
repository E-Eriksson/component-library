import "./Button.css";

const sizes = {
  large: "buttonLarge",
  small: "buttonSmall",
};

const colors = {
  dark: "buttonDark",
  light: "buttonLight",
};

export default function Button({
  size = "buttonSmall",
  color = "buttonLight",
  title = "click here!",
}) {
  let sizeClassName = sizes[size];

  let colorClassName = colors[color];

  const combinedClasses = sizeClassName + " " + colorClassName + " button";

  return <button className={combinedClasses}>{title}</button>;
}
