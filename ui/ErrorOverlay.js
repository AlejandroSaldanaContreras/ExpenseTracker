import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Button from './Button';

function ErrorOverlay({message, onConfirm}){
    return(
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error has ocurred.</Text>
            <Text style={styles.text}>{message}</Text>
            <Button>Okay</Button>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary800,
    },
    text:{
        textAlign: 'center',
        marginBottom: 8,
        color: 'white',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
})