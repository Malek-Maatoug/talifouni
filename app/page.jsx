import { LiensBtn } from "./components/core/Components";
import { Text, Title, SubTitle, Liens } from "./components/core/Text";
import { Centered } from "./components/core/Layouts";
import Categories from "./components/Categories";
export default function Home() {
  return (
    <>
      <Centered>
        <Title
          className={"text-center max-w-[800px] "}
          content={"   Notre boutique Talifouni propose les meilleurs produits"}
        />
        <Text
          className={"text-center max-w-[600px] text-xl"}
          content={
            " La diversité massive des modèles sur le marché rend le choix idéal pour un smartphone précis un peu complexe. Dans ce contexte, TALIFOUNI met à votre disposition une équipe d'experts en appareils mobiles en particulier les smartphones pour vous aider à trouver ce que vous désirez en marques et nouveautés techniques avec le meilleur smartphone prix Tunisie."
          }
        />
        <Categories />
        <LiensBtn link={"/Products"} content={"more"} />
      </Centered>
    </>
  );
}
