import { Flex } from "@chakra-ui/react";
import { FormEventHandler, useEffect, useRef } from "react";
import { Fieldset } from "./FieldSet";
import { Btn } from "./Btn";
import { User } from "../types/User";
import { SetOnEdit } from "../types/SetOnEdit";
import { toast } from "react-toastify";
import axios from "axios";

type FormProps = {
	onEdit: User | undefined;
	setOnEdit: SetOnEdit;
	getUsers: () => Promise<void>;
};

export function Form({ onEdit, setOnEdit, getUsers }: FormProps) {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const birthdateRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (onEdit) {
			nameRef.current && (nameRef.current.value = onEdit.name);
			emailRef.current && (emailRef.current.value = onEdit.email);
			phoneRef.current && (phoneRef.current.value = onEdit.phone);
			if (birthdateRef.current) {
				const date = new Date(onEdit.birthdate);
				birthdateRef.current.value = date.toISOString().substring(0, 10);
			}
		}
	}, [onEdit]);

	const handleSubmit: FormEventHandler<HTMLDivElement> = async (e) => {
		e.preventDefault();

		const user = {
			name: nameRef.current,
			email: emailRef.current,
			phone: phoneRef.current,
			birthdate: birthdateRef.current,
		};
		if (
			!user.name?.value ||
			!user.email?.value ||
			!user.phone?.value ||
			!user.birthdate?.value
		) {
			return toast.warn("Fill in all fields");
		}
		if (onEdit) {
			await axios
				.put("http://localhost:8800/" + onEdit.id, {
					name: user.name.value,
					email: user.email.value,
					phone: user.phone.value,
					birthdate: user.birthdate.value,
				})
				.then(({ data }) => toast.success(data))
				.catch(({ data }) => toast.error(data));
		}

		user.name.value = "";
		user.email.value = "";
		user.phone.value = "";
		user.birthdate.value = "";

		setOnEdit(undefined);
		getUsers();
	};

	return (
		<Flex
			as="form"
			onSubmit={handleSubmit}
			w="100%"
			maxW="80rem"
			p="2rem"
			bg="#fff"
			align="end"
			justify="space-evenly"
			flexWrap="wrap"
			gap="1rem"
			borderRadius="0.5rem"
			boxShadow="0 0 0.5rem #ccc"
		>
			<Fieldset innerRef={nameRef} label="Name" />
			<Fieldset innerRef={emailRef} label="E-mail" type="email" />
			<Fieldset innerRef={phoneRef} label="Phone" />
			<Fieldset innerRef={birthdateRef} label="Birthdate" />

			<Btn label="SAVE" />
		</Flex>
	);
}
