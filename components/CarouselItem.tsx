// React Native imports
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// Type imports
import { sliderImage } from "../types";
import { CarouselRenderItem, CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";

const CarouselItem: CarouselRenderItem<sliderImage> = ({ animationValue, index, item }: CarouselRenderItemInfo<sliderImage>) => {
    const { imageUrl } = item;
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.img} />
        </View>
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
