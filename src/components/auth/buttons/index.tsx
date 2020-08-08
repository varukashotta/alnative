import React from 'react'
import {Apple, AuthButton, AuthOption, AuthOptions} from "../authStyles";
import Button from "../../button";
import Font, {h6} from "../../utils/generic/fonts";
import {SvgXml} from "react-native-svg";
import {Layout} from "../../utils";
// @ts-ignore
import mail from './icon/mail.svg';
// @ts-ignore
import google from './icon/google.svg';
// @ts-ignore
import apple from './icon/company.svg';
// @ts-ignore
import facebook from './icon/facebook.svg';
import {StyleSheet, View} from "react-native";

const authMethods = [
    {
        name: 'Continue with Apple',
        url: 'apple',
        key: 'apple',
        icon: apple,
    },
    {
        name: 'Continue with email',
        url: '',
        key: 'email',
        icon: mail
    },
    {
        name: 'Continue with Google',
        url: '',
        key: 'google',
        icon: google
    },
    {
        name: 'Continue with Facebook',
        url: '',
        key: 'facebook',
        icon: facebook
    }
]


const AuthButtons = () => {
    return <AuthOptions>
        {authMethods.map((auth) =>
            <AuthOption key={auth.key}>
            <Button onPress={() => console.log('test')}
                    title={auth.name}
                    paddingVertical={2.9}
                    color={'#484849'} borderColor={'#717171'}
                    bgColor={'#fff'} customContent={<AuthButton>
                <View style={{flex: 1}}>
                    {
                        auth.key !== 'apple' ?
                            <SvgXml xml={auth.icon} height={Layout.widthPercentageToDP(4)}
                                    width={Layout.widthPercentageToDP(4)}/> :
                            <Apple source={require('./icon/company.png')} />
                    }
                </View>
                <View style={{flex: 9}}>
                <Font style={styles.text} size={h6}>{auth.name}</Font>
                </View>
            </AuthButton>}/>
        </AuthOption>)}
    </AuthOptions>
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    }
})
export default AuthButtons
