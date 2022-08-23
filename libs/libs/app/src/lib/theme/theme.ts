import { createTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: alpha("#F8777D", 0.8),
			light: alpha("#F8777D", 0.3),
			dark: alpha("#F8777D", 1),
			contrastText: "#fff"
		},
		grey: {
			"100": alpha("#232C2D", 0.3)
		},
		background: {
			default: "#fff",
			paper: alpha("#F8F8F8", 0.82)
		},
		secondary: {
			main: alpha("#65BCBF", 0.8),
			light: alpha("#65BCBF", 0.2),
			dark: alpha("#65BCBF", 1),
			contrastText: "#fff"
		},
		text: {
			primary: alpha("#232C2D", 0.8),
			secondary: alpha("#232C2D", 0.7),
			disabled: alpha("#fff", 0.1)
		}
	},
	shape: {
		borderRadius: "12px"
	},
	typography: {
		fontFamily: "Montserrat, sans-serif"
	}
});

export default theme;
