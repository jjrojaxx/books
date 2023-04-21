import { getItems } from "@/service/itemService";
export async function getPathsFromIds() {
  const items = await getItems(); 
  const ids = items.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return ids;
}
export async function getItemData(id) {
  const items = await getItems();
  const books = items.find((item) => item.id.toString() === id);
  return{
    id: id,
    data: books, 
  }
}
