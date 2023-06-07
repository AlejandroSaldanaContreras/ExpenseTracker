import { TextInput, Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, style, textInput }){

    const inputStyles = [styles.input];

    if(textInput && textInput.multiline){
        inputStyles.push(styles.inputMultiline)
    }

    return(
        <View style={[styles.inputContainer, style]}>
            <Text  style={styles.label}>{label}</Text>
            <TextInput  style={inputStyles} {...textInput} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label:{
        fontSize: 12,
        color: GlobalStyles.colors.primary50,
        marginBottom: 4,
    },
    input:{ 
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary800
    },
    inputMultiline:{
        minHeight: 100,
        textAlignVertical: 'top',
    }
});