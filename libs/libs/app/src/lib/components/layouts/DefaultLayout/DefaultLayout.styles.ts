import { Theme } from "@mui/material";
import { pageWidth } from "../../../types";

export const defaultLayoutStyles = {
	root: {
    background: (theme: Theme) => theme.palette.primary.light
  },
	page: {
		maxWidth: pageWidth,
		width: "100%",
    minHeight: "100vh",
    height: "100%",
		margin: "0 auto",
    boxShadow: (theme: Theme) => `-1px 2px 26px 0px ${theme.palette.common.white}`,
	}
};
