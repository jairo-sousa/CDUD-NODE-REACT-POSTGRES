import { Td } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

type TableTdProps = {
	label?: string;
	children?: React.ReactNode;
	onlyWeb?: boolean;
	center?: boolean;
	w?: string;
	cursor?: string;
};
export function TableTd({
	label,
	children,
	onlyWeb,
	center,
	w,
	cursor,
}: TableTdProps) {
	const [isSmallerThan500] = useMediaQuery("(max-width: 50rem)");

	return (
		<Td
			textAlign={center ? "center" : "start"}
			pt="1.5rem"
			display={`${isSmallerThan500 && onlyWeb ? "none" : "flex"}`}
			flex={w ? "" : "1"}
			w={w ? w : "auto"}
			cursor={cursor && cursor}
		>
			{label || children}
		</Td>
	);
}
