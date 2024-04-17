import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from "../screens/HomeScreen"
import ListaScreen from '../screens/ListaScreen';
import ProfileScreen from "../screens/ProfileScreen"

// const Stack = createStackNavigator();
//Stack.Navigator Stack.Screen
const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
    return (
        <Navigator initialRouteName='HomeScreen'>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    title: "Página Inicial",
                    headerTintColor: "blue",
                    headerShown: true
                }}
            />
            <Screen name='profile' component={ProfileScreen} />
            <Screen name='lista' component={ListaScreen} />
        </Navigator>
    )
}