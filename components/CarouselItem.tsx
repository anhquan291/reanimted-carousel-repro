// React Native imports
import React from "react";
import { Image, StyleSheet } from "react-native";
// Type imports
import { sliderImage } from "../types";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
// Components imports
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

interface CarouselItem extends CarouselRenderItemInfo<sliderImage> {
    length: number;
}

const CarouselItem: React.FC<CarouselItem> = ({ animationValue, index, item, length }) => {
    const { imageUrl } = item;

    const rStyles = useAnimatedStyle(() => {
        const inputRange = [-1, 0, 1];
        const scale = interpolate(animationValue.value, inputRange, [0.8, 1, 0.8], Extrapolate.CLAMP);
        return {
            transform: [{ scale: scale }],
        };
    }, []);
    return (
        <Animated.View style={[styles.container, rStyles]}>
            <Image source={{ uri: imageUrl }} style={styles.img} />
        </Animated.View>
    );
};

export default CarouselItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: "100%",
        height: "100%",
    },
});
