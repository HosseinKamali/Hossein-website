
import { useAppContext } from "../../context/appContex/AppContext";
import ShoppingCartItemOne from "../../components/ShopingCartItemOne/ShoppingCartItemOne";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import { useSizeContext } from "../../context/sizeContext/SizeContext";


const ShoppingCart = () => {
  const { cartItem,totalPrice } = useAppContext();
  
  const{cartItems}=useSizeContext()

 
  return (
    <>
      <div className="container mx-auto mb-28">
        <h1 className="font-bold text-4xl my-10">Card</h1>
        <div className="flex flex-col justify-center">
          {
            cartItem?.map(item =>(
              <ShoppingCartItem key={item.id} {...item}/>
              
            ))
          }
          {
            cartItems?.map(item=>(
              <ShoppingCartItemOne key={item.id} {...item}/>
            ))
          }

          <div className="bg-gray-100 fixed right-16 top-44 w-[30%] px-5 h-[265px] py-5 rounded-xl">
            <h3 className="text-2xl mt-4 ml-5 font-bold">Cart totals</h3>
            <div className="flex mt-9 justify-center mb-3">
              <p className="mr-7 font-semibold">Subtotal</p>
              <p>{totalPrice} € </p>
            </div>
            <hr />

            <div className="flex justify-center mt-3 mb-5">
              <p className="mr-7 font-semibold">Total</p>
              <p>{totalPrice}  €</p>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-center rounded-xl py-2 px-16 text-slate-50 text-xl font-semibold">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
