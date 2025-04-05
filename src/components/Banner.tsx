
import React from 'react';
import { Button } from "@/components/ui/button"; 

const Banner: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-scham-dark/60 z-10"></div>
      <img 
        src="/lovable-uploads/3ba59207-35f5-4bb5-8297-85665189c2f0.png" 
        alt="Schamcity Banner" 
        className="w-full h-full object-cover hover:animate-zoom"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
          Explore l'univers Schamcity
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-center animate-fade-in">
          Créativité, Style & Innovation
        </p>
        <Button className="btn-primary mt-8 animate-fade-in">
          Découvrir la boutique
        </Button>
      </div>
    </section>
  );
};

export default Banner;
