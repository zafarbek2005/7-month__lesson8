import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import useCartStore from '../Context/CartStore'; // Ensure the correct path
import './Cartlink.scss';

const Karzenka = () => {
  const { cart, removeFromCart, decrementCart, addToCart } = useCartStore();

  const handleRemoveClick = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to remove this item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4747',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId);
        Swal.fire(
          'Removed!',
          'The item has been removed from your cart.',
          'success'
        );
      }
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    return total;
  };

  useEffect(() => {
    const total = calculateTotal();
    console.log(`Total cart value: $${total}`);
  }, [cart]);

  return (
    <div className="karzenka-container">
      {cart.length === 0 ? (
        <p>Корзинка пуста</p>
      ) : (
        <div className="cart-items">
          <h2>Shopping Cart</h2>
          {cart.map(product => (
            <div className="cart-item" key={product.id}>
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-quantity">
                  <button className="quantity-btn" onClick={() => decrementCart(product)} disabled={product.quantity === 1}>-</button>
                  <input type="text" value={product.quantity} className="quantity-input" readOnly />
                  <button className="quantity-btn" onClick={() => addToCart(product)}>+</button>
                  <button className="remove-btn" onClick={() => handleRemoveClick(product.id)}>Remove</button>
                </div>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total: <span className="total-price">${calculateTotal()}</span></p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Karzenka;
