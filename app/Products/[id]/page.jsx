"use client";
import { ThreeColumns } from "@/app/components/core/Layouts";
import { Title, Text } from "@/app/components/core/Text";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
const page =  () => {
  const { id } = useParams();
  const [phone, setPhone] = useState([]);
  const getPhone = async ()=> {
      try {
          const res = await axios.get("http://localhost:3000/phones/"+id);
          setPhone(res.data); // Access the "phones" array from the response
      } catch (error) {
          console.error("Error fetching phones:", error);
      }
  }
  useEffect(()=>{
      getPhone()
  },[])
  console.log(phone)
  const {
    name,
    photo,
    stock,
    description,
    price,
    release_date,
    colors,
  } = phone;
  console.log(name,photo);
  
  return (
     <>
   {photo ? ( <ThreeColumns className={"min-h-screen"}>
     
     <div className="relative w-full h-1/2">
  
     
    <Image src={photo } alt={name} fill  className="object-contain" />)
     
   </div>
   <div className=" col-span-2 grid gap-3 content-start">
     <Title content={name} />
     <Text
       content={description}
       className={"text-sm text-slate-500 w-[550px]"}
     />
     <div className="flex gap-2">
       {colors?.map((v,key) => (
         <span
 key={key}           style={{ backgroundColor: v }}
           className={`h-10 w-10 rounded-[50%]   border border-black border-solid inline   `}
         >
           {" "}
         </span>
       ))}
     </div>
     <div className="flex justify-between  w-[550px] items-start">
       <Text content={price + " Dt "} className={"text-5xl font-bold"} />
       <Text
         content={" Stock : " + stock + " Left"}
         className={" capitalize font-bold"}
       />
       <Text
         content={"relese date : " + release_date}
         className={" capitalize font-bold"}
       />
     </div>
   </div>
     
    </ThreeColumns>): ( <h1>loading....</h1> )}
     
  
     </>)
};

export default page;
