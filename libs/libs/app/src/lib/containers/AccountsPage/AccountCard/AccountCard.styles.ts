import { Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const accountCardStyles = {
	root: {
		width: "100%",
		p: 1,
		backgroundColor: (theme: Theme) => theme.palette.common.white,
		borderRadius: "12px",
		"&:not(:last-child)": {
			mb: 1
		}
	},
	title: {
		color: (theme: Theme) => alpha(theme.palette.common.black, 0.6),
		fontSize: 16
	},
	amount: {
		fontSize: 28
	},
	primary: {
		color: (theme: Theme) => theme.palette.primary.main
	},
	secondary: {
		color: (theme: Theme) => theme.palette.secondary.main
	}
};
