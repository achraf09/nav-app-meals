import React from "react";
import  { View, Text, StyleSheet} from "react-native";
import MealsList from "../components/MealsList";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import CategoriesScreen from "./CategoriesScreen";

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
        <MealsList listData={favMeals} navigation={props.navigation}/>
    );
};


FavoritesScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'Favorites',
        headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>
    }
};

export default FavoritesScreen;
