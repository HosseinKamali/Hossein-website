// Shop2.jsx
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Container from "../../components/container/Container";
import { useSearchContext } from "../../context/searchContext/SearchContext";
import SearchProduct from "../../components/searchProduct/SearchProduct";

const Shop2 = () => {
  const { filteredProducts } = useSearchContext();

  return (
    <>
      <SearchProduct />
      <Container>
        <div>
          <div
            className={`flex flex-wrap mt-36 my-20 ${
              filteredProducts.length > 0 ? "justify-between" : "justify-center"
            }`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={`/product2/${product.id}`} key={product.id} className="w-[23%]">
                  <ProductCard {...product} />
                </Link>
              ))
            ) : (
              <p className="text-2xl font-semibold text-gray-500 mt-48">NO PRODUCTS</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop2;
