import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#E83D84' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="classroom"
                options={{
                    title: 'Aulas',
                    tabBarIcon: ({ color }) => <Ionicons name="tv-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="bulletin"
                options={{
                    title: 'Boletim',
                    tabBarIcon: ({ color }) => <Ionicons name="school-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="subjects"
                options={{
                    title: 'Matérias',
                    tabBarIcon: ({ color }) => <Ionicons name="book-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    title: 'Calendário',
                    tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
