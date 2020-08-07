import * as React from 'react';
import {FC, useState} from 'react';
import Font, {h4, h6} from '../utils/generic/fonts';
import {AuthOption, AuthOptions, Container, Header, HR, Logo, OptionHR} from './signUpStyles';
import PhoneInput from '../phoneInput';
import {Layout} from "../utils";
import {MEDIUM} from "../utils/layout/spacing";
import {StyleSheet} from "react-native";
import Button from "../button";

interface IProps {
    companyName: string;
    companyLogo: React.ReactNode;
}

const authMethods = [
    {
        name: 'Google',
        logo: '',
        url: ''
    },
    {
        name: 'Facebook',
        logo: '',
        url: ''
    },
    {
        name: 'Apple',
        logo: '',
        url: ''
    }]

const SignUpForm: FC<IProps> = ({companyName = 'Company', companyLogo}) => {
    const [login, setLogin] = useState(false);

    return (
        <Container>
            <Header>
                <Logo>{companyLogo}</Logo>
                <Font size={h4} style={{fontWeight: '500'}}>Welcome to {companyName}</Font>
            </Header>
            <PhoneInput/>
            <OptionHR>
                <HR/>
                <Font size={h6} style={styles.hrText}>or</Font>
                <HR/>
            </OptionHR>
            <AuthOptions>
                {authMethods.map((auth) => <AuthOption><Button onPress={() => console.log('test')} title={auth.name}
                                                               color={'#484849'} borderColor={'#717171'}
                                                               bgColor={'#fff'}/></AuthOption>)}
            </AuthOptions>
            <Font size={h6}>
                {!login ? 'Already have an account?' : 'New to ' + companyName + '? '}<Font size={h6}
                                                                                            onPress={() => setLogin(login)}>{!login ? ' Login' : ' Sign up'}</Font>
            </Font>
        </Container>
    );
};

const styles = StyleSheet.create({
    hrText: {
        padding: Layout.widthPercentageToDP(MEDIUM),
    }
})

export default SignUpForm;
