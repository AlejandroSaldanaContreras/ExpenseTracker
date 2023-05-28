import { View, Pressable, Text, StyleSheet } from 'react-native';

function ExpenseItem({ description, date, amount }){
    return(
       <Pressable>
            <View>
                <View>
                    <Text>{description}</Text>
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text>{amount}</Text>
                </View>
            </View>
       </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({

});