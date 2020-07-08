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
    backgroundColor: string
}

// TODO Enable dynamic font props

const Slide: FC<IProps> = ({
                               item: {heading, text, image, customElement = null, backgroundColor= '#fff'}
                           }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            {customElement ? customElement : <Fragment>
                {image && <Image source={{uri: image}}/>}
                <ContentWrapper>
                    {heading && <Heading>{heading}</Heading>}
                    {text && <Text>{text}</Text>}
                </ContentWrapper>
            </Fragment>}
        </Container>
    );
};

export default Slide;
