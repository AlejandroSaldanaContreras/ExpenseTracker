import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-05-23')
    },
    {
        id: 'e2',
        description: 'Starbucks coffee',
        amount: 5.50,
        date: new Date('2023-05-24')
    },
    {
        id: 'e3',
        description: 'food',
        amount: 15.99,
        date: new Date('2023-06-12')
    },
    {
        id: 'e4',
        description: 'books',
        amount: 10.50,
        date: new Date('2023-07-02')
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses = {DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary500
    }
});