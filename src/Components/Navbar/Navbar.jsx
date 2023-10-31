import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { images } from '../../Constants';
const types = [
  "full",
  "open",
  "modular",
  "half",
  "bicycle",
  "children",
  "accessorie"
];

const MenuProductCategories = () => (
  <>
    <p>
      <Link to="/product" className='menu-link' >All Products</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[0]}`} className='menu-link' >Full Face</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[1]}`} className='menu-link' >Open Face(3/4)</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[2]}`} className='menu-link' >Modular</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[3]}`} className='menu-link' >Half Helmet</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[4]}`} className='menu-link' >Bicycle Helmet</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[5]}`} className='menu-link' >Children's Helmet</Link>
    </p>
    <p>
      <Link to={`/product/category/${types[6]}`} className='menu-link' >Accessories</Link>
    </p>
  </>
)
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const [toggleMenuProduct, settoggleMenuProduct] = useState(false);
  const [togglesearch, settogglesearch] = useState(true);
  const [togleImage, settogleImage] = useState(true);

  // scroll navbar listener

  const location = useLocation();
  const [scrollNavbar, setscrollNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrollNavbar) {
        setscrollNavbar(true);
      } else if (window.scrollY === 0 && scrollNavbar) {
        setscrollNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollNavbar]);
  const IconNavbarStyle = {
    backgroundColor: scrollNavbar ? '#f6f1eb' : 'transparent',
    // transition: 'background-color 0.1s',
    color: scrollNavbar ? 'rgb(66, 48, 42)' : 'white'
  };
  const combineStyle = {
    ...IconNavbarStyle,
    backgroundColor: location.pathname === '/' || location.pathname === '/home'
      ? (IconNavbarStyle.backgroundColor) : '#f6f1eb',
    color: location.pathname === '/' || location.pathname === '/home'
      ? (IconNavbarStyle.color) : 'rgb(66, 48, 42)'
  };
  return (
    <div className='helmerts-navbar-app-region' style={combineStyle}>
      <div className='navbar-search-logo_logo'>
        <img src={images.helmerts_high_resolution_logo_transparent} alt="logo" />
      </div>
      <div className='navbar-search-logo_logo'>
        <Link to="/" className='navbar-search-logo_link'>
        </Link>
      </div>

      <div className='helmerts-navbar-app-region-navbar'>

        <div className='navbar-icons'>
          <div className='navbar-icons-svg' >
            {toggleMenu
              ? <AiOutlineMenu />
              : <AiOutlineMenu style={combineStyle} onClick={() => settoggleMenu(true) & settogglesearch(true)} />
            }
            {toggleMenu &&
              <div className='navbar-icons-svg-content fall-in-left'>
                <div className='navbar-icons-svg-content_svg'>
                  <AiOutlineClose onClick={() => settoggleMenu(false) & settoggleMenuProduct(false)} />

                </div>
                <div className='navbar-icons-svg-content_content'>
                  <p>
                    <Link to="/home" className='menu-link' onClick={() => settoggleMenu(false)}>Home</Link>
                  </p>
                  <div className='menu-product'>
                    <div className='menu-product-title'>
                      <span className='menu-link'>Helmet Catefories</span>
                      {toggleMenuProduct
                        ? <AiOutlineUp style={{ 'width': '20px' }} onClick={() => settoggleMenuProduct(false)} />
                        : <AiOutlineDown style={{ 'width': '20px' }} onClick={() => settoggleMenuProduct(true)} />
                      }
                    </div>
                    {
                      toggleMenuProduct &&
                      <div className='menu-product-catergory-content scale-up-center' onClick={() => settoggleMenu(false) & settoggleMenuProduct(false)}>
                        <MenuProductCategories />
                      </div>
                    }
                  </div>
                  <p>
                    <Link to="/introduce" className='menu-link' onClick={() => settoggleMenu(false)}>Introduce</Link>
                  </p>
                  <p>
                    <Link to="/information" className='menu-link' onClick={() => settoggleMenu(false)}>Information</Link>
                  </p>
                  <p>
                    <a href="#footer" className='menu-link' onClick={() => settoggleMenu(false)}>Contact</a>
                  </p>
                </div>
              </div>

            }
          </div>
          <div className='navbar-icons-h'>
            {toggleMenu
              ? <h1 >Menu</h1>
              : <h1 style={combineStyle} onClick={() => settoggleMenu(true)}>Menu</h1>

            }

          </div>
        </div>
        <div className='navbar-search-logo'>
          <div className='navbar-search-logo_search'>
            {togglesearch
              ? <AiOutlineSearch style={combineStyle} onClick={() => settogglesearch(false)} />

              : <div />

            }

            {togglesearch
              ? <div />

              : <input type="text" className='scale-up-center ' placeholder='Search' />

            }
            {togglesearch
              ? <div />

              : <AiOutlineClose className='scale-up-center close_search' onClick={() => settogglesearch(true)} />

            }

          </div>

        </div>
        <div className='navbar-account-cart'>
          <Link to="/account" className='text-decoration'>
            <div className='navbar-account-cart_account'>
              <BsFillPersonFill style={combineStyle} />
              <h1 style={combineStyle}>Account</h1>
            </div>
          </Link>
          <Link to="/cart" className='text-decoration'>
            <div className='navbar-account-cart_cart'>
              <AiOutlineShoppingCart style={combineStyle} />
              <h1 className='text-decoration' style={combineStyle}>Cart</h1>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar