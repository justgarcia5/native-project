import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Modal } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="Course Goal" style={styles.input} onChangeText={event => setEnteredGoal(event)} value={enteredGoal} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    width: '40%'
  },
  input: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: '50%',
  }
});

export default GoalInput;
