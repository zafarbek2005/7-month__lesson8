import { BiWinkSmile } from "react-icons/bi"; 
import React, { useState } from 'react';
import './Navbar.scss';
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaBookOpen, FaGripfire } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
import useCartStore from '../../Context/CartStore'; // Ensure the correct path

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [count, setCount] = useState(false);
  const cart = useCartStore(state => state.cart);

  function setFixd() {
    if (window.scrollY >= 10){
      setFix(true);
    } else {
      setFix(false);
    }
  }
  
  window.addEventListener('scroll', setFixd);

  return (
    <>
      <div className="container">
        <header className={fix ? 'header_link fixed' : 'header_link'}>
          <nav>
            <Link to={'/'}><h1>AliExprees</h1></Link>
            <ul className='Ul_link'>
              <li>
                <Link>
                  <FaBookOpen />
                  <span>Каталог</span>
                </Link>
              </li>
              <div className="sorch">
                <input type="text" placeholder='  Search' />
                <button>Search</button>
              </div>
              <li>
                <Link to={'/wishlist'}>
                  <IoMdHeart />
                  <span style={{paddingTop:"5px"}}>Избранное</span>
                </Link>
              </li>
              <li>
                <Link to={'/karzinka'}>
                  <FaShoppingCart  />
                  <span style={{paddingTop:"5px"}}>Корзинка ({cart.length})</span>
                </Link>
              </li>
              <li>
                <Link>
                <BiWinkSmile   style={{ color: '#FEAF01', }}/>
                  <span style={{paddingTop:"5px"}}>Войти</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hammasi">
            <div className="navbar_top">
              <div className="navbar_top_link">
                <span>Горящие товары</span>
                <FaGripfire />
              </div>
              <div className="navbar_top_link">
                <span>Одна цена</span>
              </div>
              <div className="nav_link"></div>
            </div>
            <div className="location">
              <div className={`iframe ${count ? "show" : ""}`}>
                <button onClick={() => setCount(!count)}>
                  <VscChromeClose />
                </button>
                <iframe
                  className='w-[600px] maps_logo ml-3 loa'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.817362823962!2d69.22519327636788!3d41.20395520735261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61002c970f39%3A0x9b6f92597f056858!2sSog&#39;lom%20Hayot!5e0!3m2!1suz!2s!4v1714398990201!5m2!1suz!2s"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="locat">
                <MdOutlineLocationOn onClick={() => setCount(!count)} />
                <span>Chilonzor Tumani</span>
              </div>
              <div className="locat">
                <span>RU</span>
              </div>
              <div className="locat">
                <span>UZS</span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
