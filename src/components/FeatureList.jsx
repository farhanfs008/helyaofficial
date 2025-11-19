const FeatureList = ({ icon: Icon, title, description}) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
    {/* Icon Container with Gradient Effect */}
    <div className="p-4 rounded-full bg-linear-to-br from-red-400 to-red-600 shadow-lg mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    
    <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
      {title}
    </h3>
    <p className="text-sm text-gray-600 text-center">
      {description}
    </p>
  </div>
);

export default FeatureList;