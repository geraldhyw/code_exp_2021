import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterPage from "./screens/register";
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './routes/bottomNavigator';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [particulars, setParticulars] = useState({
    postal: ""
  });

  return isLoggedIn ? 
  (<NavigationContainer>
    <BottomNav particulars={particulars}></BottomNav>
  </NavigationContainer>)
  :
  (<RegisterPage setLoggedIn={setLoggedIn} setParticulars={setParticulars}></RegisterPage>)
}
