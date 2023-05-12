import { Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { Fieldset } from "./FieldSet";
import { Btn } from "./Btn";

export function Form({ onEdit }: any) {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<Flex
			as="form"
			ref={formRef}
			p="2rem"
			bg="#fff"
			align="end"
			flexWrap="wrap"
			gap="1rem"
			borderRadius="0.5rem"
			boxShadow="0 0 0.5rem #ccc"
		>
			<Fieldset label="Name" />
			<Fieldset label="E-mail" type="email" />
			<Fieldset label="Phone" />
			<Fieldset label="Date" type="date" />

			<Btn label="SAVE" />
		</Flex>
	);
}
