import styled from 'styled-components/native';
import {heightPercentageToDP} from "../utils";

export const Container = styled.ScrollView`
    flex: 1;
    background: #fff;

`
export const MainContainer = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ImageContainer = styled.View`
    flex: .35;
    background: #0061d5;
`

export const CurvedTop = styled.View`
    borderTopLeftRadius: ${heightPercentageToDP(1)}px;
    borderTopRightRadius: ${heightPercentageToDP(1)}px;
    margin-top: -${heightPercentageToDP(3)}px;
    shadow-color: #000;
    shadow-offset: {
    width: 0,
    height: 2,
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;`

export const DataContainer = styled(CurvedTop)`
    background: #fff;
    flex: .65;
    padding: ${heightPercentageToDP(4)}px;
`

export const Title = styled.Text`
    font-size: ${heightPercentageToDP(4)}px;
`
