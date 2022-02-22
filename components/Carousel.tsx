// React Native imports
import React from "react";
import { StyleSheet } from "react-native";
// Constants imports
import dummyData from "../dummyData";
import { SCREEN_WIDTH } from "../consants";
// Components imports
import CarouselItem from "./CarouselItem";
import ReanimatedCarousel from "react-native-reanimated-carousel";
// Type imports
import { CarouselRenderItem, CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import { sliderImage } from "../types";
import { useSharedValue } from "react-native-reanimated";
import Pagination from "./Pagination";

const data = dummyData.sliderImages;

const SLIDER_WIDTH = SCREEN_WIDTH;
const SLIDER_HEIGHT = SCREEN_WIDTH * (8 / 12);

const Carousel = () => {
    const animatedValue = useSharedValue<number>(0);

    return (
        <>
            <ReanimatedCarousel
                data={data}
                renderItem={renderItem}
                width={SLIDER_WIDTH}
                height={SLIDER_HEIGHT}
                onProgressChange={(offsetProgress) => (animatedValue.value = offsetProgress)}
            />
            <Pagination animationValue={animatedValue} length={data.length} />
        </>
    );
};

export default Carousel;

const renderItem: CarouselRenderItem<sliderImage> = (props: CarouselRenderItemInfo<sliderImage>) => {
    return <CarouselItem {...props} />;
};

const styles = StyleSheet.create({});
