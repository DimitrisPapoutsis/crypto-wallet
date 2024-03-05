import React from 'react';
import tw from 'tailwind-styled-components';
import Button from '../../components/ui/botton';
import { HEADER_BUTTON_LABEL, HERO_BUTTON_LABEL } from '../../constants';

const HeroSection = tw.section`
  relative w-full
`;

const Container = tw.div`
  container flex flex-col mx-auto lg:py-24 p-12 lg:flex-row
`;

const ContentWrapper = tw.div`
  flex flex-col space-y-10 lg:mt-10 xl:mb-20 w-full sm:w-1/2 md:w-1/3 xl:w-1/2
`;

const Header1 = tw.h1`
  header1 text-left text-black
`;

const Body2 = tw.p`
  body2 lg:mt-0 lg:mx-0
`;

const ButtonsContainer = tw.div`
  flex w-full space-x-4 lg:justify-start
`;

const ImageWrapper = tw.div`
  hidden sm:flex sm:flex-row-reverse absolute sm:right-0 sm:-bottom-[2px] pt-8
`;

const MobileImageWrapper = tw.div`
  flex sm:hidden relative pt-14 justify-center items-center top-[2px] -ml-[5px]
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Container>
        <ContentWrapper>
          <Header1>
            You can buy anything with{' '}
            <span className="text-primary">COINCASH</span>
          </Header1>
          <Body2>
            The easiest way to use your cryptocurrencies for everyday purchases.
          </Body2>
          <ButtonsContainer>
            <Button label={HERO_BUTTON_LABEL} className="hidden lg:block" />
            <Button label={HEADER_BUTTON_LABEL} className="block lg:hidden" />
          </ButtonsContainer>
        </ContentWrapper>
        <ImageWrapper>
          <img
            src="images/iphone-desktop.svg"
            alt="iphone"
            className="z-0 sm:w-1/2 md:w-3/4 lg:w-full"
          />
        </ImageWrapper>
      </Container>
      <MobileImageWrapper>
        <img
          src="images/iphone-desktop.svg"
          alt="iphone desktop"
          className="z-0"
        />
      </MobileImageWrapper>
    </HeroSection>
  );
};

export default Hero;
