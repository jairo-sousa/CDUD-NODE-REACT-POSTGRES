import { Th } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

type TableThProps = {
	label?: string;
	children?: React.ReactNode;
	onlyWeb?: boolean;
	w?: string;
};
export function TableTh({ label, children, onlyWeb, w }: TableThProps) {
	const [isSmallerThan500] = useMediaQuery("(max-width: 50rem)");

	return (
		<Th
			textAlign="start"
			borderBottom="inset"
			pb="0.5rem"
			display={`${isSmallerThan500 && onlyWeb ? "none" : "flex"}`}
			flex={w ? "" : "1"}
			w={w ? w : "auto"}
		>
			{label || children}
		</Th>
	);
}
