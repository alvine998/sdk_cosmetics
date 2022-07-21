import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native'
import Home from './src/pages/Home';
import Intro from './src/pages/IntroSlide';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Splash from './src/pages/Splash';

const App = () => {
  const Stack = createStackNavigator()
  const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Intro' component={Intro} options={horizontalAnimation} />
          <Stack.Screen name='Login' component={Login} options={horizontalAnimation} />
          <Stack.Screen name='Register' component={Register} options={horizontalAnimation} />
          <Stack.Screen name='Home' component={Home} options={horizontalAnimation} />
          <Stack.Screen name='Splash' component={Splash} options={horizontalAnimation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App