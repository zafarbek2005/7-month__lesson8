import React from 'react';
import { IoMdHeart } from 'react-icons/io';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import './Cart.scss';

const Cart = ({ productData }) => {
  const addToCart = (item) => {
    // Functionality to add item to cart
    console.log('Adding to cart:', item);
  };

  const increasePopulation = (item) => {
    // Functionality to increase population
    console.log('Increasing population of:', item);
  };

  const productItems = productData?.products?.map((item) => (
    <div className="Products" key={item.id}>
      <div className="card">
        <div className="card_all">
          <IoMdHeart onClick={() => increasePopulation(item)} /> <br />
        </div>
        <div className="card_all">
          <FaShoppingCart onClick={() => addToCart(item)} />
        </div>
      </div>
      <div className="Products_all">
        <div className="all_img">
          <img src={item.images[0]} alt="" />
        </div>
        <div className="all_img">
          <img src={item.images[1]} alt="" />
        </div>
      </div>
      <p>{item.title}</p> {/* Assuming item.title contains product name */}
      <div className="star">
        <div className="star_all">
          <FaStar />
        </div>
        <div className="star_all">
          <p>4.9</p> {/* Assuming the rating is fixed */}
        </div> 
      
      </div>
      <h4>{item.price} UZS</h4> {/* Assuming item.price contains product price */}
    </div>
  ));

  return <div className="container wrapper">{productItems}</div>;
};

export default Cart;
