
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import BestSellers from '../components/BestSellers';
import Advantages from '../components/Advantages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <BestSellers />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
