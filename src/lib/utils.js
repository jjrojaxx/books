import { getItems } from "@/service/itemService";
export async function getPathsFromIds() {
  const items = await getItems();
  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.name),
      },
    };
  });
  return ids;
}
export async function getItemData(id) {
  const items = await getItems();
  const books = items.find((item) => convertToPath(item.name) === id);
  return {
    id: id,
    data: books,
  }; 
}
export function convertToPath(name) {
  return name.toLowerCase().replace(/\s/g, "-");
}
