import {Animated, Easing, StyleSheet} from 'react-native'
import {SvgImage} from "../../assets"
import {useEffect, useRef} from 'react';

const START = 0;
const RIGHT = 100;
const LEFT = -RIGHT;

const ROTATION_START = 0;
const ROTATION_END = 0.5;

const SLIDE_TIMING = 700;
const ROTATION_TIMING = 300;

export const FullScreenLoader = () => {
    const translateX = useRef(new Animated.Value(START)).current;
    const rotate = useRef(new Animated.Value(ROTATION_START)).current;

    useEffect(() => {
        const animate = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(translateX, {
                            toValue: LEFT,
                            duration: SLIDE_TIMING,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                    ]),
                    Animated.parallel([
                        Animated.timing(translateX, {
                            toValue: RIGHT,
                            duration: SLIDE_TIMING * 2,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                        Animated.timing(rotate, {
                            toValue: ROTATION_END,
                            duration: ROTATION_TIMING,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                    ]),
                    Animated.parallel([
                        Animated.timing(translateX, {
                            toValue: START,
                            duration: SLIDE_TIMING,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                        Animated.timing(rotate, {
                            toValue: ROTATION_START,
                            duration: ROTATION_TIMING,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                    ]),
                ])
            ).start();
        };


        animate();

        // Cleanup function to stop animation on component unmount
        return () => {
            translateX.stopAnimation();
            rotate.stopAnimation();
        }
    }, []);

    const rotation = rotate.interpolate({
        inputRange: [0, 0.5],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <Animated.View style={[styles.container, {transform: [{translateX}, {rotate: rotation}]}]}>
            <SvgImage name='logo' />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});