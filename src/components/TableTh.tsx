import { Th } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export function TableTh() {
	const [isSmallerThan500] = useMediaQuery("(min-width: 50rem)");

	return (
		<Th textAlign="start" borderBottom="inset" pb="0.5rem" display={``}></Th>
	);
}
