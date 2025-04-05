
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Contact from '../components/Contact';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Sample product data (expanded from BestSellers)
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
  },
  {
    id: 5,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Urban Explorer",
    description: "Pour ceux qui veulent explorer la jungle urbaine avec style.",
    price: "44,99 €"
  },
  {
    id: 6,
    image: "/lovable-uploads/64d03605-a65e-482e-a98c-4f681a9086e6.png",
    title: "Midnight Builder",
    description: "Des couleurs sombres pour un style mystérieux et élégant.",
    price: "39,99 €"
  }
];

const Shop = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Shop Banner */}
        <section className="py-16 bg-scham-dark text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Boutique Schamcity</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Découvre notre collection de modèles uniques et créatifs
            </p>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16 bg-scham-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id}>
                  <ProductCard 
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                  <div className="text-center mt-2">
                    <button 
                      onClick={scrollToContact}
                      className="text-scham-dark/70 hover:text-scham-gold text-sm underline"
                    >
                      Me contacter pour ce produit
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination className="mt-16">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        
        {/* Contact Section */}
        <div id="contact-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
