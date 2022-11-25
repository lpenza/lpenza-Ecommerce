import { useEffect, useState } from "react";
import { productApi } from '../../api/products';

const useItemList = () => {
  const [productsAvailable, setproductsAvailable] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
useEffect(()=>{
  productApi()
  .then(data=>{
    setproductsAvailable(data)
    setIsLoading(false)
  })
    
},[])

  return {
    productsAvailable,
    isLoading
  }

}


export default useItemList;