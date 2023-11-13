//React
import { useState, useEffect } from 'react';
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";


//Screens
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import DashboardScreen from "./screens/dashboard";
import BrowseScreen from "./screens/browse";
import SavedScreen from "./screens/saved";


//Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";



//Instances
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const TabNav = () => {
    //Hooks
    const colorScheme = useColorScheme();

    //States
    const [style, setStyle] = useState(styles.lightStyle)

    //Lifecycle
    useEffect(() => {
        colorScheme == "dark" ? setStyle(styles.darkStyle) : setStyle(styles.lightStyle)
    }, [colorScheme])

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: style.color,
                tabBarActiveTintColor: style.tintColor,
                tabBarStyle: {
                    backgroundColor: style.backgroundColor,
                    borderTopColor: style.tintColor,
                    borderTopWidth: 2,
                },
        }}>
            <Tab.Screen name={'Dashboard'} component={DashboardScreen} options={{
                tabBarIcon:({ color }) => (<MaterialIcons name={'dashboard'} size={28} color={color}/>),
            }}/>
            <Tab.Screen name={'Browse'} component={BrowseScreen} options={{
                tabBarIcon:({ color }) => (<Entypo name={'magnifying-glass'} size={28} color={color}/>),
            }}/>
            <Tab.Screen name={'Saved'} component={SavedScreen} options={{
                tabBarIcon:({ color }) => (<FontAwesome name={'bookmark'} size={28} color={color}/>),
            }}/>
        </Tab.Navigator>
    )
}

const App = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
          >
              <Stack.Screen name={'Home'} component={HomeScreen}/>
              <Stack.Screen name={'Login'} component={LoginScreen}/>
              <Stack.Screen name={'App'} component={TabNav}/>
          </Stack.Navigator>
          <StatusBar style='auto' />
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightStyle: {
        backgroundColor: '#f7fafd',
        color: '#061118',
        tintColor: '#3fa5ee'
    },
    darkStyle: {
        backgroundColor: '#020508',
        color: '#e7f2f9',
        tintColor: '#1177c0'
    }
});



export default App;