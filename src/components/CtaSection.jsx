import { Sparkles, MessageCircle, ArrowRight, ShoppingBag } from "lucide-react";

const CtaSection = () => {

  const whatsappUrl = 'https://wa.me/6285713941725?text=Halo%2C%20saya%20tertarik%20dengan%20souvenir%20pernikahan';
  const shopeeUrl = 'https://shopee.co.id/helstore33';

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-500 via-orange-500 to-amber-500 py-24" id="kontak" >
      <div className="text-center relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
        <Sparkles className="text-white"/>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">Siap Mewujudkan Souvenir Pernikahan Impian Anda?</h1>
        <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">Konsultasi gratis dan dapatkan penawaran terbaik untuk souvenir pernikahan berkualitas premium. Hubungi kami sekarang!</p>
        {/* Tombol Call-to-Action (CTA) WhatsApp */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mr-4 px-8 py-3 border border-transparent text-sm lg:text-base font-bold rounded-lg text-orange-600 bg-white hover:bg-gray-100 transition duration-300 shadow-xl"
        >
          {/* Menggunakan ikon MessageCircle dari Lucide di tombol untuk merepresentasikan kontak */}
          <MessageCircle className="mr-3 h-5 w-5" /> 
          Konsultasi di WhatsApp
          {/* Menggunakan ArrowRight dari Lucide sebagai pengganti panah */}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        {/* Tombol Call-to-Action (CTA) Shopee*/}
        <a href={shopeeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mt-4 px-8 py-3 border border-transparent text-sm lg:text-base font-bold rounded-lg text-orange-600 bg-white hover:bg-gray-100 transition duration-300 shadow-xl"
        >
          {/* Menggunakan ikon MessageCircle dari Lucide di tombol untuk merepresentasikan kontak */}
          <ShoppingBag className="mr-3 h-5 w-5" /> 
          Cek Toko Oren
          {/* Menggunakan ArrowRight dari Lucide sebagai pengganti panah */}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        
        {/* Daftar Keunggulan/Poin Utama */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-90">
          <span className="flex items-center font-medium text-white">
            <span className="inline-block w-2 h-2 mr-2 bg-white rounded-full"></span>
            Gratis Konsultasi
          </span>
          <span className="flex items-center font-medium text-white">
            <span className="inline-block w-2 h-2 mr-2 bg-white rounded-full"></span>
            Custom Design
          </span>
          <span className="flex items-center font-medium text-white">
            <span className="inline-block w-2 h-2 mr-2 bg-white rounded-full"></span>
            Harga Terjangkau
          </span>
          <span className="flex items-center font-medium text-white">
            <span className="inline-block w-2 h-2 mr-2 bg-white rounded-full"></span>
            Pengiriman Tepat Waktu
          </span>
        </div>
      </div>
    </section>
  )
}

export default CtaSection