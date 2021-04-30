import React from 'react';
import {View, FlatList, Text, StyleSheet} from "react-native";
import MealItem from "./MealItem";

const MealsList = props =>{
    const renderGridItem = (itemData) => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            image={itemData.item.imageUrl}
            affordability={itemData.item.affordability.toUpperCase()}
            complexity={itemData.item.complexity.toUpperCase()}
            onSelectMeal={()=>{
                props.navigation.navigate({
                    routeName: 'MealDetail', params: {
                        mealItem: itemData.item
                    }
                });
            }}/>
    };
    return(
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                renderItem={renderGridItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MealsList;
