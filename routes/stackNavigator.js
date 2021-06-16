import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BulletinPage from '../screens/bulletin';
import FavorDetails from '../screens/favorDetails';

const Stack = createStackNavigator();

export default function StackNav({route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { 
          backgroundColor: '#FAFBFD',
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
        headerTitleContainerStyle: { 
          paddingHorizontal: 14 
        } 
      }}
    >
      <Stack.Screen 
        name="Bulletin" 
        options={{ 
          title: 'Neighbourhood Bulletin Board',
          headerStyle: {
            backgroundColor: "#FAFBFD",
            shadowColor: 'transparent',
          },
        }} 
        component={BulletinPage} 
        initialParams={route.params}/>
      <Stack.Screen 
        name="Favour Details" 
        options={{ 
          title: 'Review',
          headerStyle: {
            backgroundColor: "#FAFBFD",
            shadowColor: 'transparent',
          },
          headerLeft: () => null,
        }} 
        component={FavorDetails} />
    </Stack.Navigator>
  );
}