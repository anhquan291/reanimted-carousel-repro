// React Native imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Type imports
import { CarouselRenderItem, CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";

const CarouselItem: CarouselRenderItem<number> = ({ animationValue, index, item }: CarouselRenderItemInfo<number>) => {
    return (
        <View style={styles.container}>
            <Text>CarouselItem</Text>
        </View>
    );
};

export default CarouselItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
