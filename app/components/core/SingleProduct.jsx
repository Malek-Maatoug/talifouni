"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import show from '../../assets/show.png'

const SingleProduct = ({phone}) => {
    const {id, photo, name, price, description, stock, popularity, release_date} = phone
    console.log(phone);
    if (!photo || !name || !price || !description || !release_date || popularity === null || popularity=== undefined) {
        return null; // Don't render if photo is not available
    }
    const getDifferenceInDays = (date1, date2)=>{
        // Convertir les dates en objets Date
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Calculer la différence en millisecondes
    const differenceInMilliseconds = Math.abs(d2 - d1); // Math.abs pour une valeur positive

    // Convertir la différence en jours
    const millisecondsInOneDay = 1000 * 60 * 60 * 24; // Nombre de millisecondes dans une journée
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInOneDay);

    return differenceInDays;
    }
    let today = new Date()
    const year = today.getFullYear(); // Année (ex: 2023)
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mois (ajouter 1 et formater avec un zéro devant si nécessaire)
    const day = String(today.getDate()).padStart(2, '0'); // Jour (formater avec un zéro devant si nécessaire) 
    today = `${year}-${month}-${day}`   
    console.log(today, typeof today, getDifferenceInDays(release_date , today)); 
    


    
  return (
    <main className='min-w-full min-h-full'>
        <div className='h-full w-full grid grid-cols-3'>
            <div className='col-span-1 rounded-2xl relative'>
                <Image src={photo} alt='phone'fill priority className='rounded-l-2xl'/>
            </div>
            <div className='col-span-2 flex flex-col bg-blue-950 rounded-r-2xl h-full w-full gap-1 pt-4 pb-3 px-5'>
                <div className='flex flex-row justify-end gap-2'>
                    {getDifferenceInDays(release_date , today) < 30 ? 
                    <div className='border-2 border-orange-500 rounded-3xl h-5 text-sm'><span className='p-2 text-orange-500'>New</span></div>
                    :""
                    }
                    {popularity ? 
                    <div className='border-2 border-blue-700 rounded-3xl h-5 text-sm'><span className='p-2 text-blue-700'>Popular</span></div>
                    :""
                    }
                    {stock > 0 ? 
                    <div className='border-2 border-green-800 rounded-3xl h-5 text-sm'><span className='p-2 text-green-800'>En Stock</span></div>
                    :<div className='border-2 border-red-600 rounded-3xl h-5 text-sm'><span className='p-2 text-red-600'>Rupture</span></div>
                    }
                </div>
                <Link className='text-white text-2xl hover:text-blue-600 hover:underline hover:underline-offset-2' href={`/Products/${id}`}>{name}</Link>
                <h2 className='text-red-600 text-xl'>{price.toFixed(3)} DT</h2>
                <p className='text-gray-500 line-clamp-3'>{description}</p>
            </div>
        </div>
    </main>
  )
}

export default SingleProduct