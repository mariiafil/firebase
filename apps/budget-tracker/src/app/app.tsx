import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "@app/lib";
import { AppRoutes } from "../routes";
import theme from "../../../../libs/libs/app/src/lib/theme/theme";

export function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
