import react, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable, Select, Icon } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';

export default function DrinkForm({ onAddDrink = f => f }) {
    const [name, setName] = useState("");
    // const [category, setCategory] = useState("");
    const [calories, setCalories] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        onAddDrink({ name, calories, description });
        console.log(name, calories, description);
        setName("");
        // setCategory("");
        setCalories("");
        setDescription("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Drink Form</Text>
            <Text style={styles.description}>For basic daily drink tracking</Text>
            <TextInput
                style={styles.input}
                placeholder="Name..."
                value={name}
                onChangeText={setName}
            />
            {/* Use SelectDropdown for category selection */}
            {/* <SelectDropdown
                data={["Water", "Coffee/Tea", "Soda", "Alcohol"]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={styles.dropdownButton}>
                            {selectedItem && (
                                <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                            )}
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem.title) || 'Select your mood'}
                            </Text>
                            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            /> */}
            <TextInput
                style={styles.input}
                placeholder="Calories..."
                keyboardType="numeric" // Ensures numeric input for calories
                value={calories}
                onChangeText={setCalories}
            />
            <TextInput
                style={styles.input}
                placeholder="Description..."
                value={description}
                onChangeText={setDescription}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View>
    );
}

// Continue using your existing styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    input: {
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    dropdown: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        // Additional styling for the dropdown button if needed
    },
});