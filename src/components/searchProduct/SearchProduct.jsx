// SearchProduct.jsx
import { useSearchContext } from "../../context/searchContext/SearchContext";

const SearchProduct = () => {
  const { searchItem,
     handleSearch,
      suggestions,
       handleOnBlur,
        selectSuggestion } = useSearchContext();

  return (
    <div className="h-[400px] relative">
      <img
        className="w-full h-full object-cover"
        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2138922-2.jpeg"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-slate-50 w-[80%] h-[300px] flex justify-center flex-col items-center rounded-2xl shadow-lg">
        <h2 className="font-bold text-4xl mb-10">Shopping</h2>

        <div className="relative w-[60%] flex flex-col items-center">
          <input
            type="text"
            className="border-2 w-full rounded-3xl p-5 h-full outline-double outline-cyan-600 relative"
            value={searchItem}
            onChange={handleSearch}
            onBlur={handleOnBlur}
            placeholder="Search by category..."
          />

          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onMouseDown={() => selectSuggestion(suggestion)}
                  className="cursor-pointer hover:bg-gray-100 p-2"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
