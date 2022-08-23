import { Theme } from "@mui/material";

export const authLayoutStyles = {
	root: {
		bgcolor: (theme: Theme) => theme.palette.secondary.light,
		width: "100%",
		height: "100%",
		minHeight: "100vh",
		py: 8
	},
	wrapper: {
		alignItems: "center",
		mx: "auto",
		maxWidth: 500
	},
	avatar: {
		m: 1,
		bgcolor: (theme: Theme) => theme.palette.secondary.main
	}
};
