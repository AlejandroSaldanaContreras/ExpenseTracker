import axios from 'axios';

const baseUrl = "https://expense-tracker-d21b8-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData){
    const response = await axios.post(baseUrl + 'expenses.json',
    expenseData
    );
    const id = response.data.name;
    return id;
}

export function updateExpense(id, expenseData){
    return axios.put(baseUrl + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id){
    return axios.delete(baseUrl + `/expenses/${id}.json`);
}


export async function fetchExpenses(){
    const response = await axios.get(baseUrl + 'expenses.json');

    const expenses = [];

    for(const key in response.data){
        const expenseObj = {
            id: key, 
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        expenses.push(expenseObj);
    }

    return expenses;
}