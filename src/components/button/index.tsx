import React, {FC} from 'react';
import {StyleSheet} from "react-native";
import {Container} from "./buttonStyles";
import Font, {h5} from "../utils/generic/fonts";

interface IProps{
    onPress: () => void;
    title: string;
    color: string;
    bgColor: string;
    borderColor: string;
}

const Button:FC<IProps> = ({onPress, title = 'Button Title', color= '#484848', bgColor='#fff', borderColor}) =>
    <Container borderColor={borderColor} bgColor={bgColor} onPress={() => onPress()}>
        <Font size={h5} style={[styles.text, {color: color}]}>{title}</Font>
    </Container>

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    }
})

export default Button;
