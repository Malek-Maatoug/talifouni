"use client";
import { ThreeColumns } from "@/app/components/core/Layouts";
import { Title, Text } from "@/app/components/core/Text";
import Image from "next/image";
import { Fetch } from "@/app/Fetch";
import { useParams } from "next/navigation";
const page = async () => {
  const { id } = useParams();
  const product = await Fetch(id);
  console.log(product);
  const {
    name,
    photo,
    stock,
    description,
    price,

    release_date,
    colors,
  } = product;
  return (
    <ThreeColumns className={"min-h-screen"}>
      <div className="relative w-full h-1/2">
        <Image src={photo} alt={name} fill className="object-contain" />
      </div>
      <div className=" col-span-2 ">
        <Title content={name} />
        <Text
          content={description}
          className={"text-sm text-slate-500 w-[550px]"}
        />
        <div className="flex gap-2">
          {colors?.map((v) => (
            <span
              style={{ backgroundColor: v }}
              className={`h-10 w-10 rounded-[50%]   border border-black border-solid inline   `}
            >
              {" "}
            </span>
          ))}
        </div>
        <div className="flex justify-between  w-[550px] items-center">
          <Text content={price + " Dt "} className={"text-5xl font-bold"} />
          <Text content={" Stock : " + stock + " Left"} />
          <Text content={"relese date : " + release_date} />
        </div>
      </div>
    </ThreeColumns>
  );
};

export default page;
