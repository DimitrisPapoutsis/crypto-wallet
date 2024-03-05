import React from 'react';
import tw from 'tailwind-styled-components';

interface IContentHeaderProps {}

const Container = tw.div`
  flex flex-col space-y-24
`;

const InnerContainer = tw.div`
  flex flex-col space-y-4
`;

const Header1 = tw.h1`
  header1 text-center text-black
`;

const Body2 = tw.p`
  body2 text-center text-black
`;

const ContentHeader: React.FC<IContentHeaderProps> = () => {
  return (
    <Container>
      <InnerContainer>
        <Header1>Buy anything you ever imagine</Header1>
        <Body2>
          The easiest way to use your cryptocurrencies for everyday purchases.
        </Body2>
      </InnerContainer>
    </Container>
  );
};

export default ContentHeader;
