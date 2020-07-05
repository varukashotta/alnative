import styled from "styled-components/native";

interface ITheme {
    active: boolean;
}
export const Button = styled.View`
    height: 50px;
    width: 50px;
    border-radius: 5px;
    background-color: ${(props:ITheme) => props.active ? '#000' : 'gray' }
    margin: 10px;
`;