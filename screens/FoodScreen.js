import react, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { generate } from "shortid";
import FoodForm from "../components/FoodForm";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const addFood = food => {
        const newFood = {
            id: generate(),
            name: food.name,
            calories: food.calories,
            description: food.description
        }
        setFoods([newFood, ...foods]);
    };
    return { foods, addFood };
}

export default function FoodScreen() {
    const { foods, addFoods } = useFoods();
    return (
        <View style={styles.container}>
            <Text>Food Screen</Text>
            <FoodForm onAddFood={addFoods} />
            {foods.map((food, index) => (
                <View key={index}>
                    <Text>{food.name}</Text>
                    <Text>{food.calories}</Text>
                    <Text>{food.description}</Text>
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