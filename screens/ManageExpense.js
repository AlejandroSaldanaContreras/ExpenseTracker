import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import IconButton from "../ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../ui/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }){
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);
    
    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();

    }
    function cancelHandler(){
        navigation.goBack();

    }
    function confirmHandler(){
        if(isEditing) {
            expensesCtx.updateExpense(editedExpenseId, {description: 'Books', amount: 15.55, date: new Date('2023-06-02')});
        } else {
            expensesCtx.addExpense({description: 'Books', amount: 15.55, date: new Date('2023-06-02'), });
        }
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler} >Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            <View  style={styles.deleteContainer}>
                {isEditing && (
                <IconButton name="trash" color={GlobalStyles.colors.error500} 
                            size={36} onPress={deleteExpenseHandler} />
                )}
            </View>
        </View>
       
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
         alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    }
});