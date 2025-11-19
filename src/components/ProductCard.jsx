// src/features/products/components/ProductCard.jsx

// Menggunakan Arrow Function (const)
const ProductCard = ({ product }) => {
  const { name, price, imageUrl, description } = product;

  return (
    <div className="w-full lg:max-w-sm md:mx-0 sm:mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img 
        className="w-full h-48 object-cover border-b border-gray-100" 
        src={imageUrl} 
        alt={name} 
      />
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {name}
        </h3>
        <p className="text-lg font-bold text-rose-600 mb-3">
          Rp {price.toLocaleString('id-ID')}
        </p>
        <p className="text-gray-500 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;