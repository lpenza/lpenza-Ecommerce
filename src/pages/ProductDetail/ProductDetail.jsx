import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CartWidget from '../../components/CartWidget/CartWidget';
import Spinner from '../../components/Spinner/Spinner';
import './ProductDetail.css';
import { NotFound } from '../NotFound/NotFound';
import { useProducts } from "../../hooks/useProducts";
import  Counter  from '../../components/Counter/Counter';
import { useCartContext } from "../../context/cartContext";
import { getProduct } from '../../api/products';

export const ProductDetail = () => {
  const { addProduct } = useCartContext();
  const { productId } = useParams();
  const {item,isLoading,error}=useProducts(2,productId)
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);
  
  const handleAdd = (qty) => {
    addProduct(product, qty);
  };
  
  return (
    <>
      {item.length===0 && error ? (
        <NotFound />
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="container">
              <div className="card">
                <div className="container-fliud">
                  <div className="wrapper row">
                    <div className="preview col-md-6">
                      <div className="preview-pic tab-content">
                        <div className="tab-pane active" id="pic-1">
                          <img src={item.imagen} alt={item.nombre} />
                        </div>
                      </div>
                      <ul className="preview-thumbnail nav nav-tabs">
                        <li className="active">
                          <img src={item.imagen} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.imagen} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.imagen} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.imagen} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.imagen} alt={item.title} />
                        </li>
                      </ul>
                    </div>
                    <div className="details col-md-6">
                      <h3 className="product-title">{item.nombre}</h3>
                      <p className="product-description">
                        {item.categoria}
                      </p>
                      <h4 className="price">
                        current price: <span>${item.precio}</span>
                      </h4>
                      <h5 className="sizes">
                        Category:
                        {item.categoria}
                      </h5>
                      <h5 className="colors">
                        Description:
                        {item.descripcion}
                      </h5>
                      <div className="action add-to-cart">
                        <Counter stock={item?.stock} onAdd={handleAdd} />
                        <button className="like btn btn-default" type="button">
                          <CartWidget />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
