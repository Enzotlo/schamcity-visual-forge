
import React from 'react';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Explorer Créatif",
    price: "29,99 €"
  },
  {
    id: 2,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Montagne Immersive",
    price: "39,99 €"
  },
  {
    id: 3,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Aventurier Créatif",
    price: "34,99 €"
  },
  {
    id: 4,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Modèle Exclusif",
    price: "49,99 €"
  }
];

const BestSellers: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-scham-light to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Meilleures ventes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
