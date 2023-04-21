import Menu from "@/components/Menu";
import Books from "@/components/Books";
import { getItems } from "@/service/itemService";
export default function books({ items }) {
  return (
    <main className="min-h-screen flex sm:flex-row flex-col-reverse">
      <Menu />
      <div className="bg-zinc-900 w-full lg:px-12 py-5 px-4">
        <h2 className="text-2xl mb-4 text-white font-bold">Books</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
          {items &&
            items.map((item) => (
              <Books item={item} key={item.id} showAs="default" />
            ))}
        </div>
      </div>
    </main>
  );
}
export async function getStaticProps() {
  const items = await getItems();
  return {
    props: {
      items,
    },
  };
}
