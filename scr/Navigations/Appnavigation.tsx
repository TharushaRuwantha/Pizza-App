import { View, Text } from 'react-native'
import React from 'react'
import {CardAnimationContext, CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import CustomLable from '../components/CustomLable';
import Login from '../components/Login';
import MyComponent from '../components/MyComponent';
import Signup from '../components/Signup';
import HomeScreen from '../components/HomeScreen';
import { Screen } from 'react-native-screens';

const Stack = createStackNavigator();
const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SampleLogin" component={SampleLogin} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} options={
            {
                cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }
        }/>
 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CustomLable} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigation