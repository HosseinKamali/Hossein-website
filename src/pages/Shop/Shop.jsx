import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";



const Shop = () => {
  const [products, setProducts] = useState([]);
 
  
  
  
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div>
      
      <div className="flex justify-center mt-36 ">
        <input 
        type="text"
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
        placeholder="...search"
        className="border-4 p-2 rounded-lg"
         />
      </div>
  <div className="flex flex-wrap justify-between items-center mt-32 container mx-auto">
      
      {Products?.map((item) => (
        <Link className="w-[23%] mb-16" key={item.id} to={`/product/${item.id}`}>
          <ProductCard {...item} />
        </Link>
      ))}
    
  </div>
    </div>
   
    
   
  );
};

export default Shop;
