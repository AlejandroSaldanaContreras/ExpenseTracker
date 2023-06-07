import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

function ExpenseForm(){
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: '',
    });

    function inputChangedHandler( inputIdentifier , enteredValue){
        setInputValues((curInputValues) => {
            return{
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }       


    return(
        <View style={styles.formContainer}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label="Amount" textInput={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount,
                }}/>
                <Input  style={styles.rowInput} label="Date" textInput={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date,
                }}/>
            </View>
           
            <Input label="Description" textInput={{
                multiline: true,
                autoCorrect: false,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description,
            }}/>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    inputsRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    formContainer:{
        marginTop: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    }
});