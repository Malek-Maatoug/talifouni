import React from 'react'
import panier_2 from '../assets/panier_2.png'
import Image from 'next/image';

const page = () => {
     // Données fictives pour le panier
  const items = [
    { id: 1, name: 'Produit 1', price: 25.99, quantity: 2 },
    { id: 2, name: 'Produit 2', price: 15.50, quantity: 1 },
    { id: 3, name: 'Produit 3', price: 10.00, quantity: 3 },
  ];

  // Calcul du total
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="min-h-screen py-10">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* En-tête du panier */}
      <div className="bg-blue-600 p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Panier</h1>
        <div className='w-14 h-12 text-white relative'>
            <Image className='text-white' src={panier_2} alt='logo-panier' fill priority ></Image>
        </div>
      </div>

      {/* Liste des articles */}
      <div className="p-6">
        {items.map((item, index) => (
          <div key={item.id} className={`flex justify-between items-center py-4 ${index !== items.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-blue-900">{item.name}</h2>
              <p className="text-gray-600">Quantité: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-900 font-bold">{(item.price * item.quantity).toFixed(3)} DT</p>
              <p className="text-gray-500 text-sm">{item.price.toFixed(3)} DT/Unité</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total et bouton de validation */}
      <div className="bg-blue-50 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-900">Total</h2>
          <p className="text-2xl font-bold text-blue-900">{total.toFixed(3)} DT</p>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Passer la commande
        </button>
      </div>
    </div>
  </div>
  )
}

export default page