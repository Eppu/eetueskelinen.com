interface GradientTextProps {
  children: React.ReactNode;
  textSize?: string;
  animated?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ children, textSize, animated }) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:1000%_auto]  ${textSize} ${
        animated ? "animate-gradient" : ""
      }`}
    >
      {children}
    </span>
  );
};

export default GradientText;
