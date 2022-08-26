import { Theme } from "@mui/material";

export const accountsPageStyles = {
	root: {
		width: "100%",
		minHeight: "100vh",
		height: "100%",
		p: 2,
		backgroundColor: (theme: Theme) => theme.palette.primary.main
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	loader: {
		width: "100%",
		height: "70vh",
		alignItems: "center",
		justifyContent: "center"
	},
	accounts: {
		pt: 2
	}
};
