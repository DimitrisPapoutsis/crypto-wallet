import React from 'react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import SocialProof from '../../components/SocialProof';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { SOCIAL_PROOF_TEXT } from '../../constants';

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <div className="bg-gradient-light">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <SocialProof text={SOCIAL_PROOF_TEXT} />
      </div>
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
