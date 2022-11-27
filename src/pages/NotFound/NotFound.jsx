import './NotFound.css';
import { Link } from 'react-router-dom';
import Imag from './img/prod.png';

export const NotFound = (isProduct) => {
  return (
    <>
      {isProduct ? (
        <>
          <img src={Imag} alt="" />
          <div>Parece que esta página no existe</div>
          <Link to="/" className="goToHome">
            Home
          </Link>
        </>
      ) : (
        <>
          <h1>404</h1>
          <div className="cloak__wrapper">
            <div className="cloak__container">
              <div className="cloak"></div>
            </div>
          </div>
          <div className="info">
            <h2>We can't find that page</h2>
            <p>
              We're fairly sure that page used to be here, but seems to have
              gone missing. We do apologise on it's behalf.
            </p>
            <Link to="/" className="goToHome">
              Home
            </Link>
          </div>
        </>
      )}
    </>
  );
};
