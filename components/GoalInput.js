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
          <TextInput placeholder="Course Goal" style={styles.input} onChangeText={event => setEnteredGoal(event)} value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title='Cancel' onPress={props.onCancel} color="red" />
          <Button style={styles.button} title='Add' onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between'
  },
  input: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: 100,
    marginTop: 10,
  }
});

export default GoalInput;
