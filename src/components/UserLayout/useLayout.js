import { useProducts } from "../../hooks/useProducts";
export const useLayout=()=>{
  const { item } = useProducts();
  const categories = item.map((unLink) => unLink.category.toUpperCase());
  const linksNav = [...new Set(categories)];

  return {linksNav};
}