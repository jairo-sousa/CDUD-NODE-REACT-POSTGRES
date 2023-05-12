import { Flex, Input, Text } from "@chakra-ui/react";
type FieldSetProps = {
	label: string;
	type?: string;
};
export function Fieldset({ label, type }: FieldSetProps) {
	return (
		<Flex as="fieldset" direction="column">
			<Text as="label">{label}</Text>
			<Input
				w="12rem"
				h="4rem"
				px="1rem"
				border="0.1rem solid #bbb"
				borderRadius="0.5rem"
				name={label}
				type={type && type}
			></Input>
		</Flex>
	);
}
