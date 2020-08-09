import * as React from 'react';
import {FC, useState} from 'react';
import Font, {h3, h6} from '../utils/generic/fonts';
import {Container, Header, HR, Logo, OptionHR} from './authStyles';
import PhoneInput from '../phoneInput';
import {Layout} from "../utils";
import {MEDIUM} from "../utils/layout/spacing";
import {StyleSheet, View} from "react-native";
import AuthButtons from "./buttons";

interface IProps {
    companyName: string;
    companyLogo: React.ReactNode;
}

const AuthForm: FC<IProps> = ({companyName = 'Company', companyLogo}) => {
    const [login, setLogin] = useState(false);

    return (
        <Container>
            <Header>
                {!login ? <View><Logo>{companyLogo}</Logo>
                    <Font size={h3} style={{fontWeight: '500'}}>Welcome to {companyName}</Font>
                </View> : <Font size={h3} style={{fontWeight: '500'}}>Log in</Font>}
            </Header>
            <PhoneInput/>
            <OptionHR>
                <HR/>
                <Font size={h6} style={styles.hrText}>or</Font>
                <HR/>
            </OptionHR>
            <AuthButtons/>
            <Font size={2.3}>
                {!login ? 'Already have an account? ' : 'New to ' + companyName + '? '}<Font style={styles.underline} size={2.2} onPress={() => setLogin(!login)}>{!login ? 'Login' : 'Sign up'}</Font>
            </Font>
        </Container>
    );
};

const styles = StyleSheet.create({
    hrText: {
        padding: Layout.widthPercentageToDP(MEDIUM),
    },
    underline: {
        textDecorationLine: 'underline'
    }
})

export default AuthForm;
