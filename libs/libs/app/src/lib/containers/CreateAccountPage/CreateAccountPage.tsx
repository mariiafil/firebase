import {
	ChangeEvent, FC, useState
} from "react";
import {
	Button, FormControl, TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, addDoc} from "firebase/firestore";
import { db } from "../../../../fitebaseconfig";
import { useAuth } from "../../contexts";

export const CreateAccountPage: FC = () => {
	const [value, setValue] = useState("");
	const me = useAuth();
	const navigate = useNavigate();

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	const onSubmit = async () => {
		const profileRef = collection(
			db,
			"profiles"
		);

		if (me?.user?.uid) {
			await addDoc(
				collection(
					profileRef,
					me?.user?.uid,
					"accounts"
				),
				{
					title: value,
					operations: []
				}
			).then(() => navigate("/"));
		}
	};

	return (
		<FormControl>
			<TextField onChange={onChange} />
			<Button
				onClick={onSubmit}
				variant="contained"
				size="medium"
			>
				Add account
			</Button>
		</FormControl>
	);
};
