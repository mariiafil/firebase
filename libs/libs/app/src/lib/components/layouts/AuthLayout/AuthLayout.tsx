import { FC, PropsWithChildren } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { AuthLayoutProps } from "./AuthLayout.types";
import { authLayoutStyles } from "./AuthLayout.styles";

export const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
	title,
	children
}) => {
	return (
		<Box
			sx={authLayoutStyles.root}
			component="main"
		>
			<Stack sx={authLayoutStyles.wrapper}>
				<Avatar sx={authLayoutStyles.avatar} />
				<Typography
					component="h1"
					variant="h5"
				>
					{title}
				</Typography>
				{children}
			</Stack>
		</Box>
	);
};
