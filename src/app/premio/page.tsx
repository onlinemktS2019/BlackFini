'use client'

// import ButtonGroup from "@/components/GroupButton";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import image1 from '../../public/image/primeira.jpeg';
// import image4 from '../../public/image/quarta.jpeg';
// import image5 from '../../public/image/quinta.webp';
// import image2 from '../../public/image/segundo.jpeg';
// import premio from '../../../public/image/premio.jpeg';
// import bk from '../../../public/image/bk.png'
import logo from '../../../public/image/logo.png';
import gif from '../../../public/image/check.gif';
import { RxTextAlignJustify } from "react-icons/rx";
import { PiUserCircleFill } from "react-icons/pi";

interface Pergunta {
  titulo: string;
  btn1: string;
  btn2: string;
}

interface Item {
  img: StaticImageData,
  primeiro: string;
  primeiraQ: Pergunta;
  segundaQ: Pergunta;
}
export default function Home() {


  const [count, setCount] = useState(0)
  const [button, setButton] = useState(0)
  const router = useRouter();
  const [name, setName] = useState(typeof window !== "undefined" ? window.localStorage.getItem("promoName") : "");

  const handleRatingChange = (newRating: number) => {
    setButton((butt) => (butt + 1))
    console.log(button);
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
      <main className="flex flex-col items-center justify-between h-full md:px-24 sm:p-0 lg:px-24 bg-gray-100">
        <div className="flex items-start justify-center bg-red3  h-full px-5 md:px-20 sm:p-5 lg:px-20 ">
          <div className="flex flex-col items-center justify-between gap-5 rounded-lg bg-white h-4/6 lg:h-1/2  p-4 my-10 md:p-10 lg:p-10 text-black">
            <Image src={gif} alt={""} className="w-[15rem] h-[15rem]" />
            <div className="flex flex-col justify-between gap-5">
              <h1>Parabéns {name} !</h1>
              <p>
                Você acertou incríveis 70% das perguntas,
                apenas 10% das pessoas consegue
                chegar a isso. Parabéns! Você
                desbloqueou 1 ano de produtos Fini
                pagando apenas o frete. Clique em
                resgatar para saber mais!
              </p>
            </div>




            <button className="h-16 rounded-lg font-bold text-lg w-full bg-red2 text-white transition delay-150 bg-red-400"
              onClick={() => {
                router.push("/seupremio.html");
              }}
            >
              RESGATAR
            </button>
          </div>
        </div>

      </main></>
  );
}