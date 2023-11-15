import React, { useEffect } from 'react';
import { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { images } from '../../Constants';
import queryString from 'query-string';


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
      <a href="/product" className='menu-link' >All Products</a>
    </p>
    <p>
      <a href={`/product/category/${types[0]}`} className='menu-link' >Full Face</a>
    </p>
    <p>
      <a href={`/product/category/${types[1]}`} className='menu-link' >Open Face(3/4)</a>
    </p>
    <p>
      <a href={`/product/category/${types[2]}`} className='menu-link' >Modular</a>
    </p>
    <p>
      <a href={`/product/category/${types[3]}`} className='menu-link' >Half Helmet</a>
    </p>
    <p>
      <a href={`/product/category/${types[4]}`} className='menu-link' >Bicycle Helmet</a>
    </p>
    <p>
      <a href={`/product/category/${types[5]}`} className='menu-link' >Children's Helmet</a>
    </p>
    <p>
      <a href={`/product/category/${types[6]}`} className='menu-link' >Accessories</a>
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
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/home');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [keyword, setkeyword] = useState('');

  const data_Search = {
    cat_id: 0,
    sort: 0,
    all: 0,
    keyword: ''
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const data_Search = {
        cat_id: 0,
        sort: 0,
        all: 0,
        keyword: event.target.value,
      };
      const stringifyProductSearch = queryString.stringify(data_Search);
      settogglesearch(true);
      settogleImage(true);
      navigate(`/product-filter/${stringifyProductSearch}`);
      setkeyword('');
      window.location.reload();
    }
  };
  const handeChangeSearch = (e) => {
    data_Search.keyword = e.target.value;
    setkeyword(e.target.value);
  }

  return (
    <div className='helmerts-navbar-app-region' style={combineStyle}>

      <div className='helmerts-navbar-app-region-navbar'>
        <div className='helmerts-navbar-app-region-navbar-left'>
          <div className='helmerts-navbar-app-region-navbar-left-menu'>
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
                        {toggleMenuProduct
                          ? <div className='menu-product-title' onClick={() => settoggleMenuProduct(false)}>
                            <p className='menu-link' >Helmet Catefories</p>
                            <AiOutlineUp style={{ 'width': '20px' }} />
                          </div>
                          : <div className='menu-product-title' onClick={() => settoggleMenuProduct(true)}>
                            <p className='menu-link' >Helmet Catefories</p>
                            <AiOutlineDown style={{ 'width': '20px' }} />
                          </div>

                        }
                        {
                          toggleMenuProduct &&
                          <div className='menu-product-catergory-content scale-up-center' onClick={() => settoggleMenu(false) & settoggleMenuProduct(false)}>
                            <MenuProductCategories />
                          </div>
                        }
                      </div>
                      <p>
                        <Link to="/client-service" className='menu-link' onClick={() => settoggleMenu(false)}>Client Service</Link>
                      </p>
                      <p>
                        <Link to="/information" className='menu-link' onClick={() => settoggleMenu(false)}>Information</Link>
                      </p>
                      <p>
                        <a href="#footer" className='menu-link' onClick={() => settoggleMenu(false)}>Contact Us</a>
                      </p>
                      <p>
                        <Link to="/introduce" className='menu-link' onClick={() => settoggleMenu(false)}>About Helmerts</Link>
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
          </div>
          <div className='helmerts-navbar-app-region-navbar-left-search'>
            <div className='helmerts-navbar-app-region-navbar-left-search-column'>
              <div className='helmerts-navbar-app-region-navbar-left-search-logo'>
                {togglesearch
                  ? <AiOutlineSearch style={combineStyle} onClick={() => settogglesearch(false) & settogleImage(false)} />

                  : <AiOutlineSearch style={{ combineStyle, display: 'none' }} onClick={() => settogglesearch(false)} />

                }
              </div>
              <div className='helmerts-navbar-app-region-navbar-left-search-input'>
                {togglesearch
                  ? <div />

                  : <div className='helmerts-navbar-app-region-navbar-left-search-input-content'>
                    <input
                      type="text"
                      className='scale-up-center '
                      placeholder='Search'
                      value={keyword}
                      onChange={(e) => handeChangeSearch(e)}
                      onKeyPress={(e) => handleKeyPress(e)}
                    />
                    <AiOutlineClose className='scale-up-center close_search' onClick={() => settogglesearch(true) & settogleImage(true)} />
                  </div>

                }
              </div>
            </div>
          </div>
        </div>
        <div className='helmerts-navbar-app-region-navbar-center'>
          {togleImage &&
            <div className='navbar-search-logo_logo' onClick={() => handleHome()}>
              <Link className='navbar-search-logo_link'>
                <img src={images.helmerts_high_resolution_logo_transparent} alt="logo" />
              </Link>
            </div>

          }
        </div>
        <div className='helmerts-navbar-app-region-navbar-right'>
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
    </div>
  )
}

export default Navbar