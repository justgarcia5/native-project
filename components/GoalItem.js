import React from 'react';
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItem} on>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ccc'
  }
})

export default GoalItem;
