import React from "react";
import {View, Text, StyleSheet} from "react-native";
import MealsList from "../components/MealsList";
import {useSelector} from "react-redux";

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import CategoriesScreen from "./CategoriesScreen";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <DefaultText>No favorite meals found. Start adding some!</DefaultText>
        </View>
    }
    return (
        <MealsList listData={favMeals} navigation={props.navigation}/>
    );
};


FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>
    }
};
const styles = StyleSheet.create({
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default FavoritesScreen;
