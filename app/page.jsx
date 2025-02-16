import { Text, Title } from "./components/core/Text";

export default function Home() {
  return (
    <>
      <section>
        <Title content={"hefheoigehfpoejgpeogjpo"} />
        <Text
          className={"bg-red-300 "}
          content={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ut molestias nulla accusantium perferendis a? Ex perferendis ipsa totam, architecto dolor nobis cupiditate dolores, optio quam enim adipisci error maxime."
          }
        />
      </section>
    </>
  );
}
