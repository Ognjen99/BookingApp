import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import AppNavigation from "./AppNavigation";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
    useEffect(() => {
        RNBootSplash.hide({ fade: true });
    }, [])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AppNavigation />
        </GestureHandlerRootView>
    )
}

export default App;