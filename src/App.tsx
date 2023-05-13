import { Flex, Heading } from "@chakra-ui/react";
import "./styles/global.css";
import { toast, ToastContainer } from "react-toastify";
import { Form } from "./components/Form";
import { DataTable } from "./components/DataTable";
import { useEffect, useState } from "react";
import { User } from "./types/User";
import axios from "axios";

export function App() {
	const [users, setUsers] = useState<User[]>();
	const [onEdit, setOnEdit] = useState(null);

	const getUsers = async () => {
		try {
			const res = await axios.get("http://localhost:8800");
			setUsers(res.data.sort((a: User, b: User) => (a.name > b.name ? 1 : -1)));
		} catch (error: any) {
			toast.error(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, [setUsers]);

	return (
		<Flex
			w="100%"
			maxW="80rem"
			mt="2rem"
			direction="column"
			align="center"
			gap="1rem"
		>
			<Heading as="h1" fontSize="3.2rem">
				USERS
			</Heading>
			<Form />
			<DataTable users={users} />
			<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
		</Flex>
	);
}
