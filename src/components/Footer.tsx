
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-scham-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos</h3>
            <p className="text-white/70 leading-relaxed">
              Schamcity est une marque spécialisée dans la création de modèles créatifs et immersifs pour stimuler l'imagination et la créativité.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-scham-gold transition-colors">About us</a></li>
              <li><a href="#" className="text-white/70 hover:text-scham-gold transition-colors">Help</a></li>
              <li><a href="#" className="text-white/70 hover:text-scham-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-scham-gold transition-colors">Mentions légales</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">Inscrivez-vous pour recevoir nos dernières actualités</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-l-md flex-grow focus:outline-none text-scham-dark"
              />
              <button className="bg-scham-gold px-4 py-2 rounded-r-md text-white font-semibold hover:brightness-110 transition-all">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/60">© 2025 Schamcity. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
