
import React,{useEffect, useState} from "react";
import "./index.css";

import ProductList from "./ProductList";
import {getProductList} from "./api"
import {NoMatching} from "./NoMatching"

function ProductListPage() {
const [productlist,setProductList]=useState([]);

  const [query, setQuery] = useState("");
  const [sort,setSort]=useState("default");

  useEffect(function(){
    const xyz =getProductList();
    xyz.then(function(products){
      setProductList(products);
    }
    )
  },[]);
 
let data=productlist.filter(function(item){
  return item.title.toLowerCase().includes(query.toLowerCase());
});
function handleChange(event){
  setQuery(event.target.value);
}
function handlSortChange(event){
 setSort(event.target.value);
}
if(sort==="name"){
  data.sort(function(a,b){
    if(a.title<b.title) return -1;
    if(a.title>b.title) return 1;
    return 0;
  });
}
else if(sort==="price"){
  data.sort(function(a,b){
    return a.price-b.price;
  });
}
  return<>
   <div className="p-2">
  <input type="text"
  value={query}
  placeholder="search" 
  onChange={handleChange}
  className="border p-1 rounded m-2"/>

  <select onChange={handlSortChange} value={sort} className="border p-1 rounded m-2">
    <option value="default">Default</option>
    <option value="name">Sort by Name</option>
    <option value="price">Sort by Price</option>
  </select>

  {data.length>0 && <ProductList   data={data} />}
   {data.length==0 && <NoMatching />}
  </div>
  </>;
}

export default ProductListPage;
  
 