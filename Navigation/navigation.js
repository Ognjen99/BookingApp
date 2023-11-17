import React from 'react';
import FirstScreen from '../screens/FirstScreen';
import Rooms from '../screens/Rooms';
import Spa from '../screens/Spa';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerTitleAlign: 'center'
        }}>
            <Tab.Screen name='Rooms' component={Rooms}
                options={{
                    title: "Hotel Vidikovac",
                    headerTintColor: "#d2bd7f",
                    headerStyle: {
                        backgroundColor: "#2E2E2E",
                    },
                    tabBarIcon: (focused) => (
                        <Icon name="home" size={25}
                            style={{ color: focused.focused ? "#d2bd7f" : "#2E2E2E" }} />
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen name='Spa' component={Spa}
                options={{
                    title: " Hotel Vidikovac",
                    headerTintColor: "#d2bd7f",
                    headerStyle: {
                        backgroundColor: "#2E2E2E"
                    },
                    tabBarIcon: (focused) => (
                        <Icon name="swimming-pool" size={25}
                            style={{ color: focused.focused ? "#d2bd7f" : "#2E2E2E" }} />
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen name='FirstScreen' component={FirstScreen}
                options={{
                    title: " Hotel Vidikovac",
                    headerTintColor: "#d2bd7f",
                    headerStyle: {
                        backgroundColor: "#2E2E2E"
                    },
                    tabBarIcon: (focused) => (
                        <Icon name="coffee" size={25}
                            style={{ color: focused.focused ? "#d2bd7f" : "#2E2E2E" }} />
                    )
                }}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default BottomNavigation;