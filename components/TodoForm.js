import react, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { Picker } from "react-native-picker"; // Import Picker
import DateTimePicker from '@react-native-community/datetimepicker';

// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])
export default function TodoForm({ onAddTodo = f => f }) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const [priority, setPriority] = useState("Low");
    const [completed, setCompleted] = useState(false);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const handleSubmit = () => {
        onAddTodo({
            name,
            description,
            dueDate,
            priority,
            completed,
        });
        console.log(name, description, dueDate, priority);
        setName("");
        setDescription("");
        setDueDate("");
        setPriority("Low");
    }


    const onChange = (e, selectedDate) => {
        setDueDate(selectedDate);
        setShow(false);
        console.log("OnChange reached - setting show to false");
    };

    const showMode = (currentMode) => {
        setMode(currentMode);
        console.log("showMode reached - setting show to true");

    };

    const showDatepicker = () => {
        setShow(true);
        showMode('date');
        console.log("showDatepicker reached");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Name..."
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Description..."
                value={description}
                onChangeText={setDescription}
            />
            {/* Priority Picker */}
            {/* <Picker
                selectedValue={priority}
                style={styles.dropdown}
                onValueChange={(itemValue) =>
                    setPriority(itemValue)
                }>
                <Picker label="Low" value="Low" />
                <Picker label="Medium" value="Medium" />
                <Picker label="High" value="High" />
                <Picker label="URGENT" value="URGENT" />
            </Picker> */}
            <Button onPress={() => showDatepicker()} title="Show date picker!" />
            {show && (
                <DateTimePicker
                    value={dueDate}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
            <Text>{dueDate.toLocaleDateString()}</Text>
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'rgba(255,0,0,0.1)',
        flex: 1,

    },
    title: {
        //backgroundColor: 'rgba(0,255,0,0.1)',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        //backgroundColor: 'rgba(0,0,255,0.1)',
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        //backgroundColor: 'rgba(255,0,0,0.1)',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    button: {
        //backgroundColor: 'rgba(0,255,0,0.1)',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    dropdown: {
        height: 40,
        margin: 10,
        paddingLeft: 10,
        borderWidth: 2,
        borderRadius: 2,
    },
});