import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});