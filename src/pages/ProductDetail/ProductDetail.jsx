import { useParams } from 'react-router-dom';
import CartWidget from '../../components/CartWidget/CartWidget';
import Spinner from '../../components/Spinner/Spinner';
import './ProductDetail.css';
import { NotFound } from '../NotFound/NotFound';
import { useProducts } from "../../hooks/useProducts";
import { Counter } from '../../components/Counter/Counter';

export const ProductDetail = () => {
  const { productId } = useParams();
  const {item,isLoading,error}=useProducts(2,productId)
  console.log(isLoading);
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
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                      <ul className="preview-thumbnail nav nav-tabs">
                        <li className="active">
                          <img src={item.image} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.image} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.image} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.image} alt={item.title} />
                        </li>
                        <li>
                          <img src={item.image} alt={item.title} />
                        </li>
                      </ul>
                    </div>
                    <div className="details col-md-6">
                      <h3 className="product-title">{item.title}</h3>
                      <p className="product-description">
                        {item.description}
                      </p>
                      <h4 className="price">
                        current price: <span>${item.price}</span>
                      </h4>
                      <h5 className="sizes">
                        Category:
                        {item.category}
                      </h5>
                      <h5 className="colors">
                        colors:
                        <span className="color orange"></span>
                        <span className="color green"></span>
                        <span className="color blue"></span>
                      </h5>
                      <div className="action add-to-cart">
                        <Counter stock={item.id} />
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
