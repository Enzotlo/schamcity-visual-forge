
import React from 'react';
import { CheckCircle, Lightbulb, HeadphonesIcon, Sparkles } from 'lucide-react';

const advantagesData = [
  {
    id: 1,
    title: "Qualité",
    description: "Des matériaux premium et des processus rigoureux pour une qualité irréprochable.",
    Icon: CheckCircle,
    color: "text-green-500"
  },
  {
    id: 2,
    title: "Inspiration",
    description: "Des designs uniques pour stimuler votre créativité et votre imagination.",
    Icon: Lightbulb,
    color: "text-yellow-500"
  },
  {
    id: 3,
    title: "Service client",
    description: "Une équipe attentive et réactive pour répondre à toutes vos questions.",
    Icon: HeadphonesIcon,
    color: "text-blue-500"
  },
  {
    id: 4,
    title: "Innovation",
    description: "Des concepts novateurs pour repousser les limites de la créativité.",
    Icon: Sparkles,
    color: "text-purple-500"
  }
];

const Advantages: React.FC = () => {
  return (
    <section className="py-20 bg-scham-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Nos Avantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {advantagesData.map((advantage) => (
            <div key={advantage.id} className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mb-4 ${advantage.color}`}>
                <advantage.Icon size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-white/80">{advantage.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <img src="/lovable-uploads/407bab74-d3aa-49aa-939d-c89d1d79c020.png" alt="Schamcity Mascot" className="w-24 h-24 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
