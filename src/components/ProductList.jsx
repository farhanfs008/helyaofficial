// src/features/products/ProductList.jsx
import ProductCard from "./ProductCard";

// Menggunakan Arrow Function (const)
const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-gray-500 text-xl mt-10">
        Tidak ada souvenir yang tersedia saat ini.
      </p>
    );
  }

  return (
    <div className="flex-wrap justify-center gap-y-6 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;