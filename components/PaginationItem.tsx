import React from "react";
import { StyleSheet, View } from "react-native";

const ITEM_SIZE = 10;

const PaginationItem = () => {
    return <View style={styles.container}></View>;
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
