import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
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

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,

    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white',
        headerTitle: 'A screen'
    }
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white',
        headerTitle: 'A screen'
    }
});
const tabsScreenConfig = {
    MealsAll: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primary
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
const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
    })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabsScreenConfig,
        tabBarOptions: {
            activeTintColor: Colors.accentColor

        }
    });

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle:{
            fontFamily: 'open-sans-bold'
        }
    }

});

export default createAppContainer(MainNavigator);
