import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import { CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/colors";

const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>Selected Category: {selectedCategory.title}</Text>
            <Button title="Go to Meal Detail" onPress={()=>{
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
            <Button title="Go Back" onPress={()=>{
                props.navigation.goBack();
            }} />
        </View>
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
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryMealsScreen;
