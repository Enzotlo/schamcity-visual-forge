
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-scham-dark mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-scham-dark/70 mb-4 line-clamp-2">{description}</p>
          )}
          <div className="flex justify-between items-center">
            <span className="text-scham-gold font-bold">{price}</span>
            <button className="text-sm px-3 py-1 rounded-full bg-scham-light text-scham-dark hover:bg-scham-gold hover:text-white transition-colors duration-300">
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
