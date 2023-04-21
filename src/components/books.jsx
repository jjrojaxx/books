import Image from "next/image";
import Link from "next/link";

export default function Books({ showAs, item }) {
  if (showAs === "Page") {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="xl:mr-0 lg:mr-8 xl:w-2/5 lg:w-2/6 lg:ml-3">
          <Image
            src={item.url_photo}
            alt={item.name}
            height={380}
            width={380}
            className="rounded-md"
          />
        </div>
        <div className="py-4 lg:w-3/5">
          <h1 className="text-4xl text-white font-semibold mb-4">
            {item.name}
          </h1>
          <div className="flex lg:flex-row flex-col mb-2">
            <h2 className="text-lg mb-2 mr-4 text-gray-500 font-medium">
              Author: <span className="text-purple-600">{item.author}</span>
            </h2>
            <h2 className="text-lg mb-2 text-gray-500 font-medium">
              Editorial: <span className="text-purple-600">Studio records</span>
            </h2>
          </div>
          <h3 className="text-lg text-gray-500 font-medium mb-4">
            Genero:{" "}
            <span className="bg-purple-600 py-1 px-2 rounded-full text-sm font-semibold text-slate-200">
              {item.genero}
            </span>
          </h3>
          <p className="text-gray-500 font-medium text-base mb-10">
            {item.description}
          </p>
          <button className="bg-purple-600 rounded-full py-3 px-8 text-slate-200 font-bold">
            Descargar Libro
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Link href={`/books/${item.id}`}>
        <Image
          src={item.url_photo}
          alt="Picture of the author"
          height={200}
          width={300}
          className="flex-auto rounded-lg"
        />
        <h3 className="text-base mt-3 font-semibold text-slate-300 leading-4 mb-2">
          {item.name}
        </h3>
        <h4 className="text-slate-500 font-light text-sm leading-4">
          Author: <spna className="text-purple-500">{item.author}</spna>
        </h4>
      </Link>
    </div>
  );
}
