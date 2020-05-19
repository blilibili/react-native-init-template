/**
 * Created by liyigang on 18/5/2020.
 */
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeIndex from './page/home'
import MyIndexPage from './page/my/index'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeIndex,
        navigationOptions: {
            title: '首页',
            tabBarLabel: '首页'
        }
    },
    MyIndex: {
        screen: MyIndexPage,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的'
        }
    }
},{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state
            let iconName
            if(routeName === 'Home'){
                iconName = 'ios-home'
            } else if(routeName === 'MyIndex') {
                iconName = 'ios-person'
            }
            return <Icon name={iconName} size={20} color={tintColor} />
        }
    })

})
export default BottomNavigator