import React from 'react'
import {AuthButton, AuthOption, AuthOptions} from "../authStyles";
import Button from "../../button";
import Font, {h6} from "../../utils/generic/fonts";
import {Layout} from "../../utils";
// @ts-ignore
import SvgMail from './icons/--native/Mail';
// @ts-ignore
import SvgGoogle from './icons/--native/Google';
// @ts-ignore
import SvgApple from './icons/--native/Apple';
// @ts-ignore
import SvgFacebook from './icons/--native/Facebook';

import {StyleSheet, View} from "react-native";

const authMethods = [
    {
        name: 'Continue with Apple',
        url: 'apple',
        key: 'apple',
        icon: <SvgApple/>,
    },
    {
        name: 'Continue with email',
        url: '',
        key: 'email',
        icon: <SvgMail/>
    },
    {
        name: 'Continue with Google',
        url: '',
        key: 'google',
        icon: <SvgGoogle />
    },
    {
        name: 'Continue with Facebook',
        url: '',
        key: 'facebook',
        icon: <SvgFacebook/>
    }
]


const AuthButtons = () => {
    return <AuthOptions>
        {authMethods.map((auth) =>
            <AuthOption key={auth.key}>
                <Button onPress={() => console.log('test')}
                        title={auth.name}
                        paddingVertical={3.7}
                        color={'#484849'} borderColor={'#717171'}
                        bgColor={'#fff'} customContent={<AuthButton>
                    <View style={{flex: 2.7}}>
                        <View style={{height: Layout.widthPercentageToDP(4), width: Layout.widthPercentageToDP(4)}}>
                            {
                                    auth.icon

                            }
                        </View>
                    </View>
                    <View style={{flex: 7.3}}>
                        <Font style={styles.text} size={h6}>{auth.name}</Font>
                    </View>
                </AuthButton>}/>
            </AuthOption>)}
    </AuthOptions>
}

const styles = StyleSheet.create({
    text: {}
})
export default AuthButtons
