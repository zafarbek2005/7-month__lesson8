import { BsFillCartPlusFill } from "react-icons/bs"; 
import React from 'react';
import { IoMdHeart } from 'react-icons/io';
import './Cart.scss';
import useCartStore from '../../Context/CartStore'; // Ensure this path matches your file structure
import useWishlistStore from '../../Context/wishStore'; // Ensure this path matches your file structure

const Cart = ({ productData }) => {
  const addToCartStore = useCartStore((state) => state.addToCart);
  const toggleWishlistItem = useWishlistStore((state) => state.toggleWishlistItem);

  const addToCart = (item) => {
    addToCartStore(item);
    console.log('Adding to cart:', item);
  };


  const productItems = productData?.products?.map((item) => (
    <div className="wrapper__cart" key={item.id}>
      <div className="cart__shadow">
        <img src={item.images[0]} alt={item.title} />
        <div className="wishes">
          <button onClick={() => toggleWishlistItem(item)}><IoMdHeart /></button>
          <button onClick={() => addToCart(item)}><BsFillCartPlusFill /></button>
        </div>
        <div className="prise">
          <h3>{item.title}</h3>
          <p>{item.price} UZS</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container wrapper">
      {productItems}
    </div>
  );
};

export default Cart;
