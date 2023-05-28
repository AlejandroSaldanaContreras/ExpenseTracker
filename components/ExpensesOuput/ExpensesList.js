import { Text, FlatList } from "react-native";


function renderExpense(itemData){
    
    return(
        <Text>{itemData.item.description}</Text>
    );
}

function ExpensesList({ expenses }){
    return(
        <FlatList data={expenses}  renderItem={renderExpense} 
                    keyExtractor={(item) => item.id} />
    );
}

export default ExpensesList;