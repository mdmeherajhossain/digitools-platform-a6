const ProductCard = ({ product, handleAddToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;

  return (
    <div className="card bg-white border border-gray-100 p-8 rounded-[40px] relative hover:shadow-xl transition-all h-full flex flex-col">
      
      <div className={`badge ${tagType} absolute top-8 right-8 border-none p-3 font-bold`}>
        {tag}
      </div>

      <div className="text-5xl mb-6 bg-gray-50 w-20 h-20 flex items-center justify-center rounded-3xl">
        {icon || "📦"}
      </div>

      <h2 className="text-2xl font-bold mb-2">{name}</h2>

      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">
          ${Number(price).toFixed(2)}
        </span>
        <span className="text-gray-400">/{period}</span>
      </div>

      <div className="space-y-3 mb-8">
        {features?.map((f, i) => (
          <div key={i} className="text-gray-500 flex items-center gap-2 font-medium">
            <span className="text-emerald-500 font-bold">✓</span> {f}
          </div>
        ))}
      </div>

      <button 
        type="button"
        onClick={() => handleAddToCart?.(product)} 
        className="btn bg-[#9538E2] text-white w-full rounded-2xl border-none h-14 font-bold hover:bg-[#832fd6]"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;