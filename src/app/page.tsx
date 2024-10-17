'use client'

import ButtonGroup from "../components/GroupButton";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import logo from '../../public/image/logo.png';
import image1 from '../../public/image/image1.jpg';
import image2 from '../../public/image/image2.jpg';
import image3 from '../../public/image/image3.webp';
import image4 from '../../public/image/image4.webp';
import image5 from '../../public/image/image5.jpg';
import image6 from '../../public/image/image6.jpg';
import image7 from '../../public/image/image7.webp';
import { FaUserCircle } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";
import PromoPopup from "../components/PopupPromo";

interface Item {
  img: StaticImageData,
  primeiro: string;
  primeiraQ: string[];
}

export interface IQ {
  q1: boolean
}

export default function Home() {
  const [text, setText] = useState<Item[]>([
    {
      img: image1,
      "primeiro": "Qual é o produto mais vendido da Fini?",
      "primeiraQ": ["Balas de gelatina", " Chocolates", " Sorvetes", " Biscoitos"]
    },
    {
      img: image2,
      "primeiro": "Em que ano a Fini surgiu?",
      "primeiraQ": ["1960", "2000", "1970", " 1988"]
    },
    {
      img: image3,
      "primeiro": "Se você tivesse que escolher um formato clássico da Fini, qual seria?",
      "primeiraQ": ["Ursinhos", "Minhocas", "Tubes", "Dentaduras"]
    },
    {
      img: image4,
      "primeiro": "Qual é o melhor sabor das balas Fine?",
      "primeiraQ": ["Morango", "Uva", "Cereja", "Limão"]
    },
    {
      img: image5,
      "primeiro": "Qual é a melhor edição dos pacotes de bala Fine?",
      "primeiraQ": ["Hallofini", "Finiween", "Doces ou Travessuras Fini", "Balas Assombradas"]
    },
    {
      img: image6,
      "primeiro": "Qual é o principal produto usado na fabricação das balas Fine?",
      "primeiraQ": ["Gelatina", "Açúcar", "Ágar-ágar", "Mel"]
    },
    {
      img: image7,
      "primeiro": "Qual é o principal motivo de você comprar balas Fini?",
      "primeiraQ": ["Pelo sabor doce", "Pelo azedinho", "Pela diversão de mastigar algo diferente", "Porque me lembra a infância"]
    },
  ] as unknown as Item[])

  // [["Balas de gelatina"," Chocolates"," Sorvetes"," Biscoitos"], ["1960","2000","1970"," 1988"], ["Quiosque Fini","Fini Store","Fini World","Fini Station"],["Morango","Uva","Cereja","Limão"],["Hallofini","Finiween","Doces ou Travessuras Fini","Balas Assombradas"],["Gelatina","Açúcar","Ágar-ágar","Mel"],["Mais de 300","Cerca de 100","Mais de 200"," Apenas 50"]]

  const [count, setCount] = useState(0)
  const [verify, setVerify] = useState<IQ>({ "q1": false } as IQ)
  const [name, setName] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = window.localStorage.getItem("promoName");
      setName(storedName || undefined);
    }
  }, []);
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value: string) => {
    setVerify({ "q1": true })
    setSelectedOption(value);
  };

  return (
    <>
      <header className="flex flex-row bg-red2 justify-between items-center gap-10 h-16 bg-red-400 ">
        <Image src={logo} alt={""} className="w-14 h-10 ml-5" />
        <div className="flex flex-row mr-5 items-center justify-center">
          <div className="flex flex-row items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-blink"></div>
            <p className="font-semibold text-white">{name ? `Conectado - ${name}` : "Desconectado - Usuário"}</p>
          </div>
          <PiUserCircleFill className="w-10 h-10 ml-5" />
        </div>
      </header>
      {name != null ? null :<PromoPopup />}
      <main className="flex flex-col items-center justify-between  h-auto md:px-24 sm:p-0 lg:px-24">
        <div className="flex items-center justify-center bg-red3  h-full px-5 w-full md:px-20 sm:p-5 lg:px-20 bg-gray-50">
          <div className="flex flex-col justify-center items-center gap-5 rounded-lg bg-white h-1/2 w-full  p-4 my-10 md:p-5 lg:p-10 text-black">

            <Image src={text[count].img} alt={""} className="rounded-md" />
            <p className="font-bold text-xl text-center">Pertunta {count + 1} de 7</p>
            <p className="font-bold text-2xl text-center">{text[count].primeiro}</p>
            <ButtonGroup btn1={text[count].primeiraQ} selectedOption={selectedOption} handleOptionChange={handleOptionChange} />

            <button className="h-20 bg-red-400 rounded-lg font-bold text-lg w-full hover:bg-red2 hover:text-white transition delay-150 text-white"
              onClick={() => {
                console.log(verify)
                count < text.length - 1 ?
                  verify.q1 ?
                    (setCount(count + 1), setVerify({ "q1": false })) : alert("Selecione uma opção")
                  : router.push("/premio");
              }}
            >
              Enviar avaliação
            </button>
          </div>
        </div>

      </main></>
  );
}