import React, {FC} from 'react';
import {
  Container,
  SlideButtonsContainer,
  Heading,
  ContentWrapper, Text,
} from './slide.styles';
import SlideButtons from '../slideButtons';

interface IProps {
  item: {
    heading?: string;
    text?: string;
  };
  headerStyles?: {};
  showButtons: boolean;
  numberOfSlides: number;
  activeSlide: number;
}

// TODO Enable dynamic font props

const Slide: FC<IProps> = ({showButtons, item: {heading, text}, headerStyles, numberOfSlides, activeSlide}) => {
  return (
    <Container>
      <ContentWrapper>
        {heading && <Heading style={headerStyles}>{heading}</Heading>}
        {text && <Text>{text}</Text>}
      </ContentWrapper>
      {showButtons && (
        <SlideButtonsContainer>
          <SlideButtons numberOfSlides={numberOfSlides} activeSlide={activeSlide}/>
        </SlideButtonsContainer>
      )}
    </Container>
  );
};

export default Slide;
