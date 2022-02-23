// React Native imports
import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
// Components imports
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";
// Costants imports
import { SCREEN_WIDTH } from "../consants";

const ITEM_SIZE = Platform.OS === "android" ? 8 : 10;

interface PaginationItem {
    length: number;
    index: number;
    animationValue: Animated.SharedValue<number>;
    onItemPress: (index: number) => void;
}

const PaginationItem: React.FC<PaginationItem> = ({ animationValue, index, length, onItemPress }) => {
    const rStyles = useAnimatedStyle(() => {
        if (animationValue.value <= 0) {
            const inputRange = [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH];
            const scale = interpolate(-animationValue.value, inputRange, [0.5, 1, 0.5], Extrapolate.CLAMP);
            const opacity = interpolate(-animationValue.value, inputRange, [0.6, 1, 0.6], Extrapolate.CLAMP);
            return {
                transform: [{ scale: scale }],
                opacity: opacity,
            };
        } else {
            const inputRange = [(length - index - 1) * SCREEN_WIDTH, (length - index) * SCREEN_WIDTH, (length - index + 1) * SCREEN_WIDTH];
            const scale = interpolate(animationValue.value, inputRange, [0.5, 1, 0.5], Extrapolate.CLAMP);
            const opacity = interpolate(-animationValue.value, inputRange, [0.6, 1, 0.6], Extrapolate.CLAMP);
            return {
                transform: [{ scale: scale }],
                opacity: opacity,
            };
        }
    }, []);

    return (
        <Pressable onPress={() => onItemPress(index)}>
            <Animated.View style={[styles.container, rStyles]}></Animated.View>
        </Pressable>
    );
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
