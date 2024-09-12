import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { Link} from "react-router-dom";
import RemoveButton from "../removeButton/RemoveButton";
import DecrementButton from "../decrementButton/DecrementButton";
import IncrementButton from "../incrementButton/IncrementButton";
import { useAppContext } from "../../context/appContex/AppContext";



const ShoppingCartItem = ({id , qty}) => {
  const{handleIncreaseProductQty
    ,handleDecreaseProductQty
    ,getProductQty
    ,handleRemoveProduct}=useAppContext()
    const [product,setProuduct ] = useState([])

    


    useEffect(()=>{
        getProduct(id).then((data)=> setProuduct(data))
    },[])


  return (
    <div className="border-t-2 border-b-2 py-6 px-5  flex w-[65%]">
      <Link to={`/product/${id}`}>
      <img
        src={product?.image}
        alt=""
        className="max-w-48 rounded-2xl"
      />
      </Link>
      <div className="ml-5">
        <div className=" font-semibold text-lg mb-[108px] ">
          <h3 className="font-semibold text-xl mb-2">{product?.category}</h3>
          <span className="border-4 border-green-500 text-green-500 px-4 py-1 rounded-xl">
          {product?.price} $
          </span>
        </div>
        <p>Subtotal is € {product.price}</p>
      </div>

      <div className="flex items-start ml-44 ">
        <div className="flex justify-center items-center">

       <DecrementButton id={id} onClick={handleDecreaseProductQty} getProductQty={getProductQty}/>

          <p className="text-lg font-semibold">{qty}</p>

         <IncrementButton id={id} onClick={handleIncreaseProductQty} />
        </div>
        
            <RemoveButton id={id} onClick={handleRemoveProduct}/>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
