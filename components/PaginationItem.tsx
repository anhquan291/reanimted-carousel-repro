import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { SCREEN_WIDTH } from "../consants";

const ITEM_SIZE = 10;

interface PaginationItem {
    length: number;
    index: number;
    animationValue: Animated.SharedValue<number>;
}

const PaginationItem: React.FC<PaginationItem> = ({ animationValue, index, length }) => {
    const rStyles = useAnimatedStyle(() => {
        if (animationValue.value <= 0) {
            const inputRange = [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH];
            const scale = interpolate(-animationValue.value, inputRange, [0.5, 1, 0.5], Extrapolate.CLAMP);
            return {
                transform: [{ scale: scale }],
            };
        } else {
            const inputRange = [(length - index - 1) * SCREEN_WIDTH, (length - index) * SCREEN_WIDTH, (length - index + 1) * SCREEN_WIDTH];
            const scale = interpolate(animationValue.value, inputRange, [0.5, 1, 0.5], Extrapolate.CLAMP);
            return {
                transform: [{ scale: scale }],
            };
        }
    }, []);

    return <Animated.View style={[styles.container, rStyles]} />;
};

export default PaginationItem;

const styles = StyleSheet.create({
    container: {
        height: ITEM_SIZE,
        aspectRatio: 1,
        backgroundColor: "white",
        borderRadius: ITEM_SIZE / 2,
        margin: 5,
    },
});
