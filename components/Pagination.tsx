// React Native imports
import React from "react";
import { StyleSheet, View } from "react-native";
// Components imports
import Animated from "react-native-reanimated";
import PaginationItem from "./PaginationItem";

interface Pagination {
    length: number;
    animationValue: Animated.SharedValue<number>;
}

const Pagination: React.FC<Pagination> = ({ animationValue, length }) => {
    return (
        <View style={styles.container}>
            {Array(length)
                .fill(0)
                .map((_, index) => (
                    <PaginationItem key={index} animationValue={animationValue} index={index} length={length} />
                ))}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#bf121d",
        justifyContent: "center",
        paddingVertical: 5,
    },
});
