import React, {FC} from 'react';
import {
  Container,
  SlideButtonsContainer,
  Heading,
  ContentWrapper,
  Text,
  Image,
} from './slide.styles';
import SlideButtons from '../slideButtons';

interface IProps {
  item: {
    heading?: string;
    text?: string;
    image?: string;
  };
  headerStyles?: {};
  showButtons: boolean;
  numberOfSlides: number;
  activeSlide: number;
  _navigateToPage: (e: string) => void;
  _getStarted: () => void;
}

// TODO Enable dynamic font props

const Slide: FC<IProps> = ({
  showButtons,
  item: {heading, text, image},
  headerStyles,
  numberOfSlides,
  activeSlide,
  _navigateToPage,
    _getStarted
}) => {
  return (
    <Container>
      {image && <Image source={{uri: image}} />}
      <ContentWrapper>
        {heading && <Heading style={headerStyles}>{heading}</Heading>}
        {text && <Text>{text}</Text>}
      </ContentWrapper>
      {showButtons && (
        <SlideButtonsContainer>
          <SlideButtons
            _navigateToPage={_navigateToPage}
            numberOfSlides={numberOfSlides}
            activeSlide={activeSlide}
           _getStarted={_getStarted}/>
        </SlideButtonsContainer>
      )}
    </Container>
  );
};

export default Slide;
