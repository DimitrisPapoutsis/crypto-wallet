import React from 'react';
import tw from 'tailwind-styled-components';

interface ISocialProofProps {
  text: string;
}

const Container = tw.div`
  bg-primary w-full flex items-center justify-center py-8 lg:py-6 gap-2.5 z-50
`;

const Label = tw.span`
  text-white text-center w-full lg:w-1/3 px-12 lg:px-0
`;

const SocialProof: React.FC<ISocialProofProps> = ({ text }) => {
  return (
    <Container>
      <Label>{text}</Label>
    </Container>
  );
};

export default SocialProof;
