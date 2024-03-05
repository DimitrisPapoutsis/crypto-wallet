import React from 'react';
import tw from 'tailwind-styled-components';

interface IRowProps {
  imgSrc: string;
  header: string;
  body: string;
  reverse?: boolean;
}

interface IContentFeaturesProps {
  rows: IRowProps[];
}

const Container = tw.div`
  flex flex-col space-y-12 md:space-y-24
`;

const ContentFeaturesRowContainer = tw.div`
  flex flex-col md:flex-row space-y-8 md:space-y-0
`;

const ImageWrapper = tw.div`
  w-full md:w-1/2
`;

const Image = tw.img`
  w-full
`;

const TextWrapper = tw.div`
  w-full md:w-1/2 flex justify-center items-center
`;

const TextContent = tw.div`
  flex flex-col space-y-2 md:pl-12 text-left
`;

const Header2 = tw.h1`
  header2 text-black
`;

const Body2 = tw.p`
  body2 text-black
`;

const ContentFeaturesRow: React.FC<IRowProps> = ({
  imgSrc,
  header,
  body,
  reverse,
}) => {
  const flexAndSpacingDirection = reverse
    ? 'md:flex-row-reverse'
    : 'md:flex-row';

  return (
    <ContentFeaturesRowContainer className={flexAndSpacingDirection}>
      <ImageWrapper>
        <Image src={imgSrc} alt="description" />
      </ImageWrapper>
      <TextWrapper>
        <TextContent>
          <Header2>{header}</Header2>
          <Body2>{body}</Body2>
        </TextContent>
      </TextWrapper>
    </ContentFeaturesRowContainer>
  );
};

const ContentFeatures: React.FC<IContentFeaturesProps> = ({ rows }) => {
  return (
    <Container>
      {rows.map((row, id) => (
        <ContentFeaturesRow key={id} {...row} reverse={id % 2 !== 0} />
      ))}
    </Container>
  );
};

export default ContentFeatures;
