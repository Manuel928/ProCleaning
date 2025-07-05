const Button = ({
  children,
  size = "",
  bg = "",
  buttonTextColor = "",
  border = "",
  font = "",
  hover = "",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-2",
    lg: "px-8 py-4",
  };

  const backgroundColor = {
    green: "bg-[#36B864]",
    outline: "bg-transparent",
  };

  const textColor = {
    white: "text-white",
    darkGreen: "text-[#111D15]",
  };

  const fontWeight = {
    regular: "font-normal",
    semiBold: "font-semibold",
    bold: "font-bold",
  };

  const borderColor = {
    darkGreen: "border",
    green: "border border-[#36B864]",
    gray: "border border-[#666666]",
  };

  const hoverColor = {
    green:
      "hover:bg-[#36B864] hover:border hover:text-white hover:border-[#36B864] duration-300 transition",
  };

  const bgClass = backgroundColor[bg] || backgroundColor.green;
  const textClass = textColor[buttonTextColor] || textColor.white;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const borderClass = borderColor[border] || borderColor.darkGreen;
  const hoverClass = hoverColor[hover] || hoverColor.green;
  const fontClass = fontWeight[font] || fontWeight.semiBold

  return (
    <a
      href="#"
      className={`${bgClass} ${textClass} ${sizeClass} ${borderClass} ${hoverClass} ${fontClass} text-[14px] flex items-center gap-2.5 md:text-[16px] text-center rounded-[6px] duration-300 transition`}
    >
      {children}
    </a>
  );
};

export default Button;
