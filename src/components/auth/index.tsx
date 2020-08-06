import * as React from "react";
import Font, {h4} from "../utils/generic/fonts";
import {Container, Header, Logo} from "./signUpStyles";
import {FC} from "react";
import Select from "../forms/select";
import CountryList from "../countryList";


interface IProps {
    companyName: string;
    companyLogo: React.ReactNode;
}

const getSelectedCountry = (countryCode) => {
    console.log(countryCode);
}

const SignUpForm:FC<IProps> = ({companyName= "Company", companyLogo}) => {
    return <Container>
        <Header>
            <Logo>{companyLogo}</Logo>
            <Font size={h4}>Welcome to {companyName}</Font>
        </Header>
        <Select/>
        <CountryList onPress={getSelectedCountry}/>
    </Container>
}

export default SignUpForm
