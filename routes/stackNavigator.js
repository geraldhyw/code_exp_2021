import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BulletinPage from '../screens/bulletin';
import FavorDetails from '../screens/favorDetails';

const Stack = createStackNavigator();

export default function StackNav({route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bulletin" component={BulletinPage} initialParams={route.params}/>
      <Stack.Screen name="Favour Details" component={FavorDetails} />
    </Stack.Navigator>
  );
}