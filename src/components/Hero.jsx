import { Sparkles, MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappUrl = 'https://wa.me/6285713941725?text=Halo%2C%20saya%20tertarik%20dengan%20souvenir%20pernikahan';
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-amber-50 via-rose-50 to-orange-50 pt-12 md:pt-32" id="beranda" >
      <div className="text-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-rose-100">
        <Sparkles />
        <span className="text-sm font-medium text-gray-700">Souvenir Pernikahan Terpercaya di Klaten</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"><span className="bg-linear-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Souvenir Pernikahan</span><br/><span className="text-gray-800">Custom &amp; Berkualitas Premium</span></h1>
        <p className="text-xl md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Wujudkan kenangan istimewa dengan souvenir pernikahan unik dan elegan. Kualitas terbaik, harga terjangkau, dan pengiriman tepat waktu.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 rounded-md bg-linear-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" href={whatsappUrl} target="_blank" rel="noopener noreferrer" > <MessageCircle />Hubungi via WhatsApp</a>
          <a href="#produk" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 rounded-md border-2 border-rose-500 text-rose-600 hover:text-black hover:bg-rose-50 px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">Lihat Katalog Produk</a></div>
      </div>
    </section>
  )
}

export default Hero