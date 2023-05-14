import { SetStateAction } from "react";
import { User } from "./User";

export type SetOnEdit = React.Dispatch<SetStateAction<User | undefined>>;
