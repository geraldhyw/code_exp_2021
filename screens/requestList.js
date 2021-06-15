import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RequestList() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Ask for a favor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});