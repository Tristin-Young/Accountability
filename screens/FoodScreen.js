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
            description: food.description,
            date: new Date(),
        }
        setFoods([newFood, ...foods]);
    };
    return { foods, addFood };
}

export default function FoodScreen() {
    const { foods, addFoods } = useFoods();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Food Screen</Text>
            <FoodForm onAddFood={addFoods} />
            {/* {foods.map((food, index) => (
                <View key={index}>
                    <Text>{food.name}</Text>
                    <Text>{food.calories}</Text>
                    <Text>{food.description}</Text>
                </View>
            ))} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',  // Light grey background
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: '600',  // Semi-bold
        color: '#333',  // Dark grey for text
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderColor: '#e1e1e5',  // Light grey border
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#555',  // Medium grey for sub-headers
        marginTop: 20,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#666',  // Slightly lighter grey for items
        marginTop: 5,
        padding: 10,
        backgroundColor: '#ffffff',  // White background for items
        borderWidth: 1,
        borderColor: '#e1e1e5',  // Light grey borders for items
        borderRadius: 10,  // Rounded corners for items
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        backgroundColor: '#007bff',  // Bootstrap primary blue
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',  // White text for buttons
        fontWeight: '500',
        alignSelf: 'center',
    },
    input: {
        fontSize: 16,
        borderColor: '#ccc',  // Lighter grey for input borders
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    dropdown: {
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
});
