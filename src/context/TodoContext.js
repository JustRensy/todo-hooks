import { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext();

export const TodoProivder = (props) => {
	const [todos, setTodos] = useState([
		{ id: uuid(), text: 'Buy Milk', completed: false },
		{ id: uuid(), text: 'Learn React', completed: true },
		{ id: uuid(), text: 'Watch Football', completed: false },
	]);

	return (
		<TodoContext.Provider value={[todos, setTodos]}>
			{props.children}
		</TodoContext.Provider>
	);
};
