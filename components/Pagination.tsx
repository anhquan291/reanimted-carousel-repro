// React Native imports
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
// Components imports
import Animated from "react-native-reanimated";
import PaginationItem from "./PaginationItem";

interface Pagination {
    length: number;
    animationValue: Animated.SharedValue<number>;
    onItemPress: (index: number) => void;
}

const Pagination: React.FC<Pagination> = ({ animationValue, length, onItemPress }) => {
    return (
        <View style={styles.container}>
            {Array(length)
                .fill(0)
                .map((_, index) => (
                    <PaginationItem key={index} animationValue={animationValue} index={index} length={length} onItemPress={onItemPress} />
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
        paddingVertical: Platform.OS === "android" ? 3 : 5,
        flexWrap: "wrap",
    },
});
