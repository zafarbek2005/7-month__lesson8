import React from 'react';
import useWishlistStore from '../Context/wishStore'; // Ensure the correct path
import './wishlink.scss';

const Wishlist = () => {
  const cart = useWishlistStore(state => state.wishlist);
  const toggleWishlistItem = useWishlistStore(state => state.toggleWishlistItem);

  return (
    <div className="wishlist-container " id='ty'>
      {cart.length === 0 ? (
        <img id='heart' src="https://t4.ftcdn.net/jpg/05/58/28/43/360_F_558284345_4D5NrsgO5PBwGiNGFV2xlOfg32DV6DNB.jpg" alt="" />
      ) : (
        <ul>
          {cart.map((item) => (
            <li className="wishlist-item" key={item.id}>
              <img src={item.images[0]} alt={item.title} className="wishlist-image" />
              <h2 className="wishlist-title">{item.title}</h2>
              <button className="wishlist-button" onClick={() => toggleWishlistItem(item)}>
                Remove from Wishlist
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
