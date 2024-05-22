import React from 'react';
import useCartStore from '../Context/CartStore'; // Ensure the correct path
import './Cartlink.scss'

const Karzenka = () => {
  const { cart, removeFromCart, decrementCart, addToCart } = useCartStore();
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
                  <button onClick={() => removeFromCart(product.id)}>remove</button>
                </div>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total: <span className="total-price">$99.99</span></p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Karzenka;
