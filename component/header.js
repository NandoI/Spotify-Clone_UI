import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#121314',
    padding: 14,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Header;
