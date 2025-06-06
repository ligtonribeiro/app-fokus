import { Text, View, FlatList } from 'react-native';
import TaskItem from '../../components/TaskItem';
import { FokusButton } from '../../components/FokusButton';
import { IconPlus } from '../../components/Icons';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';
import useTaskContext from '../../components/context/useTaskContext';

export default function Tasks() {
  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
                onToggleComplete={() => toggleTaskCompleted(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<View style={{ height: 8 }} />}
            ListHeaderComponent={<Text style={styles.text}>Lista Tarefas</Text>}
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title='Adicionar nova tarefa'
                  icon={<IconPlus outline />}
                  outline
                  onPress={() => router.navigate('/add-task')}
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    gap: 40,
    alignItems: 'center',
  },
  wrapper: {
    gap: 40,
    width: '90%',
  },
  inner: {
    gap: 8,
  },
  text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
    marginBottom: 16,
  },
});
