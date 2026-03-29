import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Classroom() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Aulas</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff' 
    },

    titulo: { 
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12 
    },
});