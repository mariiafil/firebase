import { Theme } from "@mui/material";

export const registrationPageStyles = {
	root: {
		bgcolor: (theme: Theme) => theme.palette.secondary.light,
		width: "100%",
		height: "100%",
		minHeight: "100vh",
		py: 8
	}
};
