import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import Button from "../../ui/Button";
import { useState } from "react";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";


function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }){
    const [inputs, setInputs] = useState({
        amount: { 
            value: defaultValues ? defaultValues.amount.toString() : '', 
            isValid:  true,
        },
        date:{ 
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid:  true,
        },
        description:{
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        }
    });

    function inputChangedHandler( inputIdentifier , enteredValue){
        setInputs((curInputs) => {
            return{
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    }       



    function submitHandler(){
        const expenseData= {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };
        const amountValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateValid = expenseData.date.toString() !== 'Invalid Date';
        const descValid = expenseData.description.trim().length > 0;
        
        if(!amountValid || !dateValid || !descValid){
            setInputs((curInputs) => {
                return{
                    amount: { value: curInputs.amount.value, isValid: amountValid},
                    date: {value: curInputs.date.value, isValid: dateValid},
                    description: {value: curInputs.description.value, isValid: descValid}
                };
            });

            return;
        }
        onSubmit(expenseData);
    }

    const fromIsInvallid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;
    return(
        <View style={styles.formContainer}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label="Amount" invalid ={!inputs.amount.isValid} 
                    textInput={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputs.amount.value,
                    
                }}/>
                <Input  style={styles.rowInput} label="Date" invalid ={!inputs.date.isValid}
                    textInput={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputs.date.value,
                }}/>
            </View>
           
            <Input label="Description"  invalid ={!inputs.description.isValid}
                textInput={{
                multiline: true,
                autoCorrect: false,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputs.description.value,
            }}/>
            {fromIsInvallid && <Text style={styles.errorText}>Invalid input values - Please check your inputs.</Text>}
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={onCancel} >Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
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
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    },
    errorText: {
        color: GlobalStyles.colors.error50,
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    }
});