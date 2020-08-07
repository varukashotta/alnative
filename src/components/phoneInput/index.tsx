import React, {useState} from 'react';
import {Cell, Container, Input, Row} from './inputStyles';
import Font, {h6, p} from '../utils/generic/fonts';
import {StyleSheet, TextInput, View} from "react-native";
import {Formik} from "formik";
import Button from "../button";
import {Colours, Layout} from "../utils";
import {MEDIUM} from "../utils/layout/spacing";
import {SvgXml} from "react-native-svg";
// @ts-ignore
import down from './img/down-arrow.svg';

const countries = require('../countryList/countryCodes.json');

const PhoneInput = () => {
    const [selectedCountry] = useState('AU');

    const chosenCountry = () => {
        const select = countries.filter(
            (country) => country.code === selectedCountry,
        );
        return (
            <Font size={h6}>
                {select[0].name} ({select[0].dial_code})
            </Font>
        );
    };
    return (
        <Container>

            <Formik
                initialValues={{email: ''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                        <Input>
                            <Cell border={true}>
                                <Row>
                                    <View>
                                        <Font size={p} style={styles.placeholder}>Country/Region</Font>
                                        {chosenCountry()}
                                    </View>
                                    <SvgXml xml={down} height={Layout.widthPercentageToDP(5)} width={Layout.widthPercentageToDP(4)} />
                                </Row>
                            </Cell>
                            <Cell>
                                <TextInput
                                    placeholder={'Mobile Number'}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                            </Cell>
                        </Input>

                        <Font size={p} style={styles.info}>
                            We'll give you a call to confirm your number. Standard message and data rates apply.
                        </Font>
                        <Button title="Continue" bgColor={Colours.lightestGray} color={'#fff'} onPress={() => handleSubmit()}/>
                    </View>
                )}
            </Formik>
        </Container>
    );
};

const styles = StyleSheet.create({
    info: {
        marginBottom: Layout.spacing.spacing(MEDIUM)
    },
    placeholder: {
        color: '#717171'
    }
})

export default PhoneInput;
