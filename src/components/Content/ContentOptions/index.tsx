import React from 'react';
import tw from 'tailwind-styled-components';
import OptionItem from '../OptionItem';

interface IOptionData {
  imgSrc: string;
  content: React.ReactElement;
}

interface IContentOptions {
  optionsData: IOptionData[];
}

const Container = tw.div`
  flex flex-row justify-between options-container space-x-24 md:space-x-0
`;

const OptionContainer = tw.div`
  mb-4 md:mb-0 flex-shrink-0
`;

const ContentOptions: React.FC<IContentOptions> = ({ optionsData }) => {
  return (
    <Container>
      {optionsData &&
        optionsData.map((option) => (
          // Assuming imgSrc is always an unique name
          <OptionContainer key={option.imgSrc}>
            <OptionItem imgSrc={option.imgSrc} content={option.content} />
          </OptionContainer>
        ))}
    </Container>
  );
};

export default ContentOptions;
