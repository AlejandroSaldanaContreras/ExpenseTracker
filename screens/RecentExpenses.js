import { Text } from "react-native";
import ExpensesOuput  from "../components/ExpensesOuput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext);
   
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        
    }); 
   
    return(
        <ExpensesOuput expensesPeriod="Last 7 days"/>
    );
}

export default RecentExpenses;