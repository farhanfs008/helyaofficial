import ProductList from './ProductList';
import souvenirs from '../data/souvenirs';
import { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulasikan pengambilan data dari API
    const fetchProducts = () => {
      setLoading(true);
      setError(null);
      try {
        setTimeout(() => {
          setProducts(souvenirs); 
          setLoading(false);
        }, 1000); // Penundaan 1 detik
      } catch (err) {
        setError('Gagal memuat data souvenir.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-xl p-10 text-gray-700">
        <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-pink-500 rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-3">Memuat souvenir...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 text-red-600 font-bold bg-red-50">
        {error}
      </div>
    );
  }

  return (
    <div className="mx-auto py-8" id="produk" >
      <div className="flex flex-col items-center justify-center py-16 bg-white">
      {/* Tombol "Katalog Produk" */}
      <div className="mb-4">
        <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition duration-300 ease-in-out shadow-md"style={{ backgroundImage: 'linear-gradient(to right, #ff5f6d 0%, #ff9500 100%)', }}
        >
          Katalog Produk
        </button>
      </div>

      {/* Judul "Pilihan Souvenir Terbaik Kami" */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center leading-tight">
        {/* Bagian berwarna gradient (inline style untuk gradient text) */}
        <span 
          className="inline-block"
          style={{
            backgroundImage: 'linear-gradient(to right, #ff5f6d 0%, #ff9500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent', // Fallback
          }}
        >
          Pilihan Souvenir
        </span>
        {/* Bagian berwarna gelap */}
        <span className="text-gray-800">
          {' '}Terbaik Kami
        </span>
      </h2>

      {/* Subteks */}
      <p className="text-base sm:text-lg text-gray-600 text-center md:max-w-md lg:max-w-6xl">
        Berbagai pilihan souvenir pernikahan berkualitas premium dengan harga terjangkau
      </p>
    </div>
      <ProductList products={products} />
      {/* Teks Baris Pertama */}
      <p className="text-lg text-gray-600 mb-2 text-center">
        Tidak menemukan yang Anda cari?
      </p>

      {/* Teks Baris Kedua */}
      <p className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
        Kami melayani 
        {/* 'custom request' berwarna merah */}
        <span className="text-red-600">
          {' '}custom request{' '}
        </span>
        sesuai kebutuhan Anda!
      </p>
    </div>
  );
};

export default ProductsPage;