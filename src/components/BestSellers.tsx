
import React from 'react';
import ProductCard from './ProductCard';

// Données des produits enrichies
const products = [
  {
    id: 1,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Lego City Nights",
    description: "Un modèle inspiré par la vie nocturne des grandes villes.",
    price: "29,99 €"
  },
  {
    id: 2,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "CyberBrick Runner",
    description: "Design futuriste, lignes épurées, ambiance néon.",
    price: "39,99 €"
  },
  {
    id: 3,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Skater Blockz",
    description: "Pour les amateurs de culture urbaine, style street garanti.",
    price: "34,99 €"
  },
  {
    id: 4,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "SchamClassic",
    description: "Notre premier modèle, simple, élégant, intemporel.",
    price: "49,99 €"
  }
];

const BestSellers: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-scham-light to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nos modèles les plus demandés</h2>
        <p className="text-center text-scham-dark/80 max-w-2xl mx-auto mb-10">
          Chaque modèle est conçu en édition limitée avec des matériaux de qualité.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
