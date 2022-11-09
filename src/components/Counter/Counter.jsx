import { useState } from 'react';
import  Button  from '../Button/Button';

export const Counter = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <>
      <div className="grid">
        <Button onClick={() => handleAdd()}> + </Button>
        <span style={{ minWidth: 25 }}>{contador}</span>
        <Button onClick={() => handleSubstract()}> - </Button>
      </div>
    </>
  );
};
