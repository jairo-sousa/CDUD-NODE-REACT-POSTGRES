import { Table, Thead, Tr } from "@chakra-ui/react";
import { TableTh } from "./TableTh";
import { TableBody } from "./TableBody";
import { User } from "../types/User";

type DataTableProps = {
	users?: User[];
};
export function DataTable({ users }: DataTableProps) {
	return (
		<Table
			w="100%"
			maxW="80rem"
			p="2rem"
			bg="#fff"
			borderRadius="0.5rem"
			m="2rem auto"
			boxShadow="0 0 0.5rem #ccc"
			wordBreak="break-all"
		>
			<Thead>
				<Tr display="flex" justifyContent="center">
					<TableTh label="Name" />
					<TableTh label="Email" />
					<TableTh label="Phone" onlyWeb />
					<TableTh w="5%" />
					<TableTh w="5%" />
				</Tr>
			</Thead>
			<TableBody users={users} />
		</Table>
	);
}
