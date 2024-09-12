import { createContext, useContext, useEffect, useState } from "react";
import { getProducts2 } from "../../services/api";

const searchContext = createContext();

export const useSearchContext = () => {
  return useContext(searchContext);
};

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsOne, setProductsOne] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getProducts2()
      .then((result) => setProducts(result))
      .catch((error) => console.log(error));
  }, []); 

 


  const filteredProducts = products.filter((item) =>
    searchItem === ""
      ? true
      : item.category.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchItem(value);

    const filteredSuggestions = [...new Set(
      products.map((item) => item.category)
        .filter((category) => category.toLowerCase().startsWith(value.toLowerCase()))
    )];
    setSuggestions(filteredSuggestions);
  };

  const handleOnBlur = () => {
    setSuggestions([]);
  };

  const selectSuggestion = (suggestion) => {
    setSearchItem(suggestion);
    setSuggestions([]);
  };

  return (
    <searchContext.Provider
      value={{
        products,
        setProducts,
        searchItem,
        setSearchItem,
        suggestions,
        setSuggestions,
        filteredProducts,
        handleSearch,
        handleOnBlur,
        selectSuggestion
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
