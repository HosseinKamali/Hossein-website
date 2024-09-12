import { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "../../hook/localStorage/useLocalstorage";
import { useNavigate } from "react-router-dom";

// Create the App context
const AppContext = createContext();

// Custom hook for using the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};

// AppProvider component to wrap around the application
export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);
  const [showLogin,setShowLogin]=useState(false)
  const [isLoginItem, setIsLoginItem] = useState(false);
  const [visibleItem, setVisibleItem] = useState(8);
  const [cartItem, setCartItem] = useLocalStorage("cartItem", []);
  const navigat = useNavigate()



  // Toggle dark mode
  const handleIsDark = () => {
    setIsDark(prev => !prev);
  };

  // Set login status to true
  const handleIsLogin = () => {
    setIsLogin(true);
    navigat("/")
  };
  const handleIsLogOut=()=>{
    setIsLogin(false)
  }
  const handleIsShowLogin=()=>{
   setShowLogin(true)
  }

  const handleIsCloseLogin=()=>{
    setShowLogin(false)
  }
  // Handle visibility of items
  const handleVisibleItem = () => {
    setIsLoginItem(true);

    setTimeout(() => {
      setVisibleItem(prev => prev + 4);
      setIsLoginItem(false);
    }, 1000);
  };

  // Increase product quantity in the cart
  const handleIncreaseProductQty = (id, price ) => {
    setCartItem(currentItems => {
      const selectedItem = currentItems.find(item => item.id === id);
      if (selectedItem == null) {
        return [...currentItems, { id, qty: 1, price  }];
      } else {
        return currentItems.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  };

  // Decrease product quantity in the cart
  const handleDecreaseProductQty = (id) => {
    setCartItem(currentItems => {
      const selectedItem = currentItems.find(item => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter(item => item.id !== id);
      } else {
        return currentItems.map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  };

  // Get product quantity in the cart
  const getProductQty = (id) => {
    return cartItem.find(item => item.id === id)?.qty || 0;
  };

  // Remove product from the cart
  const handleRemoveProduct = (id) => {
    setCartItem(currentItems => currentItems.filter(item => item.id !== id));
  };

  // Calculate total quantity of items in the cart
  const cartQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);

  // Calculate total price of items in the cart
  const totalPrice = parseFloat(cartItem.reduce(
    (totalPrice, item) => totalPrice + item.price * item.qty,
    0
  )).toFixed(2);

  return (
    <AppContext.Provider
      value={{
        isDark,
        handleIsDark,
        isLogin,
        handleIsLogin,
        handleIsLogOut,
        showLogin,
        handleIsShowLogin,
        handleIsCloseLogin,
        isLoginItem,
        visibleItem,
        handleVisibleItem,
        cartItem,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        totalPrice
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
