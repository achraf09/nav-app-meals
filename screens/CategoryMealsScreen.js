import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import { CATEGORIES, MEALS} from "../data/dummy-data";
import Colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

    const categoryMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0);


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

});
export default CategoryMealsScreen;
