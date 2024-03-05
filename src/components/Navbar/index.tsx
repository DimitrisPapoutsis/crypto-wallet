import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import tw from 'tailwind-styled-components';

const Container = tw.div`container mx-auto p-12 flex flex-col`;
const InnerContainer = tw.div`flex items-center justify-between`;
const LogoContainer = tw.div`flex items-center space-x-20`;
const LogoImage = tw.img`w-32 h-auto`;
const DropdownContainer = tw.div`flex items-center lg:hidden`;

const Navbar = () => {
  return (
    <Container>
      <InnerContainer>
        <LogoContainer>
          <LogoImage src="images/coincash-logo-blue.svg" alt="coincash logo" />
        </LogoContainer>
        <DesktopNavbar />
        <DropdownContainer>
          <img src="images/sandwich-menu.svg" alt="menu" />
        </DropdownContainer>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
