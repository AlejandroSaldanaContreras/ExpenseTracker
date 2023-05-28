import { Text } from "react-native";
import ExpensesOuput  from "../components/ExpensesOuput/ExpensesOutput";

function RecentExpenses(){
    return(
        <ExpensesOuput expensesPeriod="Last 7 days"/>
    );
}

export default RecentExpenses;