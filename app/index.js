import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>FIAP | APP</Text>
            <Text style={styles.descricao}>Página Home</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5' 
    },

    titulo: { 
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24 
    },

    descricao: {
        fontSize: 18,
        color: '#666',  
    }

});