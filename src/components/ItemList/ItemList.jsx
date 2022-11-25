import './styles.css';
import { Card } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const ItemList = ({ oneProduct }) => {
  const {id,categoria,imagen,precio,nombre}=oneProduct
  const { addProduct } = useCartContext();
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="cardCustom"
        key={oneProduct.id}
        onClick={() => navigate(`/product/${oneProduct.id}`)}
      >
        <div className="cardImg">
          <img src={oneProduct.imagen} alt={oneProduct.description} />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="">{oneProduct.categoria}</p>
            <p className="small text-success">
              <s>${oneProduct.precio}</s>
            </p>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0 cardTitle">{oneProduct.nombre}</h5>
            <h5 className="text-success mb-0">${oneProduct.precio}</h5>
          </div>
          <div className="d-flex justify-content-between cardFooter ">
            <p className="text-muted mb-2 stock">
              {/* <span className="fw-bold">Stock:{oneProduct.rating.count}</span> */}
              {/* <CartWidget className="boton" onClick={()=>alert('hola')} /> */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addProduct({ id, nombre, precio, categoria,imagen}, 1);
                }}
              >
                Comprar
              </button>
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ItemList;
