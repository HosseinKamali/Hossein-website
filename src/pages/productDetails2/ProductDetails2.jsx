import { useEffect, useState } from "react";
import { getProduct2 } from "../../services/api";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useSizeContext } from "../../context/sizeContext/SizeContext";

const ProductDetails2 = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const {handleSelectSize,handleIncreasProductQty ,sizeitem} = useSizeContext()
  

  useEffect(() => {
    getProduct2(params.id).then((result) => setProduct(result));
  }, [params.id]);

  

  return (
    <Container>
      <div className="flex justify-around">
        <div>
          <img src={product?.image} alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-7">{product?.category}</h2>
          <p className="mb-16 border-4 border-green-600 w-24 text-center py-1 text-xl font-semibold rounded-xl ">{product?.price} $</p>
          
          <div className="flex justify-center mb-8">
          {
            product?.sizes.map((size) => <button key={size} className={`w-9 py-1 border-2 mr-3 font-semibold ${sizeitem === size  ? "bg-sky-400":""}`} 
            onClick={()=>handleSelectSize(size)}>{size}</button>)
          }
          </div>
          <button className={`min-w-60 rounded-xl py-2 border-2 ${sizeitem && "bg-sky-600"}`}
          onClick={()=>handleIncreasProductQty(params.id)}>add to cart</button>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails2;
