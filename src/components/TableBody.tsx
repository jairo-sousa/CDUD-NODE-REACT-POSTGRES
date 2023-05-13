import { Tbody, Tr } from "@chakra-ui/react";
import { TableTd } from "./TableTd";
import { User } from "../types/User";

import { FaEdit, FaTrash } from "react-icons/fa";

type TableBodyProps = {
	users?: User[];
};

export function TableBody({ users }: TableBodyProps) {
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
						<FaEdit />
					</TableTd>
					<TableTd center w="5%" cursor="pointer">
						<FaTrash />
					</TableTd>
				</Tr>
			))}
		</Tbody>
	);
}
