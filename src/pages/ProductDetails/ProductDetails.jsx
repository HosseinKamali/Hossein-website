import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import { useAppContext } from "../../context/appContex/AppContext";
import RemoveButton from "../../components/removeButton/RemoveButton";
import IncrementButton from "../../components/incrementButton/IncrementButton";
import DecrementButton from "../../components/decrementButton/DecrementButton";


const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct
  } = useAppContext();
  

  useEffect(() => {
    getProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, [params.id]);

  return (

    <div className="flex container mx-auto">
      <div className="mr-56">
        <img src={product?.image} alt="" />
      </div>

      <div className="flex flex-col " >
        <h4 className="font-bold text-4xl">{product?.category}</h4>
        <span className="border-4 border-green-600 text-center mt-10 w-32 py-2 rounded-2xl font-semibold text-xl">
          {product?.price}$
        </span>
        <p className="mb-10 mt-10">This is a simple product.</p>
        <div className="flex">
            {getProductQty(params.id) === 0 ? 
              <button
              onClick={() => handleIncreaseProductQty(params.id,product.price)}
              className="bg-blue-600 px-28 py-2 text-xl text-slate-50 font-semibold rounded-2xl">
              add to cart
            </button>  :
            <>
              <div className="flex items-center">

           <DecrementButton id={params.id} onClick={handleDecreaseProductQty} getProductQty={getProductQty}/>

            <span className="felx justify-center items-center font-semibold">{getProductQty(params.id)}</span>
           <IncrementButton id={params.id} onClick={handleIncreaseProductQty}/>
            </div>
           <RemoveButton id={params.id} onClick={handleRemoveProduct}/>



            </>
          
            

          }

        

       
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
