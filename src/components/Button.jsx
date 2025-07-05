const Button = ({ text, size = "", bg = "", color = "", border = "" }) => {
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-2",
    lg: "px-8 py-4",
  };

  const colors = {
    green: "bg-[#36B864]",
    outline: "bg-transparent",
  };

  const textColor = {
    white: "text-white",
    darkGreen: "text-[#111D15]",
  };

  const borderColor = {
    darkGreen: "border",
  };

  const bgClass = colors[bg] || colors.green;
  const textClass = textColor[color] || textColor.white;
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const borderClass = borderColor[border] || borderColor.darkGreen;

  return (
    <a
      href="#"
      className={`${bgClass} ${textClass} ${sizeClass} ${
        colors[bg] == "bg-transparent" ? `${borderClass} backdrop-blur-sm` : "border-none"
      } text-[14px] md:text-[16px] text-center font-semibold rounded-[6px] duration-300 transition`}
    >
      {text}
    </a>
  );
};

export default Button;
