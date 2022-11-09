import { useState, useEffect } from "react";
import { productApi, productApiCategory, productApiId } from "../api/products";
export const useProducts = (opcion=0,parametro=0) => {
  const [item, setItem] = useState([]||{});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    switch (opcion) {
      case 0:
        productApi()
          .then((data) => {
            setItem(data);
            setIsLoading(false);
          })
          .catch((e) => setError(true));
        break;
      case 1:
        productApiCategory(parametro)
          .then((data) => {
            setItem(data);
            setIsLoading(false);
          })
          .catch((e) => {setError(true)});
        break;
      case 2:
        productApiId(parametro)
        .then((data) => {
          setItem(data);
          setIsLoading(false);
        })
        .catch((e) => setError(true));
        break;
    }
  }, [parametro]);

  return{
    error,
    isLoading,
    item
  }
  

  

}