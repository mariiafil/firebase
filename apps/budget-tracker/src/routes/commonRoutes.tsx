import { lazy } from "react";
import { AppRoutesEnum, LayoutEnum, RouteType } from "@app/lib";

const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));

export const commonRoutes: Array<RouteType> = [
	{
		element: <Login />,
		path: AppRoutesEnum.LOGIN,
		isAuth: false,
		layout: LayoutEnum.AUTH,
		pageTitle: "Login"
	},
	{
		element: <Registration />,
		path: AppRoutesEnum.REGISTRATION,
		isAuth: false,
		layout: LayoutEnum.AUTH,
		pageTitle: "Registration"
	}
];
