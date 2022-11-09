import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {useParams} from 'react-router-dom';
import { useProducts } from "../hooks/useProducts";
import { NotFound } from "./NotFound/NotFound";


export const Category=()=>{
  const {categoryId}=useParams()
  const {item,isLoading}=useProducts(1,categoryId)
  return(
    <>
    {!isLoading && item.length===0?<NotFound />:<ItemListContainer products={item} isLoading={isLoading}  />}
    </>
  )
}