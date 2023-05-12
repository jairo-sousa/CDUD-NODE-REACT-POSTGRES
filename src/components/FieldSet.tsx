import { Flex, Input, Text } from "@chakra-ui/react";

export function Fieldset() {
	return (
		<Flex as="fieldset" direction="column">
			<Text as="label">Name</Text>
			<Input
				w="12rem"
				h="4rem"
				px="1rem"
				border="0.1rem solid #bbb"
				borderRadius="0.5rem"
				name={"name"}
				type={"text"}
			></Input>
		</Flex>
	);
}
