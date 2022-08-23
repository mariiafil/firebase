import { lazy } from "react";
import { AppRoutesEnum, LayoutEnum, RouteType } from "@app/lib";

const Main = lazy(() => import("../pages/Main"));

export const privateRoutes: Array<RouteType> = [
	{
		element: <Main />,
		path: AppRoutesEnum.MAIN,
		isAuth: true,
		layout: LayoutEnum.DEFAULT
	}
];
