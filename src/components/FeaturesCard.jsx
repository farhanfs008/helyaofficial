import FeatureList from './FeatureList'; // Adjust the path as necessary
import features from '../../data/features'; // Adjust the path as necessary

const FeaturesCard = () => {
  return (
    <section className="py-12 bg-linear-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional: Add a title for the section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Mengapa Memilih <span className='text-rose-500'>Kami?</span>
        </h2>
        <p className='text-lg md:text-base text-gray-600 text-center mb-12'>Komitmen kami untuk memberikan layanan terbaik bagi momen spesial Anda</p>
        {/* Feature Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureList
              key={index} // Using index as key is acceptable here since the list is static
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;