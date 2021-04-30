import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/colors";
import {Ionicons} from '@expo/vector-icons';
import FavoritesScreen from "../screens/FavoritesScreen";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Platform} from "react-native-web";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: 'white',
    headerTitle: 'A screen'
}

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,

        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});
const tabsScreenConfig = {
    MealsAll: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primary,
            tabBarLabel: 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            }
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle:{
            backgroundColor: Colors.primary
        }
    })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabBarOptions: {
            labelStyle:{
                fontFamily:'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white',
        headerTitle: 'A screen'
    }
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }

});

export default createAppContainer(MainNavigator);
