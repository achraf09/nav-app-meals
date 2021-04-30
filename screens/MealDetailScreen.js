import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {
    HeaderButtons,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const MealDetailScreen = props => {
    const mealItem = props.navigation.getParam('mealItem');
    return (
        <View style={styles.screen}>
            <Text>{mealItem.title}</Text>
            <Button title="Go back to Categories" onPress={() => {
                props.navigation.popToTop();

            }}/>
        </View>
    );
};


MealDetailScreen.navigationOptions = navigationData => {
    const mealItem = navigationData.navigation.getParam('mealItem');
    return {
        headerTitle: mealItem.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="search" iconName="ios-star-outline" onPress={() => alert('set as favorite')}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default MealDetailScreen;
