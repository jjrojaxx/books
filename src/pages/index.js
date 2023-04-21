import Image from "next/image";
import Menu from "../components/menu";
const books = [
  {
    name: "El color perdido del bosque",
    author: "José Rojas",
    description: "Nombre de autor",
    url_photo: "/images/bookOne.jpg",
  },
  {
    name: "Nombre del libro",
    author: "Nombre de autor",
    description: "Nombre de autor",
    url_photo: "/images/bookOne.jpg",
  },
  {
    name: "Nombre del libro",
    author: "Nombre de autor",
    description: "Nombre de autor",
    url_photo: "/images/bookOne.jpg",
  },
  {
    name: "Nombre del libro",
    author: "Nombre de autor",
    description: "Nombre de autor",
    url_photo: "/images/bookOne.jpg",
  },
  {
    name: "Nombre del libro",
    author: "Nombre de autor",
    description: "Nombre de autor",
    url_photo: "/images/bookOne.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col-reverse sm:flex-row">
      <Menu />
      <div className="bg-zinc-900 w-full sm:px-12 md:px-4 lg:px-12 px-4 py-8">
        <div className="flex items-center flex-col sm:flex-row">
          <div className="xl:w-1/4 lg:w-2/5 md:w-3/6">
            <Image
              src="/images/bookOne.jpg"
              height={900}
              width={900}
              className="rounded-lg"
            />
          </div>
          <div className="xl:w-3/4 sm:px-6 sm:py-0 lg:w-3/5 py-4 px-0 md:w-3/6">
            <h2 className="text-4xl font-semibold text-slate-200">
              El Color Perdido Del Bosque
            </h2>
            <h3 className="text-slate-200 mb-8">
              Author: <span className="text-purple-400 ">Joe Chamber</span>
            </h3>
            <p className="text-gray-500 font-medium mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="bg-purple-600 text-white hover:bg-purple-700 rounded-full py-3 px-10 font-semibold">
              Read More
            </button>
          </div>
        </div>
        <h2 className="text-lg text-slate-200 mt-5 mb-3 font-semibold">
          Others Books
        </h2>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {books.map((book) => {
            return (
              <div className="">
                <Image
                  src={book.url_photo}
                  alt="Picture of the author"
                  height={80}
                  width={80}
                  className="flex-auto w-full rounded-lg"
                />
                <h3 className="text-base mt-3 font-semibold text-slate-300 leading-4 mb-2">
                  {book.name}
                </h3>
                <h4 className="text-slate-500 font-light text-sm leading-4">
                  Author: <spna className="text-purple-500">{book.author}</spna>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
