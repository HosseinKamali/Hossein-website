import { RiShoppingBasketLine } from "react-icons/ri";

const ButtonShop = ({qty,isDark}) => {
    return ( 
        <button>
              {qty !== 0 && (
              <span className="absolute bg-red-700 text-slate-50 flex justify-center items-center rounded-full w-6 h-6 font-semibold text-xs -top-4 -right-2">
                {qty}
              </span>
            )}
            <RiShoppingBasketLine size={30} className={isDark ? 'text-slate-100' : 'text-slate-950'} />
          
        </button>
     );
}
 
export default ButtonShop;