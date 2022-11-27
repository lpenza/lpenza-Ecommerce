import React from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import './styles.css';


const ItemListContainer = ({ products, isLoading }) => {
  return (
    <>
      {isLoading ? <Spinner /> : null}
      <div className="list">
        {products.map((oneProduct, index) => (
          <ItemList oneProduct={oneProduct} key={index} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
