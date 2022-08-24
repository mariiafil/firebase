import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { PublicRouteProps } from "./PublicRoute.types";

export const PublicRoute: FC<PropsWithChildren<PublicRouteProps>> = ({
	isAuthed,
	children
}) => {
	if (isAuthed) {
		return (
			<Navigate
				to="/"
				replace
			/>
		);
	}

	return <>{children}</>;
};
