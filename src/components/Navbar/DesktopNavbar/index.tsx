import React from 'react';
import Button from '../../ui/botton';
import tw from 'tailwind-styled-components';
import { HEADER_BUTTON_LABEL } from '../../../constants';

const Container = tw.div`hidden items-center space-x-8 font-bold lg:flex`;
const Link = tw.a`text-black hover:text-primary transition-colors duration-300`;

const DesktopNavbar = () => {
  return (
    <Container>
      <Link href="/">Features</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      <Button label={HEADER_BUTTON_LABEL} />
    </Container>
  );
};

export default DesktopNavbar;
