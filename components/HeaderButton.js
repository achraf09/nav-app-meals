import React from "react";
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';

import Colors from '../constants/colors';


const CustomHeaderButton = props => {
    return <HeaderButton {...props}
                         IconComponent={Ionicons}
                         iconSize={23}
                         color={Platform.OS === 'android' ? 'white' : Colors.primary}
    />
};

export default CustomHeaderButton;
