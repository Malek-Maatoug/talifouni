import { LiensBtn } from "./components/core/Components";
import { Text, Title, SubTitle, Liens } from "./components/core/Text";

export default function Home() {
  return (
    <>
      <section>
        <Title content={"Bienvenue chez Taliphouni"} />
        <Text
          className={"bg-red-300 "}
          content={" Découvrez l’alliance parfaite , nous sommes là pour vous servir"  }/>
          <SubTitle 
          className={"bg-pink-200 "}
          content={"Pourquoi Choisir Taliphouni ?"}/>
          <LiensBtn 
          
          content={"Découvrez Notre Collection "}
           link={"products"}
          />
      
      </section>
    </>
  );
}
