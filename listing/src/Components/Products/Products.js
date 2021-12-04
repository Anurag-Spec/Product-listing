import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import List from "../../data.json"


function Products() {
  const [data, setData] = useState([]);
  const [brand, setBrand] =useState([]);
  const [sort, setSort] =useState("");
  const [size, setSize] = useState([]);
  const [suitable, setSuitable]= useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isSorted, setisSorted]= useState(false);
  

  const clearAll = ()=>{
    setSize([]);
    setBrand([]);
    setSuitable([]);
    setSort("")
  }

  
 
  useEffect(() => {
    if(sort === "High"){
      const sortedDatabyHigh = (data.sort(function (a, b) {
        return b.price - a.price;
      }));
      setSortedData(sortedDatabyHigh);
      setData(sortedData);
    }else if(sort === "Low"){
      const sortedDatabyLow = (data.sort(function (a, b) {
        return a.price - b.price;
      }));
      setSortedData(sortedDatabyLow)
      setData(setSortedData);
    }else if(sortedData === ""){
      setData(List)
    }
    setData(List);
    if(size.length > 0){
     setData(  data.filter((i) => size.includes(i.size[0])))
    }
    if(brand.length > 0){
     setData(  data.filter((i) => brand.includes(i.brand)))
    }
    if(suitable.length > 0){
      setData(data.filter((i)=> suitable.includes(i.Suitable)))
    }
  }, [sort,brand, size, suitable, isSorted, sortedData, data]);

  return (
    <div className="main">
      <div className="Filter">
        <div>
        <button onClick={clearAll}>Clear All</button>
        <div>
        Sort Products By:
        <div>
        <button onClick={()=>{setSort("High"); setisSorted(true)}}>High to Low</button>
        <button onClick={()=>{setSort("Low"); setisSorted(true)}}>Low to High</button>
        {isSorted && <button onClick={()=> window.location.reload()}>Clear Sort</button>}
        </div>
        </div>
          <h5>
            Filters
           
          </h5>
          <div>
            <div>Size</div>
            {[...new Set( data?.map((products)=>products.size[0]))].map(
              (option) => (
                <div>
                  <button
                    type="checkbox"
                    id="size"
                    name="size"
                    value="size"
                    onClick={() => {setSize([...size, option])}}>{option}
                  </button>
                  <label for="size"></label>
                </div>
              )
            )}
          </div>
           <div>
            <div>Brand</div>
            {[...new Set( data?.map((products)=>products.brand))].map(
              (option) => (
                <div>
                  <button
                    type="checkbox"
                    id="brand"
                    name="brand"
                    value="brand"
                    onClick={() => {setBrand([...brand, option])}}>{option}
                  </button>
                  <label for="brand"></label>
                </div>
              )
            )}
          </div>
          <div>
            <div>Suitable for</div>
            {[...new Set( data?.map((products)=>products.Suitable))].map(
              (option) => (
                <div>
                  <button
                    onClick={() => {setSuitable([...suitable, option])}}>{option}
                  </button>
                  <label for="suitable"></label>
                </div>
              )
            )}
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
