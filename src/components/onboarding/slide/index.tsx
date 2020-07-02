import React, {FC} from 'react';
import {Container} from "./slide.styles";

interface IProps {
    item: any
}
const Slide:FC<IProps> = ({item}) => {
    return <Container />
}

export default Slide;