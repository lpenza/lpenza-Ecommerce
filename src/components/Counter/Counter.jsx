import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = ({ stock, onAdd }) => {
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
    <div className="grid" style={{display:'flex', alignItems:'center',gap:'1rem'}}>
      <Button onClick={handleSubstract}> - </Button>
      <span>{contador}</span>
      <Button onClick={handleAdd}> + </Button>
      <Button
        onClick={() => {
          if (contador) onAdd(contador);
        }}
        disabled={!contador}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;