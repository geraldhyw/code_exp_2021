import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterPage from "./screens/register";
import BulletinPage from "./screens/bulletin";
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './routes/stackNavigator';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return isLoggedIn ? 
  (<NavigationContainer>
    <StackNav></StackNav>
  </NavigationContainer>)
  :
  (<RegisterPage setLoggedIn={setLoggedIn}></RegisterPage>)
}
