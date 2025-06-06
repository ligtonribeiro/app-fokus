import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TasksProvider } from '../components/context/TaskProvider';

export default function Layout() {
  return (
    <TasksProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#021123',
            },
            drawerLabelStyle: {
              color: '#FFF',
            },
            headerStyle: {
              backgroundColor: '#021123',
            },
            headerTintColor: '#FFF',
          }}
        >
          <Drawer.Screen
            name='index'
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name='pomodoro'
            options={{ drawerLabel: 'Pomodoro', title: '' }}
          />
          <Drawer.Screen
            name='tasks/index'
            options={{ drawerLabel: 'Listas de Tarefas', title: '' }}
          />
          <Drawer.Screen
            name='add-task/index'
            options={{
              drawerItemStyle: { display: 'none' },
              title: '',
              headerLeft: () => {
                return (
                  <Ionicons
                    name='arrow-back'
                    size={24}
                    color='#FFF'
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate('/tasks')}
                  />
                );
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
