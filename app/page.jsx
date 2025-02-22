import { Centered } from "./components/core/Layouts";
import { Text, Title } from "./components/core/Text";

export default function Home() {
  return (
    <>
      <Centered>
        <Title content={"oooooooooooooo"} />
        <Text
          className={"text-center max-w-96"}
          content={
            " helloooooo"
          }
        />
      </Centered>
    </>
  );
}
