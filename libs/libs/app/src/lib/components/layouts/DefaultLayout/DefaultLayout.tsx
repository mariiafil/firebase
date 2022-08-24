import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const DefaultLayout: FC<PropsWithChildren<Record<string, unknown>>> = ({
	children
}) => {
	return <Box component="main">{children}</Box>;
};
