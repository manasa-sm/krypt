import  React from 'react';
//Nav
import  {NavigationContainer}  from '@react-navigation/native';
import  {createStackNavigator}  from '@react-navigation/native-stack';             

import Signup from './../screens/Signup';
import Login from './../screens/Login';
import {Colors} from './../components/styles';
const{primary,tertiary}=Colors;

const Stack = createStackNavigator();

const RootStack = () => {
    return(
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={
                    {
                        headerStyle:{
                            backgroundColor:'transparent'
                        },
                        headerTintColor: tertiary,
                        headerTransparent:true,
                        headerTitle:'',
                        headerLeftContainerStyle:{
                            paddingLeft:20
                        }
                    }}
                    initialRouteName="Login"
                    
                    >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Signup" component={Signup}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}
export default RootStack;
