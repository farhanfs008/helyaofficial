// Import Lucide icons
import { MapPin, Phone, Mail, MessageCircle, ShoppingCart} from 'lucide-react'; 
import logo from "../assets/logo.png"

const Footer = () => {
  const whatsappUrl = 'https://wa.me/6285713941725?text=Halo%2C%20saya%20tertarik%20dengan%20souvenir%20pernikahan';
  const shopeeUrl = 'https://shopee.co.id/helstore33';

  return (
    // Footer utama dengan latar belakang gelap dan padding atas/bawah
    <footer className="bg-[#1e293b] text-white pt-12">
      
      {/* Batas atas oranye (seperti pada gambar) */}
      <div className="h-2 bg-orange-600 w-full absolute top-0 left-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Konten Utama (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          
          {/* Kolom 1: Informasi Perusahaan & Media Sosial */}
          <div>
            <h3 className="font-bold mb-4">
              <img src={logo} className='h-24' alt="logo helya" />
            </h3>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Souvenir pernikahan berkualitas premium dengan custom design. Wujudkan kenangan istimewa untuk momen spesial Anda.
            </p>
            
            {/* Ikon Media Sosial */}
            <div className="flex space-x-4">
              <a href={whatsappUrl} className="text-gray-400 hover:text-white transition duration-200 p-2 rounded-full border border-gray-600 hover:border-white">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={shopeeUrl} className="text-gray-400 hover:text-white transition duration-200 p-2 rounded-full border border-gray-600 hover:border-white">
                <ShoppingCart className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Kolom 2: Menu */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#beranda" className="text-gray-400 hover:text-white transition duration-200" id="beranda" >Beranda</a></li>
              <li><a href="#produk" className="text-gray-400 hover:text-white transition duration-200" id="produk" >Produk</a></li>
              <li><a href="#kontak" className="text-gray-400 hover:text-white transition duration-200" id="kontak" >Kontak</a></li>
            </ul>
          </div>
          
          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-pink-500 shrink-0" />
                <span className="text-gray-400">Klaten, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 text-pink-500 shrink-0" />
                <span className="text-gray-400">+6285713941725</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Garis pemisah */}
        <hr className="border-gray-700 my-8" />

        {/* Bagian Bawah Footer (Copyright di tengah) */}
        {/* Menggunakan 'text-center' dan menghilangkan 'justify-between' */}
        <div className="flex flex-col justify-center items-center py-4 text-xs text-gray-400">
          
          {/* Copyright */}
          <p className="mb-2">
            &copy; 2025 helyaofficial. All rights reserved.
          </p>

          {/* Credit/Made with (tetap dipertahankan karena ada di gambar asli) */}
          <span className="flex items-center text-gray-500">
              <span className="mr-1">Made with</span> 
              <span className="text-pink-500">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </span>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;