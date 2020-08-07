import styled from 'styled-components/native';
import {MEDIUM, spacing} from '../utils/layout/spacing';
import {lightestGray} from '../utils/generic/colors';

export const Country = styled.TouchableOpacity`
  paddingVertical: ${spacing(MEDIUM)}px;
  borderBottomWidth: 1px;
  borderBottomColor: ${lightestGray};
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;
