
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-scham-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">Restez connecté</h2>
          <p className="mt-8 mb-10 text-scham-dark/80">
            Suivez-nous sur les réseaux sociaux pour découvrir nos dernières créations et actualités
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-scham-gold transition-colors duration-300">
                <Instagram size={28} className="text-scham-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="mt-2 text-sm">Instagram</span>
            </a>
            
            <a href="mailto:contact@schamcity.com" className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-scham-gold transition-colors duration-300">
                <Mail size={28} className="text-scham-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="mt-2 text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
