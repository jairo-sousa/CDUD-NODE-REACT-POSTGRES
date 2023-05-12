import { Flex } from "@chakra-ui/react";
import { useRef } from "react";

export function Form({ onEdit }: any) {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<Flex
			as="form"
			ref={formRef}
			p="2rem"
			bg="#fff"
			align="center"
			flexWrap="wrap"
			gap="1rem"
			borderRadius="0.5rem"
			boxShadow="0 0 0.5rem #ccc"
		>
			<Flex as="fieldset" direction="column"></Flex>
		</Flex>
	);
}
