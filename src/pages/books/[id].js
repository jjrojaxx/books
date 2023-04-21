import Books from "@/components/Books";
import Menu from "@/components/Menu";
import { getItemData, getPathsFromIds } from "@/lib/utils";

export default function bookPage({ bookInfo }) {
  return (
    <main className="min-h-screen flex flex-col-reverse sm:flex-row">
      <Menu />
      <div className="bg-zinc-900 w-full py-5  lg:px-12 px-4">
        <Books item={bookInfo.data} showAs="Page" />
      </div>
    </main>
  );
}
export async function getStaticPaths() {
  const paths = await getPathsFromIds();
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const books = await getItemData(id);
  return {
    props: {
      bookInfo: books,
    },
  };
}
