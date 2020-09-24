import React, {FC, ReactNode, useRef} from 'react';
import {Container, Content, Header, Inner} from "./modalStyles";
import {PanResponder, StyleSheet, TouchableOpacity, View} from "react-native";
import {SvgXml} from "react-native-svg";
// @ts-ignore
import close from './close.svg';
import {Layout} from "../utils";
import Font from "../utils/generic/fonts";

interface IProps {
    children: ReactNode;
    visible: boolean;
    headerTitle: string;
    _closeModal: () => void;
}

const Modal: FC<IProps> = ({_closeModal, visible, children, headerTitle}) => {

    const modalRef = useRef<any>(null);

    const panResponder = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () =>
                true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () =>
                true,
            onPanResponderMove: (_, gestureState) => {
                console.log(gestureState.dy)
                if (modalRef !== null && modalRef.current !== null) {
                    if (gestureState.dy >= 0) {
                        modalRef.current.transitionTo({marginTop: Layout.heightPercentageToDP(50)}, 5000);
                        modalRef.current.slideOutDown();
                        _closeModal()
                    }
                }
            },
        })
    ).current;

    return <Container visible={visible} transparent={true}>
        <View style={{backgroundColor: 'rgba(0,0,0,.7)', flex: 1}}>
            <Content ref={modalRef}>
                <View style={{
                    height: 6,
                    marginTop: Layout.widthPercentageToDP(2),
                    width: 50,
                    backgroundColor: '#717171',
                    alignSelf: 'center',
                    borderRadius: Layout.widthPercentageToDP(2)
                }}/>
                <Header>
                    <TouchableOpacity onPress={() => _closeModal()}
                                      style={{flex: 1, paddingLeft: Layout.widthPercentageToDP(2)}}>
                        <SvgXml xml={close} height={Layout.widthPercentageToDP(3)}
                                width={Layout.widthPercentageToDP(3)}/>
                    </TouchableOpacity>
                    <View style={{flex: 8}} {...panResponder.panHandlers}>
                        <Font size={2} style={styles.headerText}>
                            {headerTitle}
                        </Font>
                    </View>
                    <View style={{flex: 1}}/>
                </Header>
                <Inner>
                    {children}
                </Inner>
            </Content>
        </View>
    </Container>
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'CircularStd-Medium',
        textAlign: 'center'
    }
})

export default Modal
