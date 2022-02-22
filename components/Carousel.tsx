// React Native imports
import React from "react";
import { StyleSheet } from "react-native";
// Constants imports
import { SCREEN_WIDTH } from "../consants";
// Components imports
import CarouselItem from "./CarouselItem";
import ReanimatedCarousel from "react-native-reanimated-carousel";
// Type imports
import { CarouselRenderItem, CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";

const data = [1, 2, 3];

const Carousel = () => {
    return <ReanimatedCarousel data={data} renderItem={renderItem} width={SCREEN_WIDTH} height={SCREEN_WIDTH * (9 / 16)} />;
};

export default Carousel;

const renderItem: CarouselRenderItem<number> = (props: CarouselRenderItemInfo<number>) => {
    return <CarouselItem {...props} />;
};

const styles = StyleSheet.create({});
