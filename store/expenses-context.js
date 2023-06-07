import { createContext, useReducer } from "react";

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
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
    switch (action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE': 
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default: 
            return state; 
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    
    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id) { 
        dispatch({ type: 'DELETE', payload: id });
    }

    function editExpense(id, expenseData) { 
        dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData} });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: editExpense
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;