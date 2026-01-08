import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "./api";
import { Link } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function ProductDetail({ onAddToCart }) {
    const { id } = useParams();
const[product,setProduct]=useState();
const[count,setCount]=useState(1);

   useEffect(function(){
    const p=getProductData(id);
    p.then(function(product){
    setProduct(product);
    })
   },[id]
)



function handleCount(e){
    setCount(+(e.target.value));
}
function onButtonclick(){
    onAddToCart(product.id,count);
}
   
if(!product){
    return <div className="text-indigo-500 text-3xl">Loading...</div>
}

    return (
        <>
        <div className="w-80 p-4">
            <img src={product.thumbnail} alt={product.title} className="w-full mb-4" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">ID: {product.id}</p>
            <input type="number" value={count} onChange={handleCount} className="border border-blue-500 rounded-xl"/>
            <button  onClick={onButtonclick} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded">Add to Cart</button>
            <div className="flex justify-between mt-4">
                <div>{id>1 &&
                    (<Link className="flex items-center" to={"/products/" + (parseInt(id)-1)}><HiArrowSmLeft className="text-2xl"/>Previous</Link>)}
                </div>
                <div>
                    <Link className="flex items-center" to={"/products/" + (parseInt(id)+1)}>Next<HiArrowSmRight className="text-2xl"/></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductDetail;