import { useState } from "react";

const sizes = ["S", "M", "L", "XL"];

const PostStyle = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`p-3 border-2 transition-colors duration-300 ${
              selectedSize === size ? "bg-sky-400" : "bg-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        className={`mt-4 px-5 py-2 text-white transition-colors duration-300 ${
          selectedSize ? "bg-sky-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!selectedSize}
      >
        Select Item
      </button>
    </div>
  );
};

export default PostStyle;
