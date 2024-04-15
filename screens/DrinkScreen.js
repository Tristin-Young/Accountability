import react, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { generate } from "shortid";
import DrinkForm from "../components/DrinkForm";


const useDrinks = () => {
    const [drinks, setDrinks] = useState([]);
    const addDrink = drink => {
        const newDrink = {
            id: generate(),
            name: drink.name,
            category: drink.category,
            calories: drink.calories,
            description: drink.description
        }
        setDrinks([newDrink, ...drinks]);
    };
    return { drinks, addDrink };
}

export default function DrinkScreen() {
    const { drinks, addDrink } = useDrinks();
    return (
        <View style={styles.container}>
            <Text>Drink Screen</Text>
            <DrinkForm onAddDrink={addDrink} />
            {drinks.map((drink, index) => (
                <View key={index}>
                    <Text>{drink.name}</Text>
                    <Text>{drink.category}</Text>
                    <Text>{drink.calories}</Text>
                    <Text>{drink.description}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    }
});