"use client";

import React, { useState } from 'react';

interface ButtonGroupProps {
  btn1: string[];
  handleOptionChange:(option:string)=> void
  selectedOption: string
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ btn1, handleOptionChange, selectedOption }) => {

  return (
    <form className='w-full'>
      {btn1.map((option) => (
        <label
          key={option}
          className={`flex items-center mb-3 p-2 rounded-lg cursor-pointer ${
            selectedOption === option ? 'bg-red-100' : 'bg-white'
          }`}
        >
          <input
            type="radio"
            name="produto"
            value={option}
            className="hidden peer" // Esconder o input padrão
            onChange={() => handleOptionChange(option)}
            checked={selectedOption === option}
          />
          <span className={`w-5 h-5 border-2 border-red-400 rounded-full mr-2 flex items-center justify-center transition-colors duration-20`}>
            {selectedOption === option && (
              <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span> // Ajuste o tamanho da bolinha interna
            )}
          </span>
          {option}
        </label>
      ))}
    </form>
  );
};

export default ButtonGroup;
