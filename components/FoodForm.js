import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { FoodContext } from '../contexts/FoodContext';  // Ensure this path is correctly pointing to where FoodContext is defined

function FoodForm() {
    const { addFood } = useContext(FoodContext);  // Destructuring directly from the context
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");

    const handleSubmit = () => {
        addFood({ name, calories });
        setName("");
        setCalories("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Name..."
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Calories..."
                keyboardType="numeric"
                value={calories}
                onChangeText={setCalories}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add Food</Text>
            </Pressable>
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


export default FoodForm;
