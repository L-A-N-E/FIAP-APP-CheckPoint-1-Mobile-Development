import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { student } from '../data/student.data';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Profile() {
    const [avatar, setAvatar] = useState(null);
    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    if (!result.canceled) {
        setAvatar(result.assets[0].uri);
    }
};
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/FIAP.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Perfil do Aluno</Text>
            </View>

            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <TouchableOpacity 
                    style={styles.avatarContainer}
                    onPress={pickImage}
                >
                    <Image
                        source={
                            avatar
                                ? { uri: avatar }
                                : require('../assets/undefined.jpg')
                        }
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                {/* Card Perfil */}
                <View style={styles.card}>
                    <Text style={styles.name}>
                        {student.name} {student.last_name}
                    </Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>RM</Text>
                        <Text style={styles.value}>{student.rm}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Curso</Text>
                        <Text style={styles.value}>{student.course}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Turma</Text>
                        <Text style={styles.value}>{student.class}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Semestre</Text>
                        <Text style={styles.value}>{student.semester}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Período</Text>
                        <Text style={styles.value}>{student.period}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{student.email}</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        width: 140,
        height: 60
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#FF0C5C',
        backgroundColor: '#eee'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        width: '90%',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF0C5C',
        textAlign: 'center'
    },
    row: {
        marginBottom: 12
    },
    label: {
        fontSize: 12,
        color: '#888'
    },
    value: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333'
    }
});