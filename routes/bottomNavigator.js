import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNav from './stackNavigator';
import Settings from '../screens/settings';
import AcceptList from '../screens/acceptList';
import RequestList from '../screens/requestList';

const Bottom = createBottomTabNavigator();

export default function BottomNav(props) {
  console.log(props.particulars);
  return (
    <Bottom.Navigator
    tabBarOptions={tabBar}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Bulletin") {
          iconName = "clipboard";
        } else if (route.name === "Accepted") {
          iconName = "checkmark-circle";
        } else if (route.name === "Requested") {
          iconName = "cart";
        } else if (route.name === "Settings") {
          iconName = "settings";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Bottom.Screen name="Bulletin" component={StackNav} initialParams={props.particulars}/>
      <Bottom.Screen name="Accepted" component={AcceptList} />
      <Bottom.Screen name="Requested" component={RequestList} initialParams={props.particulars}/>
      <Bottom.Screen name="Settings" component={Settings} 
      initialParams={props.particulars}/>
    </Bottom.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    // padding: 5,
    // borderWidth: 1,
    // borderColor: "red",
    // borderColorTop: "white",
  },
  tab: {
    // borderWidth: 1,
    // borderColor: "grey",
    // paddingVertical: 0,
    // borderWidth: 1,
    // borderColor: "red",
    
  },
  bar: {
    // marginVertical: 8,
    // marginTop: 4, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor : "#FAFBFD"
  }
});

const tabBar = {
  activeTintColor: "#7041EE",
  // inactiveTintColor: "green",
  activeBackgroundColor: "#FAFBFD",
  inactiveBackgroundColor: "#FAFBFD",
  showLabel: "false",
  style: styles.bar,
  labelStyle: styles.tabLabel,
  tabStyle: styles.tab,
  // allowFontScaling: "true",
}