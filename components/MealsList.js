import React from 'react';
import {View, FlatList, Text, StyleSheet} from "react-native";
import MealItem from "./MealItem";
import {useSelector} from "react-redux";


const MealsList = props =>{
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const renderGridItem = (itemData) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            image={itemData.item.imageUrl}
            affordability={itemData.item.affordability.toUpperCase()}
            complexity={itemData.item.complexity.toUpperCase()}
            onSelectMeal={()=>{
                props.navigation.navigate({
                    routeName: 'MealDetail', params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav : isFavorite
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
