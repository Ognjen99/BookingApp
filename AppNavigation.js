import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from './screens/FirstScreen';
import HomePage from './screens/HomePage';
import Spa from './screens/Spa';
import Rooms from './screens/Rooms';
import BottomNavigation from './Navigation/navigation';
import ImageAlbum from './screens/imageAlbum';
import FullImageScreen from './screens/fullImageScreen';
import FullImageSpaScreen from './screens/fullImageSpaScreen';
import ReservationScreen from './screens/ReservationScreen'

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="ReservationScreen" component={ReservationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FullImageSpaScreen" component={FullImageSpaScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FullImageScreen" component={FullImageScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ImageAlbum" component={ImageAlbum} options={{ headerShown: false }} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Spa" component={Spa} options={{ headerShown: false }} />
                <Stack.Screen name="Rooms" component={Rooms} options={{ headerShown: false }} />
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;