import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([{ id: '1', value: 'this default value'}])

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }])
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            itemData={itemData}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
