/**
 * Created by liyigang on 18/5/2020.
 */
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeIndexPage from './navigator'

const AppStack = createStackNavigator({
    HomeIndex: {
        screen: HomeIndexPage,
        navigationOptions: {
            headerShown: false
        }
    }
}, {
    mode: 'modal',
    headerMode: 'none'
})

export default createAppContainer(AppStack)