"use client";

import React, { useState } from 'react';

const PromoPopup = () => {
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name) {
      window.localStorage.setItem('promoName', name); // Salva o nome no LocalStorage
      alert('Nome salvo! Boa sorte!');
      location.reload()
      setIsVisible(false); // Fecha o popup
    } else {
      alert('Por favor, digite seu nome!');
    }
  };

  if (!isVisible) return null; // Se o popup for fechado, ele não será renderizado

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-4/5">
        <h2 className="text-xl font-bold mb-4">Digite seu nome para participar da promoção</h2>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Digite seu nome"
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-red-400 text-white p-2 rounded w-full hover:bg-red-400 transition"
        >
          Participar
        </button>
      </div>
    </div>
  );
};

export default PromoPopup;
