import { Flex, Input, Text } from "@chakra-ui/react";
type FieldSetProps = {
	innerRef: React.Ref<HTMLInputElement>;
	label: string;
	type?: string;
};
export function Fieldset({ label, type, innerRef }: FieldSetProps) {
	return (
		<Flex as="fieldset" direction="column">
			<Text as="label">{label}</Text>
			<Input
				w="12rem"
				h="4rem"
				px="1rem"
				border="0.1rem solid #bbb"
				borderRadius="0.5rem"
				ref={innerRef}
				name={label}
				type={type && type}
			></Input>
		</Flex>
	);
}
