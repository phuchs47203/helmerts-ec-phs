import React, { useEffect, useState } from 'react'
import './Product.css'
import { AiOutlineDown, AiOutlineUp, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CTA, OneProduct, SliderPresent } from '../../Components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const Product = () => {
  const [toggleAll, settoggleAll] = useState(false);
  const [toggleCat, settoggleCat] = useState(false);
  const [toggleSort, settoggleSort] = useState(false);
  const [loading, setLoading] = useState(true);
  const URL_SERVER = "http://localhost:8000/api/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // useDispatch
    const fetchData = () => {
      setLoading(false);
      const response = axios
        .get(URL_SERVER)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div id='product' className='app-helmerts-product'>
      {/* <div className='slide'>
        <SliderPresent />
      </div> */}
      <div className='app-helmerts-product_heading'>
        this is heading, introduce
      </div>
      <div className='app-helmerts-product_filter'>
        <div className='app-helmerts-product_filter_left'>
          <div className='app-helmerts-product_filter-all '>
            <div className='app-helmerts-product_filter-all_title'>
              {toggleAll
                ? <p onClick={() => settoggleAll(false)} >All</p>
                : <p onClick={() => settoggleAll(true) & settoggleCat(false) & settoggleSort(false)} >All</p>
              }
              {toggleAll
                ? <AiOutlineUp onClick={() => settoggleAll(false)} />
                : <AiOutlineDown onClick={() => settoggleAll(true) & settoggleCat(false) & settoggleSort(false)} />
              }
            </div>
            <div className='app-helmerts-product_filter-all_content'>
              {toggleAll &&
                <div className='app-helmerts-product_filter-all_content-list'>
                  <p>All</p>
                  <p>Hot</p>
                  <p>Flash sale</p>

                </div>
              }
            </div>
          </div>
          <div className='app-helmerts-product_filter-category'>
            <div className='app-helmerts-product_filter-category_title'>
              {toggleCat
                ? <p onClick={() => settoggleCat(false)} >Category</p>
                : <p onClick={() => settoggleCat(true) & settoggleAll(false) & settoggleSort(false)} >Category</p>
              }
              {toggleCat
                ? <AiOutlineUp onClick={() => settoggleCat(false)} />
                : <AiOutlineDown onClick={() => settoggleCat(true) & settoggleAll(false) & settoggleSort(false)} />
              }
            </div>
            <div className='app-helmerts-product_filter-category_content'>
              {toggleCat &&
                <div className='app-helmerts-product_filter-category_content-list'>
                  <p>Category</p>
                  <p>Full Face</p>
                  <p>Open Face</p>
                  <p>Modular</p>
                  <p>Half Face</p>
                  <p>Bicycle Helmet</p>
                  <p>Children's Helmet</p>
                  <p>Accessories</p>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='app-helmerts-product_filter_right'>
          <div className='app-helmerts-product_filter-sort'>
            <div className='app-helmerts-product_filter-sort_title'>
              {toggleSort
                ? <p onClick={() => settoggleSort(false)} >Sort by</p>
                : <p onClick={() => settoggleSort(true) & settoggleAll(false) & settoggleCat(false)} >Sort by</p>
              }
              {toggleSort
                ? <AiOutlineUp onClick={() => settoggleSort(false)} />
                : <AiOutlineDown onClick={() => settoggleSort(true) & settoggleAll(false) & settoggleCat(false)} />
              }
            </div>
            <div className='app-helmerts-product_filter-sort_content'>
              {toggleSort &&
                <div className='app-helmerts-product_filter-sort_content-list'>
                  <p>Default</p>
                  <p>Lowest price</p>
                  <p>Highest price</p>
                  <p>Newest</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='app-helmerts-product_list'>
        {loading &&
          <div className='app-helmerts-product_list-content'>
            {products.map((product) => (
              <OneProduct product={product} key={product.id} />
            ))
            }
          </div>

        }
      </div>

      <div className='app-helmerts-product_load-more'>
        <button>
          Load more items
        </button>
      </div>

    </div>
  )
}

export default Product