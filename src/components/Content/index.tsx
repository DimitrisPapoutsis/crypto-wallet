import React from 'react';
import tw from 'tailwind-styled-components';
import ContentOptions from './ContentOptions';
import ContentFeatures from './ContentFeatures';
import ContentHeader from './HeaderContent';
import { contentFeaturesItems } from '../../data/contentFeaturesItems';
import { contentOptionsItems } from '../../data/contentOptionsItems';

const ContentContainer = tw.div`
  bg-white pb-8
`;

const Container = tw.div`
  container mx-auto p-12 flex flex-col
`;

const ContentColumn = tw.div`
  flex flex-col space-y-12 md:space-y-24
`;

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Container>
        <ContentColumn>
          <ContentHeader />
          <ContentOptions optionsData={contentOptionsItems} />
          <ContentFeatures rows={contentFeaturesItems} />
        </ContentColumn>
      </Container>
    </ContentContainer>
  );
};

export default Content;
