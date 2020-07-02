import React, {FC} from 'react';
import {Container, SlideButtonsContainer, Heading} from './slide.styles';
import SlideButtons from "../slideButtons";

interface IProps {
    item: {
        heading?: string;
    };
    showButtons: boolean;
}
// TODO Enable dynamic font props

const Slide: FC<IProps> = ({ showButtons, item: {heading}}) => {
    return <Container>

        {heading && <Heading>{heading}</Heading>}
        {showButtons && <SlideButtonsContainer><SlideButtons/></SlideButtonsContainer>}
    </Container>;
};

export default Slide;
