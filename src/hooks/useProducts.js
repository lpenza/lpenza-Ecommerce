import  { useState, useEffect } from "react";
import { getProducts, getProduct, getProductsByName } from "../api/products";
import { useSearchContext } from '../context/searchContext';

export const useProducts = (opcion = 0, parametro = 0) => {
  const { search } = useSearchContext();
  const [item, setItem] = useState([] || {});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [busqueda,setBusqueda]=useState([]||{})

  const matchName = () => {
    let names = item.map(item => item.nombre)
    let final=names.map(item=>item.replace("'",''))
    let lista=final.filter(i=>i.toLowerCase().includes(search.toLowerCase()))
    setBusqueda(lista)
  }

  useEffect(() => {
    switch (opcion) {
      case 0:
        if (search !== '') {
          matchName()
          getProductsByName(busqueda)
            .then((data) => {
              setItem(data);
              setIsLoading(false);
            })
            .catch((e) => setError(true));
        } else {
          getProducts()
            .then((data) => {
              setItem(data);
              setIsLoading(false);
            })
            .catch((e) => setError(true));
        }
        break;
      case 1:
        getProducts(parametro)
          .then((data) => {
            setItem(data);
            setIsLoading(false);
          })
          .catch((e) => { setError(true) });
        break;
      case 2:
        getProduct(parametro)
          .then((data) => {
            setItem(data);
            setIsLoading(false);
          })
          .catch((e) => setError(true));
        break;
        default:
          getProducts()
            .then((data) => {
              setItem(data);
              setIsLoading(false);
            })
            .catch((e) => setError(true));
        break;
    }
  }, [parametro, search,opcion]);
  return {
    error,
    isLoading,
    item
  }




}



