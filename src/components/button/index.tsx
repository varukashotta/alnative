import React, {FC, ReactNode} from 'react';
import {StyleSheet} from "react-native";
import {Container} from "./buttonStyles";
import Font, {h5} from "../utils/generic/fonts";

interface IProps{
    onPress: () => void;
    title: string;
    color: string;
    bgColor: string;
    borderColor?: string;
    paddingVertical?: number;
    customContent?: ReactNode;
}

const Button:FC<IProps> = ({onPress, paddingVertical, title = 'Button Title', color= '#484848', bgColor='#fff', borderColor, customContent}) =>
    <Container paddingVertical={paddingVertical} borderColor={borderColor} bgColor={bgColor} onPress={() => onPress()}>
        {!customContent ? <Font size={h5} style={[styles.text, {color: color}]}>{title}</Font> : customContent }
    </Container>

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    }
})

export default Button;
