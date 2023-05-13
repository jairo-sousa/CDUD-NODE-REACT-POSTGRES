import { Td } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

type TableTdProps = {
	label?: string;
	children?: React.ReactNode;
	onlyWeb?: boolean;
	center?: boolean;
	w?: string;
};
export function TableTd({ label, children, onlyWeb, center, w }: TableTdProps) {
	const [isSmallerThan500] = useMediaQuery("(max-widTh: 50rem)");

	return (
		<Td
			textAlign={center ? "center" : "start"}
			w={w ? w : "auto"}
			pt="1.5rem"
			display={`${isSmallerThan500 && onlyWeb ? "none" : "flex"}`}
			flex="1"
		>
			{label || children}
		</Td>
	);
}
