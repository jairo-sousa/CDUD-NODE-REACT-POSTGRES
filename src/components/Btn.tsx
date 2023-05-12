import { Button } from "@chakra-ui/react";
type BtnProps = {
	label: string;
};
export function Btn({ label }: BtnProps) {
	return (
		<Button
			h="4.2rem"
			p="1.5rem"
			bg="#2c73d2"
			color="white"
			border="none"
			borderRadius="0.5rem"
			cursor="pointer"
			type="submit"
		>
			{label}
		</Button>
	);
}
