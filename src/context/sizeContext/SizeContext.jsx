import { createContext, useContext, useState } from "react";

const SizeContext = createContext();

export const useSizeContext = () => {
  return useContext(SizeContext);
};

export const SizeContextProvider = ({ children }) => {
  const [sizeitem, setSizeItem] = useState();
  const [cartItems, setCartItems] = useState([]);


  const handleSelectSize = (size) => {
    setSizeItem(size);
  };

 

  
  
  const handleIncreasProductQty=(id)=>{
    setCartItems(currentItems => {
        let selectItem = currentItems.find(item => item.id == id)
        if(selectItem == null){
            return [...currentItems , {id:id , qty : 1 , size : sizeitem}]
        }else{
           return currentItems.map(item => 
            item.id == id ? {...item , qty :item.qty + 1 }: item
        )
        }
        setSizeItem(null);
    })

  }
  const handleDecreaseProductQty=(id)=>{
    setCartItems(currentItems =>{
      let selectItems = currentItems.find(item => item.id == id)
      if(selectItems?.qty === 1){
       return currentItems.filter(item => item.id !== id)
      }else{
        return currentItems.map(item => item.id === id ? {...item , qty : item.qty - 1 }: item)
      }
    })

  }
  const handleRemoveProduct=(id)=>{
   setCartItems(currentItems => currentItems.filter(item => item.id !== id  )) 
  }

  const getProductQty = (id) => {
    return cartItems.find(item => item.id === id)?.qty || 0;
  };

  const cartQtyOne = cartItems.reduce((totalQty , item)=> totalQty + item.qty,0)

  return (
    <SizeContext.Provider
      value={{ cartItems,
        getProductQty, 
        handleSelectSize,
        sizeitem,
         handleIncreasProductQty,
         handleDecreaseProductQty,
         handleRemoveProduct,
         cartQtyOne
        }}
    >
      {children}
    </SizeContext.Provider>
  );
};


