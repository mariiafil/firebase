import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { defaultLayoutStyles } from "./DefaultLayout.styles";

export const DefaultLayout: FC<PropsWithChildren<Record<string, unknown>>> = ({
	children
}) => {
	return (
		<Box
			component="main"
			sx={defaultLayoutStyles.root}
		>
			<Box
				component="div"
				sx={defaultLayoutStyles.page}
			>
				{children}
			</Box>
		</Box>
	);
};
