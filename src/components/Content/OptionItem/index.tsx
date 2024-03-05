import React from 'react';
import tw from 'tailwind-styled-components';

interface IOptionItemProps {
  imgSrc: string;
  content: React.ReactElement;
}

const OptionItemContainer = tw.div`
  flex flex-col space-y-4
`;

const ImageWrapper = tw.div`
  flex items-center justify-center space-x-20
`;

const Content = tw.p`
  body2 text-center text-black p-2
`;

const OptionItem: React.FC<IOptionItemProps> = ({ imgSrc, content }) => {
  return (
    <OptionItemContainer>
      <ImageWrapper>
        <img src={imgSrc} alt="option" />
      </ImageWrapper>
      <Content>{content}</Content>
    </OptionItemContainer>
  );
};

export default OptionItem;
