const Centered = ({ children, className }) => {
  return <div className="grid justify-items-center gap-6 ">{children}</div>;
};
const ThreeColumns = ({ children, className }) => {
  return <div className={`grid grid-cols-3 gap-6 ${className}`}>{children}</div>;
};
export { Centered, ThreeColumns };
