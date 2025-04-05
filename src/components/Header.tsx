
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/407bab74-d3aa-49aa-939d-c89d1d79c020.png" alt="Schamcity Logo" className="w-10 h-10" />
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold text-scham-dark">Schamcity</h1>
            <p className="text-xs md:text-sm text-scham-dark/70 italic">Là où l'inspiration urbaine rencontre la créativité digitale.</p>
          </div>
        </div>
        
        <Button className="btn-primary mt-3 md:mt-0">
          Schamcity-Store
        </Button>
      </div>
    </header>
  );
};

export default Header;
