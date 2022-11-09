import './styles.css';
import { Card } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ oneProduct }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="cardCustom"
        key={oneProduct.id}
        onClick={() => navigate(`/product/${oneProduct.id}`)}
      >
        <div className="cardImg">
          <img src={oneProduct.image} alt={oneProduct.description} />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="">{oneProduct.category}</p>
            <p className="small text-success">
              <s>${oneProduct.price}</s>
            </p>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0 cardTitle">{oneProduct.title}</h5>
            <h5 className="text-success mb-0">${oneProduct.price}</h5>
          </div>
          <div className="d-flex justify-content-between cardFooter ">
            <p className="text-muted mb-2 stock">
              <span className="fw-bold">Stock:{oneProduct.rating.count}</span>
              <CartWidget className="boton" />
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ItemList;
