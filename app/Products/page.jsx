"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image';
import SingleProduct from '../components/core/SingleProduct';

const page = () => {
    const [phones, setPhones] = useState([]);
    const getPhones = async ()=> {
        try {
            const res = await axios.get("http://localhost:3000/phones");
            setPhones(res.data); // Access the "phones" array from the response
        } catch (error) {
            console.error("Error fetching phones:", error);
        }
    }
    useEffect(()=>{
        getPhones()
    },[])
    console.log(phones);
    
    
    
    
  return (
    <div className='min-w-full min-h-full grid grid-cols-2 gap-5'>
        {phones ? (
          phones.map((v) => (
            <SingleProduct
              key={v.id}
              phone={v}
            />
          ))
        ) : (
          <h1>Loadinng ......</h1>
        )}
    </div>
  )
}

export default page