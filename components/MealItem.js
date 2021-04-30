import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from "./DefaultText";

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealHeader, ...styles.mealRow}}>
                        <ImageBackground style={styles.bgImage} source={{uri: props.image}}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealDetail, ...styles.mealRow}}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity}</DefaultText>
                        <DefaultText>{props.affordability}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height: '15%'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow:'hidden',
        marginVertical:10
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color:'white',
        textAlign:'center'
    }
})

export default MealItem;
