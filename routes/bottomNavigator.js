import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './stackNavigator';
import Profile from '../screens/profile';
import AcceptList from '../screens/acceptList';
import RequestList from '../screens/requestList';

const Bottom = createBottomTabNavigator();

export default function BottomNav(props) {
  console.log(props.particulars);
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Bulletin" component={StackNav} initialParams={props.particulars}/>
      <Bottom.Screen name="Profile" component={Profile} />
      <Bottom.Screen name="Accept List" component={AcceptList} />
      <Bottom.Screen name="Request List" component={RequestList} />
    </Bottom.Navigator>
  );
}