import styled from 'styled-components/native';
import {Layout} from '../utils';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;
export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImageContainer = styled.View`
  flex: 0.35;
  background: #0061d5;
`;

export const CurvedTop = styled.View`
    borderTopLeftRadius: ${Layout.widthPercentageToDP(1)}px;
    borderTopRightRadius: ${Layout.widthPercentageToDP(1)}px;
    margin-top: -${Layout.widthPercentageToDP(3)}px;
    shadow-color: #000;
    shadow-offset: {
    width: 0,
    height: 2,
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;`;

export const DataContainer = styled(CurvedTop)`
  background: #fff;
  flex: 0.65;
  padding: ${Layout.widthPercentageToDP(4)}px;
`;

export const Title = styled.Text`
  font-size: ${Layout.widthPercentageToDP(4)}px;
`;
