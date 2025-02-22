import Categories from "@/components/Categories";
import React from "react";
import ProductsButton from "../components/ProductsButton";
export default function Home() {
  return (
    <main className="flex justify-center items-center p-6">
      <section className="bg-gradient-to-r from-yellow-500 to-blue-200 p-4 rounded-lg shadow-lg border-2 border-white">
        <h1 className="text-center text-6xl font-bold text-blue-600 animate-pulse bg-center"></h1>

        <Categories />
        <ProductsButton>
          {" "}
          <h3>Cliquez ici</h3>
        </ProductsButton>
        <p className="text-gray-700">
          La diversité massive des modèles sur le marché rend le choix idéal
          pour un smartphone précis un peu complexe. Dans ce contexte, TALIFOUNI
          met à votre disposition une équipe d'experts en appareils mobiles en
          particulier les smartphones pour vous aider à trouver ce que vous
          désirez en marques et nouveautés techniques avec le meilleur
          smartphone prix Tunisie.
        </p>
        <p className="text-gray-700 mt-4">
          On vous présente notre gamme des smartphones Tunisie qui comporte tout
          ce que vous cherchez en matière de nouveautés technologiques et
          fonctionnalités intelligentes ainsi que les marques qui assurent les
          smartphones abordables avec une qualité correcte comme Oppo Tunisie,
          Intel mobile, ZTE, Tecno, Vivo, Infinix, Oppo Reno, Nokia, realme,
          Xiaomi et Redmi, en plus des marques qui assurent les téléphones haut
          de gamme comme Samsung, surtout la série Galaxy et Huawei.
        </p>
      </section>
    </main>
  );
}
