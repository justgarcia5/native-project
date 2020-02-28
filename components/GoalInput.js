import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.input} onChangeText={event => setEnteredGoal(event)} value={enteredGoal} />
      <Button title='Add' onPress={() => props.addGoalHandler(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
