import React from "react";
import {useSelector } from 'react-redux';
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import { CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
import DefaultText from "../components/DefaultText";
const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const categoryMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catID) >= 0);
    if (categoryMeals.length === 0){
        return <View style={styles.content}>
            <DefaultText>No meals in this category, due to the filter settings!</DefaultText>
        </View>
    }


    return (
        <MealsList listData={categoryMeals} navigation={props.navigation}/>

    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    return {
        headerTitle : selectedCategory.title,

    }

};
const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryMealsScreen;
