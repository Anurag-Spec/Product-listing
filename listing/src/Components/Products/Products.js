import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="main">
      <div className="Filter">
        <div>
          <h5>
            Filters
            <button className="clear">Clear all</button>
          </h5>
          <div>
            <div>Size</div>
            {data.map((item) => (
              <li type="checkbox">{item.price}</li>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4>Categories</h4>
        <div className="productList">
          {data?.map((product) => (
            <div>
              <div class="card-container">
                <div class="long-cards">
                  <img
                    className="productImage"
                    src={product.image}
                    alt={product.title}
                  />
                  <p class="card-text">{product.title}</p>
                  <p>
                    <span className="price">Price:</span> {product.price}
                  </p>
                  <img
                    className="assured"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                    alt="assured icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
