import react, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { generate } from "shortid";
import TodoForm from "../components/TodoForm";

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        const newTodo = {
            id: generate(),
            name: todo.name,
            description: todo.description,
            dueDate: todo.dueDate,
            priority: todo.priority,
            completed: false
        }
        setTodos([newTodo, ...todos]);
    };
    return { todos, addTodo };
}

export default function TodoScreen() {
    const { todos, addTodo } = useTodos();
    return (
        <View>
            <Text>Todo Screen</Text>
            <TodoForm onAddTodo={addTodo} />
            {todos.map((todo, index) => (
                <View key={index}>
                    <Text>{todo.name}</Text>
                    <Text>{todo.description}</Text>
                    <Text>{todo.dueDate}</Text>
                    <Text>{todo.priority}</Text>
                </View>
            ))}
        </View>
    );
}