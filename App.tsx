
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

//Instances
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Renderers
const TabNav = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name={'Dashboard'} component={DashboardScreen} options={{
                tabBarIcon:() => (<MaterialIcons name={'dashboard'} size={28}/>),
                headerShown: false,
            }}/>
            <Tab.Screen name={'Browse'} component={BrowseScreen} options={{
                tabBarIcon:() => (<Entypo name={'magnifying-glass'} size={28}/>),
                headerShown: false,
            }}/>
            <Tab.Screen name={'Saved'} component={SavedScreen} options={{
                tabBarIcon:() => (<FontAwesome name={'bookmark'} size={28}/>),
                headerShown: false,
            }}/>
        </Tab.Navigator>
    )
}

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={'Home'} component={HomeScreen} options={{
                  headerShown: false,
              }}/>
              <Stack.Screen name={'Login'} component={LoginScreen} options={{
                  headerShown: false,
              }}/>
              <Stack.Screen name={'App'} component={TabNav} options={{
                  headerShown: false,
              }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;