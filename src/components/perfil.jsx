import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
export default function perfil() {
  return (
    <div className="fixed top-3 right-3 bg-zinc-100 drop-shadow-lg w-2/4 rounded-lg py-4 px-4 flex flex-col justify-end items-end sm:hidde">
      <div>
        <div className="flex justify-end mb-4">
          <Image src={Perfil} height="85" width="85" className="rounded-full" />
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
      <div className="mt-8 py-3 px-3 bg-purple-400 text-black cursor-pointer hover:bg-purple-600 hover:text-white rounded-full w-fit duration-100 sm:block">
      <FaArrowRight className="text-lg duration-100" />
      </div>
    </div>
  );
}
