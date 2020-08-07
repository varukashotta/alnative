import styled from 'styled-components/native';
import {LARGE, MEDIUM, SMALL, spacing} from '../utils/layout/spacing';
import {Colours, Layout} from '../utils';

export const Container = styled.View`
  padding: ${spacing(MEDIUM)}px;
`;
export const Header = styled.View`
    marginBottom: ${Layout.widthPercentageToDP(4)}px;
`;
export const Logo = styled.View`
  marginBottom: ${Layout.widthPercentageToDP(2)}px;
`;

export const OptionHR = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    marginVertical: ${Layout.spacing.spacing(LARGE)}px;

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
    marginBottom: ${Layout.spacing.spacing(SMALL)}px;
`
