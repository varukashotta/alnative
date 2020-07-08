import styled from 'styled-components/native';

interface IProps {
    backgroundColor: string;
}
export const Container = styled.View`
  background-color: ${(prop:IProps) => prop.backgroundColor};
  flex: 1;
`;
