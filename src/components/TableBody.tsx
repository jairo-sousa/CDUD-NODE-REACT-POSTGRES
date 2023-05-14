import { Tbody, Tr } from "@chakra-ui/react";
import { TableTd } from "./TableTd";
import { User } from "../types/User";

import { FaEdit, FaTrash } from "react-icons/fa";
import { SetUsers } from "../types/SetUsers";
import { SetOnEdit } from "../types/SetOnEdit";
import axios from "axios";
import { toast } from "react-toastify";

type TableBodyProps = {
	users?: User[];
	setUsers: SetUsers;
	setOnEdit: SetOnEdit;
};

export function TableBody({ users, setUsers, setOnEdit }: TableBodyProps) {
	function handleEdit(user: User) {
		setOnEdit(user);
	}

	const handleDelete = async (id: number) => {
		await axios
			.delete("http://localhost:8800/" + id)
			.then(({ data }) => {
				const newUsers = users?.filter((user) => user?.id !== id);

				setUsers(newUsers);
				toast.success(data);
			})
			.catch(({ data }) => toast.error(data));
	};

	return (
		<Tbody>
			{users?.map((user, i) => (
				<Tr
					key={`${user.name} - ${i}`}
					display="flex"
					justifyContent="space-between"
				>
					<TableTd label={user.name} />
					<TableTd label={user.email} />
					<TableTd label={user.phone} onlyWeb />
					<TableTd center w="5%" cursor="pointer">
						<FaEdit onClick={() => handleEdit(user)} />
					</TableTd>
					<TableTd center w="5%" cursor="pointer">
						<FaTrash onClick={() => handleDelete(user.id)} />
					</TableTd>
				</Tr>
			))}
		</Tbody>
	);
}
