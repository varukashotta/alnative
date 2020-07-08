import React, {FC, Fragment} from 'react';
import {
    Container,
    Heading,
    ContentWrapper,
    Text,
    Image,
} from './slide.styles';

interface IProps {
    item: {
        heading?: string;
        text?: string;
        image?: string;
        customElement?: React.ReactNode
    };
    headerStyles?: {};
}

// TODO Enable dynamic font props

const Slide: FC<IProps> = ({
                               item: {heading, text, image, customElement = null},
                               headerStyles,

                           }) => {
    return (
        <Container>
            {customElement ? customElement : <Fragment>
                {image && <Image source={{uri: image}}/>}
                <ContentWrapper>
                    {heading && <Heading style={headerStyles}>{heading}</Heading>}
                    {text && <Text>{text}</Text>}
                </ContentWrapper>
            </Fragment>}
        </Container>
    );
};

export default Slide;
