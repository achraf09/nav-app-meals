import React from "react";
import {TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback} from "react-native";

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback
                style={{flex:1}}
                onPress={props.onSelect}
            >
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLine={2}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>


    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,

    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'

    }
});

export default CategoryGridTile;
