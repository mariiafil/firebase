import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutesEnum } from "@app/lib";
import { PrivateRouteProps } from "./PrivateRoute.types";

export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
	isAuthed,
	children
}) => {
	if (!isAuthed) {
		return (
			<Navigate
				to={AppRoutesEnum.LOGIN}
				replace
			/>
		);
	}

	return <>{children}</>;
};
