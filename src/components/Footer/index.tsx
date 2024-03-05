import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Button from '../../components/ui/botton';
import useValidateEmail from '../../hooks/useValidateEmail';
import { EMAIL_BUTTON_LABEL, EMAIL_INPUT_PLACEHOLDER } from '../../constants';
import { FaExclamationCircle } from 'react-icons/fa';

const FooterSection = tw.section`
  bg-gradient-dark
`;

const Container = tw.div`
  container flex flex-col mx-auto p-12 pb-6 lg:mb-0
`;

const ContentWrapper = tw.div`
  flex flex-col space-y-24 lg:mt-0
`;

const Title = tw.h1`
  header1 text-center text-white
`;

const Description = tw.p`
  body2 text-center text-white
`;

const InputWrapper = tw.div`
  relative flex justify-center
`;

const Input = tw.input`
  body2 truncate py-2 px-1 rounded-l outline-none
`;

const ButtonWrapper = tw.div`
  flex items-center justify-center bg-white p-2 rounded relative max-w-sm w-full
`;

const Logo = tw.img`
  text-center
`;

const LinkWrapper = tw.div`
  flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0 items-center text-center
`;

const Link = tw.a`
  label2 text-white hover:text-primary transition-colors duration-300
`;

function Footer() {
  const { values, errors, handleChange } = useValidateEmail();

  const { email } = values;
  const isEmailValid = !errors.email && values.email.trim() !== '';

  return (
    <FooterSection id="footer">
      <Container>
        <ContentWrapper>
          <div>
            <Title>
              Get Started <span className="text-primary">today</span>
            </Title>
            <Description>
              Sign up to receive email updates on new product announcements,
              special promotions, sales and more.
            </Description>
          </div>
          <InputWrapper>
            <div>
              <ButtonWrapper>
                <Input
                  type="text"
                  name="email"
                  value={email || ''}
                  onChange={handleChange}
                  placeholder={EMAIL_INPUT_PLACEHOLDER}
                />
                <Button
                  label={EMAIL_BUTTON_LABEL}
                  onClick={() => {}}
                  disabled={!isEmailValid}
                />
              </ButtonWrapper>
              {errors.email && (
                <div className="m-1 flex items-center text-lg font-semibold text-error ">
                  <FaExclamationCircle className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
          </InputWrapper>
          <div className="flex w-full flex-col items-center justify-between space-y-12 lg:flex-row lg:space-y-0">
            <div className="text-center">
              <Logo src="images/coincash-logo-white.svg" alt="coincash" />
            </div>
            <LinkWrapper>
              <Link
                href="/"
                className="label2 text-white transition-colors duration-300 hover:text-lightPrimary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="label2 text-white transition-colors duration-300 hover:text-lightPrimary"
              >
                Terms and conditions
              </Link>
            </LinkWrapper>
          </div>
        </ContentWrapper>
      </Container>
    </FooterSection>
  );
}

export default Footer;
