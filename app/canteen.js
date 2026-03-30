import { View, Text, StyleSheet } from 'react-native';

export default function Canteen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cantina da Faculdade</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:28,
        fontWeight:'bold'
    }
});