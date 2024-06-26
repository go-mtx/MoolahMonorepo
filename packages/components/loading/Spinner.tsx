import {Animated, Easing} from 'react-native'
import {SvgImage} from "../../assets"
import {useEffect, useRef} from 'react';

const SPIN_DURATION = 700;
const DELAY_DURATION = 1000 - SPIN_DURATION;
const SCALE_DURATION = SPIN_DURATION / 2;

export const Spinner = () => {
    // Create a reference to the animated value
    const rotateValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Function to create the spin animation
        const spinAndScale = () => {
            // Reset the animated values
            rotateValue.setValue(0);
            scaleValue.setValue(1);

            // Create the animation
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(rotateValue, {
                        toValue: 1,
                        duration: SPIN_DURATION,
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                    Animated.delay(DELAY_DURATION),
                ]),
                Animated.sequence([
                    Animated.timing(scaleValue, {
                        toValue: 1.5,
                        duration: SCALE_DURATION, // Half of the spinning duration
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                    Animated.timing(scaleValue, {
                        toValue: 1,
                        duration: SCALE_DURATION, // Rest of the spinning duration
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                    Animated.delay(DELAY_DURATION), // 0.2 seconds
                ]),
            ]).start(spinAndScale);
        };

        // Start the animation loop
        spinAndScale();

        return () => {
            rotateValue.stopAnimation();
            scaleValue.stopAnimation();
        }
    }, [rotateValue]);

    // Interpolate the animated value to create the rotation
    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View style={{transform: [{rotate}, {scale: scaleValue}], width: 42, height: 25, }}>
            <SvgImage name='logo' />
        </Animated.View>
    )
}