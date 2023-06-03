import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOuput/ExpensesOutput";
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    return(
        <ExpensesOutput expenses={expensesCtx} expensesPeriod="Total" />
    );
}

export default AllExpenses;