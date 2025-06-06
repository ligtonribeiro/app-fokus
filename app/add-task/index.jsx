import {
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { IconSave } from '../../components/Icons';
import useTaskContext from '../../components/context/useTaskContext';
import { useState } from 'react';
import { router } from 'expo-router';

export default function AddTask() {
  const { addTask } = useTaskContext();
  const [description, setDescription] = useState();

  const submitTask = () => {
    if (!description) {
      return;
    }
    addTask(description);
    setDescription('');
    router.navigate('/tasks');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.text}>Adicionar Tarefas</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.label}>Em que você está trabalhando?</Text>
          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.actions}>
            <Pressable style={styles.button} onPress={submitTask}>
              <IconSave />
              <Text>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
  },
  inner: {
    backgroundColor: '#98A0A8',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    color: '#021123',
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    height: 100,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
