"use client"

// import { IQ } from '@/app/page';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface InputGroupProps {
  btn1: string;
}

const InputGroup: React.FC<InputGroupProps> = ({  btn1 }) => {
  // const [selectedButton, setSelectedButton] = useState<string | null>(null);

  // const handleClick = (button: string, value: number) => {
  //   setSelectedButton(button);
  //   setButton(value);
  //   if (question == 1){
  //     setVerify((v: any)=> {return{"q1":true, "q2":v.q2,"q3":v.q3}})
  //   } else {
  //     setVerify((v: any)=> {return{"q1":v.q1, "q2":true,"q3":v.q3}})
  //   }
  // };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <>
      <form className=''>

          return <>
            <label
            className={`block mb-3 p-2 rounded-lg cursor-pointer ${
              selectedOption === 'balas' ? 'bg-pink-100' : ''
            }`}
          >
            <input
              type="radio"
              name="produto"
              value="balas"
              className="mr-2 text-pink-500 focus:ring-pink-500"
              onChange={() => handleOptionChange('balas')}
              checked={selectedOption === 'balas'}
            />
              {btn1}
            </label>
          </>
      </form></>
  );
};

export default InputGroup;
