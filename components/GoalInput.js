import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.heading}>Add Your To-Do Work</Text>
        <TextInput
          placeholder="Write Something"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="red" onPress={props.onCancel} />
          <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3f7', // Light purple background color
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default GoalInput;
