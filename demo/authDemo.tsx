import * as React from "react";
import SignUpForm from "../src/components/auth";
import {SvgXml} from "react-native-svg";
// @ts-ignore
import icon from './images/hourglass.svg';
import {Layout} from "../src/components/utils";

const Logo = <SvgXml width={Layout.widthPercentageToDP(12)} height={Layout.widthPercentageToDP(12)} xml={icon}/>

const AuthDemo = () => {
    return <SignUpForm companyLogo={Logo} companyName={'Demo'}/>
}

export default AuthDemo
