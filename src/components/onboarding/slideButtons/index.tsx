import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Button} from "./slideButtonStyles";

interface IProps {
    numberOfSlides: number;
    activeSlide: number;
}

const SlideButtons: FC<IProps> = ({numberOfSlides, activeSlide}) => {

    const renderButtons = (numberOfSlides) => {
        let renderedButtons: any[] = [<Button active={true}><Text>5</Text></Button>]

        for (let i = 0; i < numberOfSlides; i++) {
            renderedButtons.push(<Button key={i} active={activeSlide === i ? true : false}><Text>5</Text></Button>)
        }
        return renderedButtons;
    }


    return (
        <View>
            {renderButtons(numberOfSlides)}
        </View>
    );
};

export default SlideButtons;
