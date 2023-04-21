import Image from "next/image";
import Link from "next/link";
import Photo from "../../public/images/perfil.jpg";
import {
  FaPeace,
  FaHome,
  FaBook,
  FaGrinStars,
  FaBookOpen,
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";
export default function Menu() {
  const [show, setShow] = useState(true);
  const mostrar = () => {
    setShow(!show);
  };
  const [mostrarE, setMostrar] = useState(true);
  const mostrarPerfil = () => {
    setMostrar(!mostrarE);
  };
  return (
    <div className="bg-zinc-900">
      <div
        className={`${
          mostrarE ? "duration-700 oculto" : "duration-700 right-3"
        } fixed top-3 bg-zinc-100 drop-shadow-lg w-48 rounded-lg py-4 px-4 flex flex-col justify-end items-end sm:hidde`}
      >
        <div>
          <div className="flex justify-end mb-4">
            <Image
              src={Photo}
              height="85"
              width="85"
              className="rounded-full"
              alt="Perfil"
            />
          </div>
          <h2 className="font-bold text-lg leading-4 mt-3 text-black text-right">
            José Rojas
          </h2>
          <h3 className="font-bold text-purple-800 text-right text-sm">
            Full Stack Developer
          </h3>
        </div>
        <div className="text-2xl text-gray-500 flex justify-end gap-2 mt-4">
          <Link href="https://github.com/jjrojaxx">
            <FaGithub className="hover:text-purple-500 cursor-pointer text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/joseph-leal-d2000/">
            <FaLinkedin className="hover:text-purple-500 cursor-pointer text-2xl" />
          </Link>
          <Link href="https://www.instagram.com/joseph_leal200/">
            <FaInstagram className="hover:text-purple-500 cursor-pointer text-2xl" />
          </Link>
        </div>
        <div
          onClick={mostrarPerfil}
          className="mt-8 py-3 px-3 bg-purple-400 text-black cursor-pointer hover:bg-purple-600 hover:text-white rounded-full w-fit duration-100 sm:block"
        >
          <FaArrowRight className="text-lg duration-100" />
        </div>
      </div>
      <div
        className={`${
          show ? "sm:w-20 duration-1000" : "w-64 duration-1000"
        } bg-zinc-900 border-t-2 sm:border-r-2 border-zinc-800 py-2 px-4 sm:py-4 sm:flex sm:justify-center sm:sticky fixed bottom-0`}
      >
        <div className="flex flex-row sm:flex-col md:sticky sm:fixed justify-between">
          <div className="mb-0 sm:mb-10">
            <div className="flex-row sm:flex sm:justify-center">
              <Link
                href="/"
                title="Logo"
                className="flex items-center text-purple-500"
              >
                <FaPeace className={`text-4xl `} />
                <span
                  className={`${
                    show ? " opacity-0 absolute duration-800" : "duration-800"
                  } ml-1 font-bold text-2xl`}
                >
                  Happy
                </span>
              </Link>
            </div>
            <div className="flex flex-col text-center">
              <div className="hidden sm:flex sm:justify-center mt-5">
                <Image
                  src={Photo}
                  height={`${show ? 42 : 85}`}
                  width={`${show ? 42 : 85}`}
                  alt="Perfil"
                  className={`rounded-full ${
                    show ? "duration-1000" : "duration-1000"
                  }`}
                />
              </div>
              <h2
                className={`${
                  show ? "opacity-0 absolute" : ""
                } font-bold text-lg leading-4 mt-3 text-white`}
              >
                José Rojas
              </h2>
              <h3
                className={`${
                  show ? "opacity-0 absolute" : ""
                } font-light text-purple-400 text-base`}
              >
                Full Stack Developer
              </h3>
              <div
                className={`${
                  show
                    ? "hidden sm:flex items-center flex-col duration-1000"
                    : "flex justify-center gap-3 mt-3"
                } text-2xl text-gray-500 duration-1000`}
              >
                <Link
                  href="https://github.com/jjrojaxx"
                  className={`${
                    show ? "mt-4 mb-2 duration-1000" : "duration-1000"
                  }`}
                >
                  <FaGithub className="hover:text-purple-500 cursor-pointer text-2xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/joseph-leal-d2000/"
                  className={`${show ? "mb-2 duration-1000" : "duration-1000"}`}
                >
                  <FaLinkedin className="hover:text-purple-500 cursor-pointer text-2xl" />
                </Link>
                <Link
                  href="https://www.instagram.com/joseph_leal200/"
                  className={`${show ? "mb-2 duration-1000" : "duration-1000"}`}
                >
                  <FaInstagram className="hover:text-purple-500 cursor-pointer text-2xl" />
                </Link>
              </div>
            </div>
          </div>
          <nav className="sm:h-2/5">
            <ul className="flex sm:flex-col">
              <li className="text-gray-500 hover:text-black hover:bg-purple-400 font-semibold  rounded-md transition duration-150 ease-in-out">
                <Link
                  href="/"
                  title="Home"
                  className={`flex py-2 px-2 ${
                    show ? "justify-center" : "justify-start"
                  } items-center`}
                >
                  <FaHome className="text-2xl" />
                  <span
                    className={`${
                      show ? "opacity-0 absolute" : "opacity-100 ml-2"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="text-gray-500 hover:text-black hover:bg-purple-400 font-semibold rounded-md transition duration-150 ease-in-out">
                <Link
                  href="/books"
                  title="Books"
                  className={`flex py-2 px-2 ${
                    show ? "justify-center" : "justify-start"
                  } items-center`}
                >
                  <FaBook className="text-2xl" />
                  <span
                    className={`${
                      show ? "opacity-0 absolute" : "opacity-100 ml-2"
                    }`}
                  >
                    Books
                  </span>
                </Link>
              </li>
              <li className="text-gray-500 hover:text-black hover:bg-purple-400 font-semibold rounded-md transition duration-150 ease-in-out">
                <Link
                  href="/"
                  title="Favorite"
                  className={`flex py-2 px-2 ${
                    show ? "justify-center" : "justify-start"
                  } items-center`}
                >
                  <FaGrinStars className="text-2xl" />
                  <span
                    className={`${
                      show ? "opacity-0 absolute" : "opacity-100 ml-2"
                    }`}
                  >
                    Favorite
                  </span>
                </Link>
              </li>
              <li className="text-gray-500 hover:text-black hover:bg-purple-400 font-semibold rounded-md transition duration-150 ease-in-out">
                <Link
                  href="/"
                  title="Read More"
                  className={`flex py-2 px-2 ${
                    show ? "justify-center" : "justify-start"
                  } items-center`}
                >
                  <FaBookOpen className="text-2xl" />
                  <span
                    className={`${
                      show ? "opacity-0 absolute" : "opacity-100 ml-2"
                    }`}
                  >
                    Read More
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className="md:hidden sm:flex sm:justify-center"
            onClick={mostrarPerfil}
          >
            <Image
              src={Photo}
              height={`${show ? 38 : 85}`}
              width={`${show ? 38 : 85}`}
              alt="Perfil"
              className={`rounded-full ${
                show ? "duration-1000" : "duration-1000"
              }`}
            />
          </div>
          <div
            onClick={mostrar}
            className={`mt-8 py-3 px-3 bg-purple-400 text-black cursor-pointer hover:bg-purple-600 hover:text-white rounded-full w-fit duration-100 hidden sm:block `}
          >
            {show ? (
              <FaArrowRight className="text-lg duration-100" />
            ) : (
              <FaArrowLeft className="text-lg duration-100" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
