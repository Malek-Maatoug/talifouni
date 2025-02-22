const Text = ({ content, className }) => {
  return <p className={`${className} text-sm `}> {content} </p>;
};

const Title = ({ content, className }) => {
  return (
    <h1
      className={`font-[family-name:var(--title)]  text-6xl font-bold ${className}`}
    >
      {content}{" "}
    </h1>
  );
};

const SubTitle = ({ content, className }) => {
  return (
    <h3 className={`font-[family-name:var(--title)] ${className}`}>
      {" "}
      {content}{" "}
    </h3>
  );
};
const Liens = ({ content, className }) => {
  return (
    <h4 className={`font-[family-name:var(--title)] ${className}`}>
      {" "}
      {content}{" "}
    </h4>
  );
};
export { Text, Title, SubTitle, Liens };
