import react, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";

export default function FoodForm({ onAddFood = f => f }) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        onAddFood({ name, calories, description });
        console.log(name, calories, description);
        setName("");
        setCalories("");
        setDescription("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food Form</Text>
            <Text style={styles.description}>
                For basic daily food tracking
            </Text>
            {/* <View style={styles.inputCentering}> */}
            <TextInput
                style={styles.input}
                placeholder="Name..."
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Calories..."
                value={calories}
                onChangeText={setCalories}
            />
            <TextInput
                style={styles.input}
                placeholder="Description..."
                value={description}
                onChangeText={setDescription}
            />
            <Pressable
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        paddingVertical: 10,
        //backgroundColor: 'rgba(0,0,255,0.1)',
        fontSize: 24,
        textAlign: 'center',
    },
    inputCentering: {

        // alignItems: 'center',
    },
    input: {
        //backgroundColor: 'rgba(0,0,255,0.1)',
        height: 40,
        margin: 10,
        paddingLeft: 10,
        borderWidth: 2,
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        margin: 10,
        borderWidth: 2,
        borderRadius: 5,
    },
    buttonText: {
        //backgroundColor: 'rgba(0,0,255,0.1)',
        fontSize: 18,
        fontWeight: 'bold',

    },
});