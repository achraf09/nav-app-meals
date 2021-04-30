import React, {useState, useEffect, useCallback} from "react";
import {View, Text, StyleSheet, Switch, Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from '../constants/colors';

const FilterSwitch = props => {

    return <View style={styles.filterContainer}>
        <Text>{props.name}</Text>
        <Switch
            trackColor={{true: Colors.primary}}
            thumbColor={Platform.OS === 'android' ? Colors.accentColor : ''}
            value={props.value}
            onValueChange={props.onValueChange}
        />

    </View>
}
const FiltersScreen = props => {
    const {navigation} = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilters);
    }, [isVegetarian, isLactoseFree, isVegan, isGlutenFree]);
    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters])
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch name='Gluten-Free' value={isGlutenFree}
                          onValueChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch name='Vegan' value={isVegan} onValueChange={newValue => setIsVegan(newValue)}/>
            <FilterSwitch name='Vegetarian' value={isVegetarian} onValueChange={newValue => setIsVegetarian(newValue)}/>
            <FilterSwitch name='Lactose-Free' value={isLactoseFree}
                          onValueChange={newValue => setIsLactoseFree(newValue)}/>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="save" iconName="ios-save" onPress={() => {
                navData.navigation.getParam('save')();
            }}/>
        </HeaderButtons>
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 20
    }
});
export default FiltersScreen;
