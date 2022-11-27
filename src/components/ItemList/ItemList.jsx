import './styles.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';


const ItemList = ({ oneProduct }) => {
  const { id, categoria, imagen, precio, nombre } = oneProduct;
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
        <div className="card-body cardBody">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0 cardTitle">{oneProduct.nombre}</h5>
          </div>
          <p className="">{oneProduct.categoria}</p>
          <div className="d-flex justify-content-between">
            <p className="small text-success">
              <s>${oneProduct.precio}</s>
            </p>
            <h5 className="text-success mb-0">${oneProduct.precio}</h5>
          </div>
          <div className="d-flex justify-content-between cardFooter ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                addProduct({ id, nombre, precio, categoria, imagen }, 1);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ItemList;
