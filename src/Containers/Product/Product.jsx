import React, { useEffect, useState, useRef, useCallback } from 'react'
import './Product.css'
import { AiOutlineDown, AiOutlineUp, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CTA, OneProduct, SliderPresent } from '../../Components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import queryString from 'query-string';

const Product = () => {


  const { productString } = useParams();
  const navigate = useNavigate();


  const [toggleAll, settoggleAll] = useState(false);
  const [toggleCat, settoggleCat] = useState(false);
  const [toggleSort, settoggleSort] = useState(false);
  const [loading, setLoading] = useState(true);
  const URL_SERVER = "http://localhost:8000/api/products";
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   // useDispatch
  //   const fetchData = () => {
  //     setLoading(false);
  //     const response = axios
  //       .get(URL_SERVER)
  //       .then((response) => {
  //         setProducts(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setLoading(true);
  //   };
  //   fetchData();
  // }, []);



  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(45);

  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setShowLoading(true);
        const response = await axios.get(`http://localhost:8000/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setShowLoading(false);
      }
    };

    fetchData();

  }, []);
  const data_filter = {
    cat_id: 5,
    sort: 2,
    all: 0,
    keyword: ''
  };
  useEffect(() => {
    if (products.length > visibleProducts) {
      setHasMore(true);
    }
  }, [products, visibleProducts]);

  const lastProductElementRef = useCallback(
    (node) => {
      if (loading || !hasMore || !node) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleShowMore = () => {
    const newVisibleProducts = visibleProducts + (products.length-45);

    // Kiểm tra xem đã hiển thị hết số lượng sản phẩm chưa, nếu có thì tắt nút "Show More"
    if (newVisibleProducts >= products.length) {
      setHasMore(false);
    }

    setVisibleProducts(newVisibleProducts);
  };

  const handleChangeAll = (e) => {
    const value = e.currentTarget.getAttribute("value");
    console.log(value);
    data_filter.all = value;
    const stringifyProduct = queryString.stringify(data_filter);
    navigate(`/product-filter/${stringifyProduct}`);
    window.location.reload();

  }
  const handleChangeCategory = (e) => {
    const value = e.currentTarget.getAttribute("value");
    console.log(value);
    data_filter.cat_id = value;
    const stringifyProduct = queryString.stringify(data_filter);
    navigate(`/product-filter/${stringifyProduct}`);
    window.location.reload();
  }
  const handleChangeSort = (e) => {
    const value = e.currentTarget.getAttribute("value");
    console.log(value);
    data_filter.sort = value;
    const stringifyProduct = queryString.stringify(data_filter);
    navigate(`/product-filter/${stringifyProduct}`);
    window.location.reload();
  }

  return (
    <div id='product' className='app-helmerts-product'>
      {/* <div className='slide'>
        <SliderPresent />
      </div> */}
      <div className='app-helmerts-product_heading'>
        <h1>
          Regardless of the field, challenge, terrain, interests, or personality, with HELMERTS you don't need to worry.
        </h1>
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
                  <p value={0} onClick={(e) => handleChangeAll(e)}>All</p>
                  <p value={1} onClick={(e) => handleChangeAll(e)}>Hot</p>
                  <p value={2} onClick={(e) => handleChangeAll(e)}>Flash sale</p>

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
                  <p value={0} onClick={(e) => handleChangeSort(e)}>Category</p>
                  <p value={1} onClick={(e) => handleChangeSort(e)}>Full Face</p>
                  <p value={2} onClick={(e) => handleChangeSort(e)}>Half Face</p>
                  <p value={3} onClick={(e) => handleChangeSort(e)}>Open Face</p>
                  <p value={4} onClick={(e) => handleChangeSort(e)}>Modular</p>
                  <p value={5} onClick={(e) => handleChangeSort(e)}>Bicycle Helmet</p>
                  <p value={6} onClick={(e) => handleChangeSort(e)}>Children's Helmet</p>
                  <p value={7} onClick={(e) => handleChangeSort(e)}>Accessories</p>
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
                  <p value={0} onClick={(e) => handleChangeCategory(e)}>Default</p>
                  <p value={1} onClick={(e) => handleChangeCategory(e)}>Lowest price</p>
                  <p value={2} onClick={(e) => handleChangeCategory(e)}>Highest price</p>
                  <p value={3} onClick={(e) => handleChangeCategory(e)}>Newest</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div className='app-helmerts-product_list'>
        {loading &&
          <div className='app-helmerts-product_list-content'>
            {products.map((product) => (
              <OneProduct product={product} key={product.id} />
            ))
            }
          </div>

        }
      </div> */}

      <div className='app-helmerts-product_list'>
        <div className='app-helmerts-product_list-content'>
          {products.slice(0, visibleProducts).map((product, index) => {
            const animationDelay = index * 0.1; // Tính toán độ trễ của hiệu ứng
            return (
              <div
                ref={index === products.length - 1 ? lastProductElementRef : null}
                key={product.id}
                style={{ animationDelay: `${animationDelay}s` }}
                className='product-item'
              >
                <OneProduct product={product} key={product.id} />
              </div>
            );
          })}
        </div>


      </div>


      {hasMore && (
        <div className='app-helmerts-product_load-more'>
          <button onClick={handleShowMore} disabled={loading}>
            Load more items
          </button>
        </div>
      )}



    </div>
  )
}

export default Product