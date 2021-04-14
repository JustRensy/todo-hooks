import { useState, useEffect, createContext } from 'react';
import { db } from '../firebase';
import ClipLoader from 'react-spinners/ClipLoader';

export const TodoContext = createContext();

export const TodoProivder = (props) => {
	useEffect(() => {
		db.collection('todos').onSnapshot((snapshot) => {
			setTodos(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
		});
	}, []);

	const [todos, setTodos] = useState([]);

	return (
		<TodoContext.Provider value={[todos, setTodos]}>
			{props.children}
		</TodoContext.Provider>
	);
};
