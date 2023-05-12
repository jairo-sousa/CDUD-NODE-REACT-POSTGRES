import { Flex, Heading } from "@chakra-ui/react";
import "./styles/global.css";
import { toast, ToastContainer } from "react-toastify";
import { Form } from "./components/Form";

export function App() {
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
			<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
		</Flex>
	);
}
