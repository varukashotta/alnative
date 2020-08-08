import styled from 'styled-components/native';
import {LARGE, MEDIUM, spacing} from '../utils/layout/spacing';
import {Colours, Layout} from '../utils';

export const Container = styled.View`
  padding: ${spacing(MEDIUM)}px;
`;
export const Header = styled.View`
    marginBottom: ${Layout.widthPercentageToDP(6)}px;
`;
export const Logo = styled.View`
  marginBottom: ${Layout.widthPercentageToDP(2)}px;
`;

export const OptionHR = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    marginVertical: ${Layout.spacing.spacing(MEDIUM)}px;

`
export const Apple = styled.Image`
    height: ${Layout.widthPercentageToDP(4.5)}px;
    width: ${Layout.widthPercentageToDP(4.5)}px;
`

export const HR = styled.View`
    height: 1px;
    backgroundColor: ${Colours.lightestGray};
    flex: 1;
`

export const AuthOptions = styled.View`
    marginBottom: ${Layout.spacing.spacing(LARGE)}px;
`

export const AuthOption = styled.View`
    marginBottom: ${Layout.widthPercentageToDP(3)}px;
`

export const AuthButton = styled.View`
    display: flex;
    flexDirection: row;
`
