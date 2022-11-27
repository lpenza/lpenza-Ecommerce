import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { Button, Form } from 'react-bootstrap';
import { addOrder } from '../api/orders';
import { updateManyProducts } from '../api/products';
import { EmptyCart } from '../components/EmptyCart/EmptyCart';
import { useEffect } from 'react';
import swal from 'sweetalert';

export const Cart = () => {
  const { getTotal, cart, emptyCart } = useCartContext();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [orderId, setOrderId] = useState('');


  const today = new Date();
  const now = today.toLocaleDateString('en-US');


  const handleForm = () => {
    let valido =
      name != '' &&
      phone != '' &&
      email != '' &&
      email === confirmarEmail &&
      confirmarEmail != '';
    setFormValid(valido);
  };

  useEffect(() => {
    handleForm();
  }, [name, phone, email, confirmarEmail]);

  const createOrder = async () => {
    const items = cart.map(({ id, nombre, qty, precio }) => ({
      id,
      nombre: nombre,
      qty,
      precio: precio,
    }));
   
    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotal(),
      date:now,
    };

    const id = await addOrder(order);
    if (id) {
      console.log(id);
      setOrderId(id);
      
    }

    await updateManyProducts(items);

    emptyCart();
  };

  return cart.length !== 0 && orderId === '' ? (
    <div className="content padre">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            isInvalid={!name}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            isInvalid={!phone}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            {email !== confirmarEmail && email !== '' && confirmarEmail !== ''
              ? 'Please check'
              : ''}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder={confirmarEmail === '' ? 'Confirm Email' : ''}
            onChange={(e) => setConfirmarEmail(e.target.value)}
            isInvalid={!email || email !== confirmarEmail}
          />
        </Form.Group>
      </Form>
      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            gap: 50,
            height: 100,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontWeight: 600 }}>{product.nombre}</div>
          <div>Cantidad : {product.qty}</div>
        </div>
      ))}
      <span
        style={{
          marginBottom: 50,
          textAlign: 'right',
          width: '100%',
          fontSize: 20,
          fontWeight: 600,
          display: 'block',
        }}
      >
        ${getTotal()}
      </span>
      <Button
        variant="primary"
        type="submit"
        disabled={!formValid}
        onClick={createOrder}
      >
        Buy
      </Button>
    </div>
  ) : orderId !== '' ? (
    swal(
      'Thanks for your purchase',
      `Your order number is:${orderId}`,
      'success'
    )
  ) : (
    <EmptyCart />
  );
};
