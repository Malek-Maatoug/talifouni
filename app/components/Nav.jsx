import Link from "next/link";
import { Title } from "./core/Text";
import cart from "@/app/assets/Panier_2.png";
import Image from "next/image";
import { LiensBtn } from "./core/Components";
const Nav = () => {
  return (
    <nav className="flex justify-between p-8 ">
      <Link href={"/"}>
        {" "}
        <Title content={"Talifouni"} className={"text-xl"} />{" "}
      </Link>
      <Link href={"/Products"}> shop </Link>
      <LiensBtn
        link={"/Panier"}
        content={<Image src={cart} width={50} height={50} alt="panier" />}
      ></LiensBtn>
    </nav>
  );
};

export default Nav;
